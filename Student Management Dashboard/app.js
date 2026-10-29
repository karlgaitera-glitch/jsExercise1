import { addStudentsAPI, getStudentsAPI } from "./api.js";

/**
 * Local state array that holds the current collection of student objects.
 * @type {Array<{id: number, firstName: string,
 * lastName: string, email: string}>}
 */
let localStudent = [];

/**
 * HTML form element used for registering new students.
 * @type {HTMLFormElement}
 */
const studentForm = document.querySelector('#studentForm');

/**
 * HTML table body element where student record rows are dynamically rendered.
 * @type {HTMLTableSectionElement}
 */
const studentTableBody = document.querySelector('#studentTableBody');

/**
 * Renders student records dynamically into the table body DOM element.
 * Displays a placeholder message if the student list is empty.
 *
 * @param {Array<{id: number, firstName: string, lastName: string,
 * email: string}>} dataArray - The array of student objects to render.
 * @returns {void}
 */
const renderTable = (dataArray) => {  
  studentTableBody.innerHTML = '';
  
  if (!dataArray || dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">
        No student records found.</td>
      </tr>
    `;
    return;
  }
  
  dataArray.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.email}</td>
    `;
    studentTableBody.appendChild(row);
  });
};

/**
 * Handles the submit event for the student form.
 * Validates user input, adds the new student record via API, 
 * updates local state, re-renders the table UI, and resets form inputs.
 *
 * @param {SubmitEvent} event - The DOM submit event triggered by the form.
 * @returns {void}
 */
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
 
  const studentData = {
    firstName: document.querySelector('#firstName').value.trim(),
    lastName: document.querySelector('#lastName').value.trim(),
    email: document.querySelector('#email').value.trim()
  };
  
  if (!studentData.firstName || !studentData.lastName || !studentData.email) {
    alert('Please fill out all input fields!');
    return;
  } 
  addStudentsAPI(studentData);    
  renderTable(localStudent);  
  studentForm.reset();
});

/**
 * Initializes the application state by loading student records from the API
 * and displaying the initial dataset in the table.
 *
 * @returns {void}
 */
const initApp = () => {  
  localStudent = getStudentsAPI();  
  renderTable(localStudent);
};

initApp();