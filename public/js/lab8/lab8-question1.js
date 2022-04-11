// Question 1
const student = {
    firstName: String,
    lastName: String,
    grades: [],

    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },

    computeAverage(){
        return (this.grades.reduce((acc, val) => val + acc))/this.grades.length;
    }
}


let students = [];
let s1 = Object.create(student);
s1.firstName = "S1";
s1.lastName = "LastName"
s1.inputNewGrade(20);
s1.inputNewGrade(40);
s1.inputNewGrade(30);
let s2 = Object.create(student);
s2.firstName = "S2";
s2.lastName = "LastName"
s2.inputNewGrade(10);
s2.inputNewGrade(20);
s2.inputNewGrade(90);
let s3 = Object.create(student);
s3.firstName = "S3";
s3.lastName = "LastName"
s3.inputNewGrade(80);
s3.inputNewGrade(40);
s3.inputNewGrade(30);

// console.log((20+40+30+10+20+90+80+40+30)/9)

students.push(s1, s2, s3);

function allStudentGrades(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element.computeAverage();
    });
    return sum / arr.length;
}


console.log(s1.computeAverage());
console.log(s1.grades)

console.log(allStudentGrades(students));