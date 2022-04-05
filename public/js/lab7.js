
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    fname: 'John',
    loginOk() {
        alert(`${this.fname} logged in`);
    },
    loginFail() {
        alert(`${this.fname} fail to log in`);
    }
};

askPassword(user.loginOk.bind(user),  user.loginFail.bind(user))
askPassword(() => user.loginOk.call(user),  () => user.loginFail.call(user))
askPassword(() => user.loginOk.apply(user),  () => user.loginFail.apply(user))



//Question 2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function (title) {
        this.students.forEach(function (student) {
            console.log(title + ": " + student);
        });
    }
};
group.showList.bind(group, group.title)();


let groupArrow = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)  
        );
    }
};
groupArrow.showList();


