
/**
 * Represents a college student
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
    /**
     * The full address of the student.
     * Street, City, State Zip
     */
    address:string;
    /**
     * The program of study
     */
    program:string;
    
    /*
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }*/
}

// THIS IS TEST CODE
let stu = new Student();
stu.firstName = "Jacob";    // SET
let fName = stu.firstName;  // GET
stu.address = "123 fake street";

// Constants
const programAttr = "data-program";


window.onload = main;

function main(){
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}

function processForm(){
    let nextStudent = getStudentFromForm();
    displayStudent(nextStudent);
    clearForm();
}

function displayStudent(stu:Student):void{
    // creates <li>
    let newItem = document.createElement("li");
    newItem.innerText = stu.firstName + " " + stu.lastName;
    let displaySelection = document.querySelector("#student-list > ul");

    // Embed student data in <li>
    newItem.setAttribute("data-progrma", stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-birthdate", stu.dateOfBirth.toString());

    console.log(newItem);

    // Call showStudentData when the <li> is clicked
    newItem.onclick = showStudentData;

    // Add <li> as a child to <ul>
    displaySelection.appendChild(newItem);
}

function showStudentData(){
    let currListItem = <HTMLLIElement>this;
    let name = currListItem.innerText;
    let program = currListItem.getAttribute(programAttr);
    // alert(name + " is studying " + program);

    let h2 = document.querySelector("#display > h2");
    h2.innerHTML = name;

    let p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}

function getStudentFromForm():Student{
    let tempStudent = new Student();
    tempStudent.firstName = getInputValue("first-name");
    tempStudent.lastName = getInputValue("last-name");
    tempStudent.dateOfBirth = new Date(getInputValue("dob"));
    tempStudent.address = getInputValue("address");
    tempStudent.program = getInputValue("program");

    console.log(tempStudent);
    return tempStudent;
}

function getInputValue(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;
}