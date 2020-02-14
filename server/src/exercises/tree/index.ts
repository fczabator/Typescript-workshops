import {TreeNode, countValues} from './TreeNode';

export function getValue() {
  const child1 = new TreeNode(10, []);
  const child2 = new TreeNode(100, []);
  const parent = new TreeNode(12, [child1, child2]);

  // Make sure this cannot be done. Comment this line after fix.
  parent.value = -1100;

  return countValues(parent)
}