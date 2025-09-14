interface  Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'New York'
};
const student2: Student = {
  firstName: 'Leo',
  lastName: 'Messi',
  age: 38,
  location: 'Barcelona'
};
const studentsList = [
  student1,student2
]
const table = document.createElement("table")
studentsList.forEach(student=>{
const row = table.createElement("tr");
const firstName = row.createElement("td");
  firstName = student.firstName;
  const location = row.createElement("td");
  location = student.location;
  
})
