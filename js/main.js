var Student = (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.firstName = "Jacob";
var fName = stu.firstName;
stu.address = "123 fake street";
var programAttr = "data-program";
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
function displayStudent(stu) {
    var newItem = document.createElement("li");
    newItem.innerText = stu.firstName + " " + stu.lastName;
    var displaySelection = document.querySelector("#student-list > ul");
    newItem.setAttribute("data-progrma", stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-birthdate", stu.dateOfBirth.toString());
    console.log(newItem);
    newItem.onclick = showStudentData;
    displaySelection.appendChild(newItem);
}
function showStudentData() {
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttr);
    var h2 = document.querySelector("#display > h2");
    h2.innerHTML = name;
    var p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
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
