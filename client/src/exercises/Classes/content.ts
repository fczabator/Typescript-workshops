export const content = `
  ##Sorting
  \`server/src/exercises/sorting\` can be used to sort different kinds of data. For now only numbers list and string is available. 

  1. Create a class Sorter which NumbersCollection and CharactersCollection classes will inherit from.
  2. Restrict Sorter class from being initialized.
  3. Extract the common logic to the parent class. Think about which methods can be extracted to Sorter.
  4. Refactor classes to use constructor shorthand (so to get rid off unnecessary this.prop = prop in constructor)

`;

export const hint = `
  2. keyword: 'abstract'
  4. \`constructor(public prop: string) {})\`
`