interface Printable {
  print(): string
}

export enum TechnologyTypes {
  JAVASCRIPT = 'Javascript',
  CSHARP = 'C#',
  PHP = 'PHP',
}

type Stakes = {
  [key in TechnologyTypes]: number
}

const stakes: Stakes = {
  [TechnologyTypes.JAVASCRIPT]: 100,
  [TechnologyTypes.CSHARP]: 80,
  [TechnologyTypes.PHP]: 65,
}

export class Developer {
  name: string;
  yearsOfExperience: number;
  technology: TechnologyTypes;
  
  constructor(name: string, yearsOfExperience: number, technology: TechnologyTypes) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.technology = technology;
  }
  
  print(): string {
    return `Developer ${this.name}, ${this.yearsOfExperience}, ${this.technology}`;
   }
}

export class Manager {
  name: string;
  yearsOfExperience: number;
  
  constructor(name: string, yearsOfExperience: number) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
  }

  print(): string {
    return `Developer ${this.name}, ${this.yearsOfExperience}`;
  }
}

export function printAll<T extends Printable>(objectsToPrint: T[]): string {
  return objectsToPrint.map(obj => obj.print()).join(' | ')
}


interface Employee {
  yearsOfExperience: number;
}

export function getMostExperiencedEmployee<T extends Employee>(employees: T[]): T {
  let employee: T = employees[0];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].yearsOfExperience > employee.yearsOfExperience) {
      employee = employees[i];
    }
  }
  return employee;
}

function isDeveloper(employee: Employee): employee is Developer {
  return (employee as Developer).technology !== undefined;
}

export function calculateSalary(employee: Manager | Developer) {
  if (isDeveloper(employee)) {
    return stakes[employee.technology] * (1 + employee.yearsOfExperience * 0.1);
  } 
  return 80 + (1 + employee.yearsOfExperience * 0.1);
}

