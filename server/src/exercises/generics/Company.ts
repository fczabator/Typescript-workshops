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
  name: any;
  yearsOfExperience: any;
  technology: TechnologyTypes;
  
  constructor(name: any, yearsOfExperience: any, technology: TechnologyTypes) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.technology = technology;
  }
  
  print(): any {
    return `Developer ${this.name}, ${this.yearsOfExperience}, ${this.technology}`;
   }
}

export class Manager {
  name: any;
  yearsOfExperience: any;
  
  constructor(name: any, yearsOfExperience: number) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
  }

  print(): any {
    return `Developer ${this.name}, ${this.yearsOfExperience}`;
  }
}

export function printAll(objectsToPrint: any): any {
  return objectsToPrint.map((obj: any) => obj.print()).join(' | ')
}

export function calculateSalary(employee: Manager | Developer) {
  // if (employee.technology) {
  //   return stakes[employee.technology] * (1 + employee.yearsOfExperience * 0.1);
  // }
  // return 80 + (1 + employee.yearsOfExperience * 0.1);
  return -1;
}

