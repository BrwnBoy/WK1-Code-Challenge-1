function theGrade(){
    alert("Here's the students grade!");
}
let marks = prompt("Enter student marks between o and 100:")

let grade;
if (marks > 79) {
    grade = "A";
} else if (marks >= 60 && marks <= 79) {
    grade = "B";
} else if (marks >= 50 && marks <= 59) {
    grade = "C";
} else if (marks >= 40 && marks <= 49) {
    grade = "D";
} else {
    grade = "E";
}

console.log('The students grade is $[grade]');