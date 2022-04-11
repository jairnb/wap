// Question 1
function Student(firstName, lastName, ...grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;

    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    }

    this.computeAverage = function(){
        return (this.grades.reduce((val, acc) => val + acc))/this.grades.length;
    }
}


let students = [];
let s1 = new Student("Peter", "Parker", 93, 81, 93);
s1.inputNewGrade(20);
s1.inputNewGrade(40);
s1.inputNewGrade(30);
let s2 = new Student("Bruce", "Wayne", 32, 81, 88);
s2.inputNewGrade(10);
s2.inputNewGrade(20);
s2.inputNewGrade(90);
let s3 = new Student("Clark", "Kent", 100, 81, 93);
s3.inputNewGrade(80);
s3.inputNewGrade(40);
s3.inputNewGrade(30);

// console.log(s1.grades)

students.push(s1, s2, s3);

function allStudentGrades(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element.computeAverage();
    });
    return sum / arr.length;
}

// console.log((93 + 81 + 93 + 20 + 40 + 30)/6)
// console.log(s1.computeAverage());
// console.log(s1.grades)

console.log(allStudentGrades(students));


