export const content = `
 ## Tree
  \`server/src/exercises/tree\` contains the implementation of a tree node.

  1. Write correct typings for class TreeNode 
  2. As you can see, a TreeNode can be initialized with value only greater than 0. However it's still possible to set negative value to a object after initialization. Write code to prevent that by throwing an error if someone is trying to set negative or 0 value.
  3. Write a function that will count nodes in the tree. Check the hint if needed.
`

export const hint = `
   1. Class can also be used as a type.
   2. Use a setter and property access modifiers.
   3. The sum of all tree's values is (recursively):
    - The value of node itself
    - Plus the sum of invoking this function on all children
`