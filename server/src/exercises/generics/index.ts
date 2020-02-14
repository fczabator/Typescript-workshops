import {
  Developer,
  Manager,
  TechnologyTypes,
  calculateSalary,
  // getMostExperiencedEmployee,
  printAll
} from './Company';

export const getCompanyInfo = () => {
  const john = new Manager('John', 2);
  const jasmin = new Manager('Jasmin', 4);
  const jack = new Developer('Jack', 10, TechnologyTypes.JAVASCRIPT);
  const jerome = new Developer('Jerome', 12, TechnologyTypes.CSHARP);
  const james = new Developer('James', 2, TechnologyTypes.PHP);

  const employees = [
    john,
    jasmin,
    jack,
    jerome,
    james,
  ];

  const salariesForEmployees = employees.map(employee => ({
    name: employee.name,
    salary: calculateSalary(employee)
  }))

  return {
    // mostExperienced: getMostExperiencedEmployee(employees).name,
    salariesForEmployees,
    printedCompany: printAll(employees)
  };
}