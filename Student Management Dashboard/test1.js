import { addStudentsAPI, getStudentsAPI } from "./api.js";

//Test 1
console.log("Test 1");
console.log(getStudentsAPI());

//Test 2
console.log("Test 2");
const newStudent = addStudentsAPI({
    firstName: "Kcarl",
    lastName: "Gaitera",
    email: "kcarlg@gmail.com",        
});
console.log(getStudentsAPI());