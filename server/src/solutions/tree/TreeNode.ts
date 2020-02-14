export class TreeNode {
  private _value: number;
  nodes: TreeNode[];

  constructor(value: number, nodes: TreeNode[]) {
    if (value < 0) {
      throw new Error(`Node cannot be initialized with the value of ${value}`);
    }
    this._value = value;
    this.nodes = nodes;
  }

  get value(): number {
    return this._value;
  }

  set value(valueToSet) {
    if (valueToSet < 0) { 
      throw new Error(`Value of ${valueToSet} cannot be set`);
    }
    this._value = valueToSet;
  }
}

function sum(list: number[]): number {
  return list.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
}

export function countValues(nodeToCount: TreeNode): number {
  return nodeToCount.value + sum(nodeToCount.nodes.map(node => countValues(node)));
}



