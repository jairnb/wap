// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 2) {
//         let j = i;
//         let shooter = function () {
//             // console.log(b)
//             alert(i);
//         };
//         shooters.push(shooter);
//         i++;
  
//     }
//     return shooters;
// }

// let army = makeArmy();

// army[0];




// Question 2
// function print(from, to) {
//     let timerId = setInterval(() => {
//         console.log(from++);
//     }, 1000);

//     setTimeout(() => clearInterval(timerId), (to-from + 1)*1000);
// }
// print(8, 20);


// Question 3
let i = 0;
setTimeout(() => alert(i), 100);

for (let index = 0; index < 10000000; index++) {
    i++;
}