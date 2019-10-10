
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