const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = null;
const audioSourceHTML = document.getElementById('audio');
const playsBtn = document.getElementById('plays_btn');
const playBtnIcon = document.getElementById('play_btn');
const pauseBtnIcon = document.getElementById('pause_btn');
const prevBtnIcon = document.getElementById('prev_btn');
const nextBtnIcon = document.getElementById('next_btn');
const songTitle = document.getElementById('song-title');
let currentPlayingSoundId = null;


async function getFile(idSong) {
    const response = await fetch(`http://localhost:3000/songs/play/${idSong}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'token': userTokenGlobal
                        },
                    });
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}


async function loadFile(idSong) {
    const track = await getFile(idSong);
    return track;
}


let offset = 0;
// create a buffer, plop in data, connect and play -> modify graph here if required
function playTrack(audioBuffer) {
  const trackSource = audioContext.createBufferSource();

  trackSource.buffer = audioBuffer;
  trackSource.connect(audioContext.destination)

  if (offset == 0) {
    trackSource.start();
    offset = audioContext.currentTime;
  } else {
    trackSource.start(0, audioContext.currentTime - offset);
  }

  return trackSource;
}



function playMusic(idSong) {
  currentPlayingSoundId = idSong;
  if (audioContext != null) {
    audioContext.close();
    audioContext = null;
  }

  startPlayAudio(idSong);
};



function startPlayAudio(idSong){
  audioContext = new AudioContext();
  loadFile(idSong).then((track) => {
    pauseBtnIcon.style.display = 'block';
    playBtnIcon.style.display = 'none';
    getTitle(idSong);
    playTrack(track);
  });
}


playsBtn.addEventListener('click', function() {
  if (audioContext != null) {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
      pauseBtnIcon.style.display = 'block';
      playBtnIcon.style.display = 'none';
    }
    else {
      audioContext.suspend();
      pauseBtnIcon.style.display = 'none';
      playBtnIcon.style.display = 'block';
    }
  }
}, false);


prevBtnIcon.addEventListener('click', async function() {
  if (audioContext != null) {
    let playlist = await fetch(`http://localhost:3000/playlists/${sessionStorage.getItem('token')}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': sessionStorage.getItem('token')
        },
    });
    let playlistItem = await playlist.json();
    let previous = null;
    for (let index = 0; index < playlistItem.songs.length; index++) {
      if (playlistItem.songs[index] == currentPlayingSoundId) {
        previous = playlistItem.songs[index - 1];
      } 
    }
    let check = playlistItem.songs.find(d => d == previous);
    if(check){
      playMusic(check);
    }
  }
}, false);



nextBtnIcon.addEventListener('click', async function() {
  if (audioContext != null) {
    let playlist = await fetch(`http://localhost:3000/playlists/${sessionStorage.getItem('token')}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': sessionStorage.getItem('token')
        },
    });
    let playlistItem = await playlist.json();
    let next = null;
    for (let index = 0; index < playlistItem.songs.length; index++) {
      if (playlistItem.songs[index] == currentPlayingSoundId) {
        next = playlistItem.songs[index + 1];
      } 
    }
    let check = playlistItem.songs.find(d => d == next);
    if(check){
      playMusic(check);
    }
  }
  
}, false);




async function getTitle(id) {
  let song = await fetch(`http://localhost:3000/songs/get-title/${id}`, {
      headers: {
          'Content-Type': 'application/json',
          'token': userTokenGlobal
      }, 
  });
  let item = await song.json();
  songTitle.textContent = item;
}









