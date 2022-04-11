const students = [
    { name: 'Quincy', grade: 96, courses: ['cs301', 'cs303'] },
    { name: 'Jason', grade: 84, courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grade: 100, courses: ['cs105', 'cs211'] },
    { name: 'Sam', grade: 65, courses: ['cs445', 'cs303'] },
    { name: 'Katie', grade: 90, courses: ['cs303', 'cs477'] }
];


let r = students.filter(s => s.courses.includes('cs303'))
let t = r.reduce((previous, current, index, array) => previous + current.grade, 0) /r.length;

console.log(students.filter(s => s.courses.includes('cs303')))

// let m = students.reduce((previous, current, index, array) => previous + current.grade, 0);

console.log(t)

console.log((96 + 65+90)/3)