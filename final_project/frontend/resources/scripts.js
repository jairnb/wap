window.onload = function () {
    let token = sessionStorage.getItem('token');
    if (token != undefined || token != null) {
        loginHelper(token);
    }
}

let loginSubmitBtn = document.getElementById('login-submit-btn');
let logoutBtn = document.getElementById('logout-btn');
let beforeLoginContent = document.getElementsByClassName('before-login-content');
let afterLoginContent = document.getElementsByClassName('after-login-content');
let username = document.getElementById('username');
let password = document.getElementById('password');
let error_msg = document.getElementById('error-msg');
let userTokenGlobal = null;

hide(afterLoginContent);



loginSubmitBtn.onclick = async function (event) {
    event.preventDefault();
    if (username.value == '' || username.value == undefined || username.value == null || password.value == '' || password.value == undefined || password.value == null) {
        alert('Fields can not be empty!!!');
        return;
    }
    let user = { username: username.value, password: password.value }
    const response = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    });
    let final_response = await response.json();
    
    if (response.status == 200) {
        saveToken(final_response?.token);
        loginHelper(final_response?.token);
    }
    if (response.status == 404) {
        error_msg.style.display = 'block';
    }
}

function loginHelper(token) {
    hide(beforeLoginContent);
    show(afterLoginContent);
    renderPlaylist(token);
    userTokenGlobal = token;
    loadTableAllSongs();
}


logoutBtn.onclick = function (event) {
    sessionStorage.removeItem('token');
    username.value = '';
    password.value = '';
    hide(afterLoginContent);
    show(beforeLoginContent);
    document.getElementById("login-form-div").style = 'login-form-class-div'; 
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








