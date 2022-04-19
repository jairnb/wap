
let loginSubmitBtn = document.getElementById('login-submit-btn');
let logoutBtn = document.getElementById('logout-btn');
let beforeLoginContent = document.getElementsByClassName('before-login-content');
let afterLoginContent = document.getElementsByClassName('after-login-content');
let username = document.getElementById('username');
let password = document.getElementById('password');
let userTokenGlobal = null;
hide(afterLoginContent);

loginSubmitBtn.onclick = async function (event) {
    event.preventDefault();
    if (username.value == '' || username.value == undefined || username.value == null || password.value == '' || password.value == undefined || password.value == null) {
        alert('Fields can not be empty!!!');
        return;
    }
    let user = { username: username.value, password: password.value }
    const response = await fetch("http://localhost:3000/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    });
    let final_response = await response.json();
    
    if (response.status == 200) {
        saveToken(final_response?.token);
        hide(beforeLoginContent);
        show(afterLoginContent);
        console.log(final_response)
        renderPlaylist(final_response?.token);
    }
   
}

logoutBtn.onclick = function (event) {
    // sessionStorage.removeItem('token');
    username.value = '';
    password.value = '';
    hide(afterLoginContent);
    show(beforeLoginContent);
}

function saveToken(token){
    if(token != undefined) {
        sessionStorage.setItem('token', token);       
    }
}

function hide(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
    }
}

function show(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = 'contents';
    }
}


async function renderPlaylist(token) {
    const table = document.getElementById("playlist-songs-table");
    table.innerHTML = '';

    let playlist = await fetch(`http://localhost:3000/playlists/${token}`);
    let playlistItem = await playlist.json();

    if (playlistItem.songs.length > 0) {
        playlistItem.songs.forEach(item => addToPlaylist(item));   
    }

}