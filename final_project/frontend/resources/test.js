


// let isPlaying = false;

// let curr_track = document.createElement('audio');


// loadTrack(track_index);


// function loadTrack(track_index) {
//     curr_track.src = track_list[track_index].path;
//     curr_track.load();
  
//     // track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
//     // track_name.textContent = track_list[track_index].name;
//     // track_artist.textContent = track_list[track_index].artist;
//     // now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
  
//     // updateTimer = setInterval(seekUpdate, 1000);
//     curr_track.addEventListener("ended", nextTrack);
//     // random_bg_color();
//   }

// function playPauseTrack() {
//     if (!isPlaying) playTrack();
//     else pauseTrack();
// }

// function playTrack() {
//     curr_track.play();
//     isPlaying = true;
   
// }
  
// function pauseTrack() {
//     curr_track.pause();
//     isPlaying = false;
    
// }



// function nextTrack() {
//     if (track_index < track_list.length - 1)
//       track_index += 1;
//     else track_index = 0;
//     loadTrack(track_index);
//     playTrack();
// }




// async function getFile(idSong) {
//     const response = await fetch(`http://localhost:3000/songs/play/${idSong}`, {
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'token': userTokenGlobal
//                         },
//                     });
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     return audioBuffer;
// }


// async function loadFile(idSong) {
//     const track = await getFile(idSong);
//     return track;
// }