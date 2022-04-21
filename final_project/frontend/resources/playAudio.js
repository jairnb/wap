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
// const startButton = document.getElementById('plays_btn');


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

// function playTrack(audio) {
  
// }



let offset = 0;
// create a buffer, plop in data, connect and play -> modify graph here if required
function playTrack(audioBuffer) {
  const trackSource = audioContext.createBufferSource();
  // const trackSource = audioContext.createMediaElementSource(audioSourceHTML);

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
  // const track = audioContext.createMediaElementSource(audioSourceHTML);
    
  // document.querySelector("#startbutton").hidden = true;
  
  // trackEls.forEach((el, i) => {
  
    // get children
  //   const anchor = el.querySelector('a');
  //   const loadText = el.querySelector('p');
    // const playButton = document.querySelector('#plays_btn');
  
    // load file
    loadFile(idSong).then((track) => {
  
      // set loading to false
      // el.dataset.loading = 'false';
  
      // hide loading text
      // loadText.style.display = 'none';
  
      // show button
      // playButton.style.display = 'inline-block';
  
      // allow play on click
      // playButton.addEventListener('click', function() {
  
        // check if context is in suspended state (autoplay policy)
        // if (audioContext.state === 'suspended') {
        //   audioContext.resume();
        // }
        pauseBtnIcon.style.display = 'block';
        playBtnIcon.style.display = 'none';
        getTitle(idSong);
        playTrack(track);
        // playButton.dataset.playing = true;
      // })
    })
  // })
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












// const ctx = new AudioContext();

// const audioElement = document.querySelector('audio');

// async function playMusic(idSong) {
    
//     let song = await fetch(`http://localhost:3000/songs/play/${idSong}`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'token': userTokenGlobal
//         },
//     })
//     .then(data => data.arrayBuffer())
//     .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//     .then(decodeAudio => {
//         audio = decodeAudio;
//     });
  
//     const playSound = ctx.createBufferSource();
//     playSound.buffer = audio;
//     playSound.connect(ctx.destination);
//     playSound.start(ctx.currentTime);


//     let gain = ctx.createGain();
//     let source = ctx.createMediaElementSource(audioElement);
//     source.connect(gain);
    

// }




// $("#plays_btn").click(function() {

//     if (audioElement.paused == false) {
//         audioElement.pause();
//         $("#play_btn").show();
//         $("#pause_btn").hide();
//     } else {
//         audioElement.play();
//         $("#play_btn").hide();
//         $("#pause_btn").show();
//     }
// });
















// // var for audio content

// var audio = document.getElementById('audio');

// // html5 function - toggle play/pause btn and audio

// $("#plays_btn").click(function() {

//     if (audio.paused == false) {
//         audio.pause();
//         $("#play_btn").show();
//         $("#pause_btn").hide();
//     } else {
//         audio.play();
//         $("#play_btn").hide();
//         $("#pause_btn").show();
//     }
// });


// // function for timeline

// audio.addEventListener("timeupdate", function() {
//     var currentTime = audio.currentTime,
//         duration = audio.duration,
//         currentTimeMs = audio.currentTime * 1000;
//     $('.progressbar_range').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
// });


// // count function for timeleft

// audio.addEventListener("timeupdate", function() {
//     var timeleft = document.getElementById('timeleft'),
//         duration = parseInt( audio.duration ),
//         currentTime = parseInt( audio.currentTime ),
//         timeLeft = duration - currentTime,
//         s, m;
    
//     s = timeLeft % 60;
//     m = Math.floor( timeLeft / 60 ) % 60;
    
//     s = s < 10 ? "0"+s : s;
//     m = m < 10 ? "0"+m : m;
    
//     $('#timeleft').text("-"+m+":"+s);
    
// });

// //that's all folks
// // sorry, others buttons dont work)