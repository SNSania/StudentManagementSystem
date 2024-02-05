// Student class representing a student entity
class Student {
    constructor(public id: number, public name: string, public age: number) {}
  }
  
  // StudentManagementSystem class for managing students
  class StudentManagementSystem {
    private students: Student[] = [];
  
    // add a new student
    addStudent(student: Student): void {
      this.students.push(student);
    }
  
    //  get a student by ID
    getStudentById(id: number): Student | undefined {
      return this.students.find((student) => student.id === id);
    }
  
    //  get all students
    getAllStudents(): Student[] {
      return this.students;
    }
  
    // remove a student by ID
    removeStudentById(id: number): void {
      this.students = this.students.filter((student) => student.id !== id);
    }
  }
  
  // Example usage of the student management system
  const studentSystem = new StudentManagementSystem();
  
  // Adding students
  studentSystem.addStudent(new Student(1, "Essa", 19));
  studentSystem.addStudent(new Student(2, "Momin", 19));
  studentSystem.addStudent(new Student(3, "Momina", 21));
  
  
  
  
  // Retrieving and displaying all students
  const allStudents = studentSystem.getAllStudents();
  console.log("All Students:", allStudents);
  
  // Retrieving and displaying a student by ID
  const studentById = studentSystem.getStudentById(2);
  console.log("Student with ID 2:", studentById);
  
  // Removing a student by ID
  studentSystem.removeStudentById(1);
  console.log("All Students after removal:", studentSystem.getAllStudents());
  