export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

console.log('C++');

cpp.setTeacher(cTeacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');

cpp.setTeacher(cTeacher);

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');

cpp.setTeacher(cTeacher);

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());