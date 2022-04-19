const Playlist = require('./playlist');

const users_arr = [ { id: 1, username: 'Pedro', password: '1234', token: '123654'}];

let User = class  {
    constructor(username, password){
        this.id = users_arr.length + 1;
        this.username = username;
        this.password = password;
        this.token = this.generateToken(username);
    }

    static save(user) {
        let new_user = new User(user.username, user.password);
        users_arr.push(new_user);
        return new_user;
    }

    static getAll() {
        return users_arr;
    }

    generateToken(username) {
        return Date.now() + username;
    }
};

function login(user_form) {
    let user_login = users_arr.find(u => u.username == user_form.username && u.password == user_form.password);
    if (user_login != undefined) {
        return {
            msg: 'success login',
            token: user_login.token 
        }
    }else {
        let u = User.save(user_form);
        Playlist.save(u.token);
        return {
            msg: 'new user added',
            token: u.token,
        }
    }
}

module.exports = {
    User,
    users_arr, 
    login
};