namespace Subjects{
    export interface Teacher {
    experienceTeachingJava?: number;
  }
  class Java extends Subject{
    getRequirements(): string{
        return "Here is the list of requirements for React"
    }
    getAvailableTeacher(): string{
       if (this.teacher && this.teacher.firstName && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}