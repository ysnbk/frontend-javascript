interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workTeacherTasks():string;
}

class Director implements DirectorInterface {
  function workFromHome(){
    return "Working from home";
  }
  function getCoffeeBreak(){
    return "Getting a coffee break";
  }
function workDirectorTasks(){
  return "Getting to director tasks";
}
}
class Teacher implements TeacherInterface {
  function workFromHome(){
    return "Cannot work from home";
  }
  function getCoffeeBreak(){
    return "Cannot have a break";
  }
function workTeacherTasks(){
  return "Getting to work";
}
}
function createEmployee(salary:number){
  if (salary < 500) return new Teacher()
  return new Director()
}
export function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}
function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  } else {
    throw new Error("Unknown employee type");
  }
}
