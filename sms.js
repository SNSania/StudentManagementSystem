// Student class representing a student entity
var Student = /** @class */ (function () {
    function Student(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Student;
}());
// StudentManagementSystem class for managing students
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    // add a new student
    StudentManagementSystem.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    //  get a student by ID
    StudentManagementSystem.prototype.getStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    //  get all students
    StudentManagementSystem.prototype.getAllStudents = function () {
        return this.students;
    };
    // remove a student by ID
    StudentManagementSystem.prototype.removeStudentById = function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    };
    return StudentManagementSystem;
}());
// Example usage of the student management system
var studentSystem = new StudentManagementSystem();
// Adding students
studentSystem.addStudent(new Student(1, "Essa", 19));
studentSystem.addStudent(new Student(2, "Momin", 19));
studentSystem.addStudent(new Student(3, "Momina", 21));
// Retrieving and displaying all students
var allStudents = studentSystem.getAllStudents();
console.log("All Students:", allStudents);
// Retrieving and displaying a student by ID
var studentById = studentSystem.getStudentById(2);
console.log("Student with ID 2:", studentById);
// Removing a student by ID
studentSystem.removeStudentById(1);
console.log("All Students after removal:", studentSystem.getAllStudents());
