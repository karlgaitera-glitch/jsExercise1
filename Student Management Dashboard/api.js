const mockStudentDb = [
  /*{
    id: 179325206313,
    firstName: "Carl",
    lastName: "Gaitera",
    email: "carlg@gmail.com",
  },
  {
    id: 179325206320,
    firstName: "Karl",
    lastName: "Gaitera",
    email: "karlg@gmail.com",
  },*/
];

/**
 * Simulates a GET request to retrieve all students.
 * @returns {Array} Array of student objects
 */
export function getStudentsAPI() {
  return mockStudentDb;
}

/**
 * Simulates a POST request to add a new student.
 * @param {Object} newStudentData - Object containing firstName, lastName, and email
 * @returns {Object} The saved student object with a unique ID
 */
export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(),
    ...newStudentData,
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}
