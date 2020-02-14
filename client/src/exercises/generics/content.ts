export const content = `
  ## Generics
  \`server/src/exercises/generics\` contains class definition of Developer and Manager. By clicking the 'get company info' button user should see different information about the company.

  1. Write correct typings for Developer and Manager class
  2. Write correct typings for \`printAll\` function. Don't create a new parent class, instead use an interface.
  3. Write a function \`getMostExperiencedEmployee\` that will return the employee who has the largest number of years of experience. The function should accept the list of employees (Manager or Developer) and return the exact type of employee (Manager or Developer). Make the function generic.
  4. \`calculateSalary\` function is not working. Fix it.
  5. Bonus: Refactor the code not to use classes but only interfaces/types.
`;

export const hint = `
  2. Don't use union type as an argument here (\`Developer | Manager\`). Creating a new class of e.g. 'Tester' would require to add a new type to the union.
  3. To use, in the body of the function, some properties that only some types have, you can add a constraint on generic. Think about declaring a new interface.
  4. Use type guards.
`