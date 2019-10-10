var Student = (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.firstName = "Jacob";
var fName = stu.firstName;
stu.address = "123 fake street";
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var nextStudent = getStudentFromForm();
    displayStudent(nextStudent);
    clearForm();
}
function getStudentFromForm() {
    var tempStudent = new Student();
    tempStudent.firstName = getInputValue("first-name");
    tempStudent.lastName = getInputValue("last-name");
    tempStudent.dateOfBirth = new Date(getInputValue("dob"));
    tempStudent.address = getInputValue("address");
    tempStudent.program = getInputValue("program");
    console.log(tempStudent);
    return tempStudent;
}
function getInputValue(id) {
    return document.getElementById(id).value;
}
