namespace Subjects{
    export interface Teacher {
    experienceTeachingC?: number;
  }
  class Cpp extends Subject{
    getRequirements(): string{
        return "Here is the list of requirements for Cpp"
    }
    getAvailableTeacher(): string{
       if (this.teacher && this.teacher.firstName && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}