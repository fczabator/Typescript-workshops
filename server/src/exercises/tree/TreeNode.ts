export class TreeNode {
  value: any;
  nodes: any;

  constructor(value: any, nodes: any) {
    if (value < 0) {
      throw new Error(`Node cannot be initialized with the value of ${value}`);
    }
    this.value = value;
    this.nodes = nodes;
  }
}

export function countValues(nodeToCount: any): number {
  return -1;
}



