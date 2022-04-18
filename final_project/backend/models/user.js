const users = [ { id: 1, username: 'Pedro', password: '1234', token: '123654'}];

module.exports = class User {
    constructor(username, password){
        this.id = users.length + 1;
        this.username = username;
        this.password = password;
        this.token = this.generateToken(username);
    }

    static save(user) {
        let new_user = new User(user.username, user.password);
        users.push(new_user);
        return new_user.token;
    }

    static getAll() {
        return users;
    }

    generateToken(username) {
        return Date.now() + username;
    }
};