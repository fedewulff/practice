const input = document.querySelector(`#input`);
const button = document.querySelector(`.depth`);

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    let noDuplicatesArray = [...new Set(array)].sort(function (a, b) {
      return a - b;
    });

    return this.traverse(noDuplicatesArray, 0, noDuplicatesArray.length - 1);
  }

  traverse(nums, start, end) {
    if (start > end) {
      // if start>end means left tree or right subtree is not possible so return null
      return null;
    }
    let mid = Math.floor((start + end) / 2); // get the mid index
    let root = new Node(nums[mid]); // make a new node

    root.left = this.traverse(nums, start, mid - 1); // now recursively generate left subtree

    root.right = this.traverse(nums, mid + 1, end); // similarly generate right subtree

    this.root = root;
    return root; // return the root
  }

  insert(value) {
    const node = this.root;
    if (this.root == null) {
      this.root = new Node(value);
      return;
    } else {
      function repeat(node) {
        if (node.data === value) {
          return;
        }
        if (node.data > value) {
          if (node.left == null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            repeat(node.left);
          }
        }
        if (node.data < value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            repeat(node.right);
          }
        }
      }
      return repeat(node);
    }
  }

  deleteItem(value) {
    let treeNode = this.root;
    if (treeNode.data == value) {
      let count = 0;
      let outnode = treeNode.right;
      function deleteDoubleParent(node2, nodeBefore) {
        outnode = node2;
        if (node2.left) {
          count++;
          deleteDoubleParent(node2.left, outnode);
          return;
        }
        if (!node2.left) {
          console.log(count);
          console.log(node2);
          console.log(nodeBefore);
          console.log(treeNode.right);
          nodeBefore.left = node2.right;
          node2.left = treeNode.left;
          treeNode.data = node2.data; // POR QUE SI PONGO TREENODE = NODE2, NO FUNCIONA
          // if (count > 0) {
          //   node2.right = nodeBefore;
          // }
          return;
        }
      }
      deleteDoubleParent(treeNode.right, outnode);
      return;
    }

    function repeat(node, previousNode) {
      if (node.data > value) {
        if (node.left.data === value && !node.left.left && !node.left.right) {
          console.log(1);
          node.left = null;
          return;
        }
        if (node.left.data === value && node.left.left && !node.left.right) {
          console.log(2);
          node.left = node.left.left;
          return;
        }
        if (node.left.data === value && !node.left.left && node.left.right) {
          node.left = node.left.right;
          return;
        }
        if (node.left.data === value && node.left.left && node.left.right) {
          console.log(4);
          let count = 0;
          let outnode = node.left.right;

          function deleteDoubleParent(node2, nodeBefore) {
            let newNode = node2;
            outnode = node2;

            if (node2.left) {
              count++;
              deleteDoubleParent(node2.left, outnode);
              return;
            }

            if (!node2.left) {
              console.log(count);
              console.log(node2);
              console.log(nodeBefore);
              console.log(node.right);
              nodeBefore.left = node2.right;
              node2.left = node.left.left;
              node.left = node2;
              if (count > 0) {
                console.log(3333);
                node2.right = nodeBefore;
              }
              return;
            }
          }
          deleteDoubleParent(node.left.right, outnode);
          return;
        }

        let previous = node;
        repeat(node.left, previous);
      }
      if (node.data < value) {
        if (node.right.data === value && !node.right.left && !node.right.right) {
          console.log(1.2);
          node.right = null;
          return;
        }
        if (node.right.data === value && node.right.left && !node.right.right) {
          console.log(2.2);
          node.right = node.right.left;
          return;
        }
        if (node.right.data === value && !node.right.left && node.right.right) {
          console.log(3.2);
          node.right = node.right.right;
          return;
        }
        if (node.right.data === value && node.right.left && node.right.right) {
          let count = 0;
          console.log(4.2);
          let outnode = node.right.right;
          function deleteDoubleParent(node2, nodeBefore) {
            let newNode = node2;
            outnode = node2;

            if (node2.left) {
              count++;
              deleteDoubleParent(node2.left, outnode);
              return;
            }

            if (!node2.left) {
              console.log(count);
              console.log(node2);
              console.log(nodeBefore);
              console.log(node.right);
              nodeBefore.left = node2.right;
              node2.left = node.right.left;
              node.right = node2;
              if (count > 0) {
                node2.right = nodeBefore;
              }
              return;
            }
          }
          deleteDoubleParent(node.right.right, outnode);
          return;
        }

        let previous = node;
        repeat(node.right, previous);
        return;
      }
      // if (node.data === value) {
      //   if (treeNode.data == value) {
      //     function deleteTreeNode(node2, nodeBefore) {
      //       let newNode = node2;
      //       if (node2.left) {
      //         deleteTreeNode(node2.left, newNode);
      //       }
      //       if (!node2.left && node2.right && nodeBefore.left == node2) {
      //         node.data = node2.data;
      //         nodeBefore.left = node2.right;
      //         node2.right = nodeBefore;
      //         return;
      //       }
      //       if (!node2.left) {
      //         node.right = node2;
      //         return;
      //       }
      //     }
      //     deleteTreeNode(node.right, node);
      //     return;
      //   }
      //   if (previousNode.left && !previousNode.right && !node.left && !node.right) {
      //     previousNode.left = null;
      //     return;
      //   }
      //   if (!previousNode.left && previousNode.right && !node.left && !node.right) {
      //     previousNode.right = null;
      //     return;
      //   }
      //   if (previousNode.left && !previousNode.right && (!node.left || !node.right)) {
      //     previousNode.left = node.left || node.right;
      //     return;
      //   }
      //   if (!previousNode.left && previousNode.right && (!node.left || !node.right)) {
      //     previousNode.right = node.left || node.right;
      //     return;
      //   }
      //   if (previousNode.left == node && previousNode.right && (!node.left || !node.right)) {
      //     previousNode.left = node.left || node.right;
      //     return;
      //   }
      //   if (previousNode.left && previousNode.right == node && (!node.left || !node.right)) {
      //     previousNode.right = node.left || node.right;
      //     return;
      //   }
      //   if (node.left && node.right) {
      //     function deleteDoubleParent(node2, nodeBefore) {
      //       let newNode = node2;

      //       if (node2.left) {
      //         deleteDoubleParent(node2.left, newNode);
      //       }
      //       if (!node2.left && node2.right && nodeBefore.left == node2) {
      //         previousNode.right = node2;
      //         nodeBefore.left = node2.right;
      //         node2.right = nodeBefore;
      //         return;
      //       }
      //       if (!node2.left) {
      //         previousNode.right = node2;
      //         return;
      //       }
      //     }
      //     deleteDoubleParent(node.right, node);
      //   }
      // }
    }
    repeat(treeNode);
  }

  find(value) {
    let treeNode = this.root;
    let returnValue;
    function repeat(node) {
      if (node === null) {
        returnValue = `Value not found`;
        return;
      }
      if (value < node.data) {
        repeat(node.left);
      }

      if (node.data < value) {
        repeat(node.right);
      }

      if (node.data === value) {
        returnValue = node;
      }
    }
    repeat(treeNode);

    return returnValue;
  }

  levelOrder(node) {
    if (node === null) {
      return;
    }

    let queue = [];
    let result = [];
    queue.push(node);
    function addToQueue() {
      const firstNode = queue.shift();

      result.push(firstNode.data);

      if (firstNode.left) {
        queue.push(firstNode.left);
      }
      if (firstNode.right) {
        queue.push(firstNode.right);
      }
      if (queue.length > 0) {
        addToQueue();
      }
      return;
    }
    addToQueue();

    // while (queue.length > 0) {
    //   const firstNode = queue.shift();
    //   result.push(firstNode.data);

    //   if (firstNode.left) {
    //     queue.push(firstNode.left);
    //   }
    //   if (firstNode.right) {
    //     queue.push(firstNode.right);
    //   }
    // }

    return result;
  }

  inOrder(node) {
    if (node === null) {
      return;
    }

    let queue = [];
    let result = [];
    queue.push(node);
    while (queue.length > 0) {
      const firstNode = queue.shift();
      result.push(firstNode.data);

      if (firstNode.left) {
        queue.push(firstNode.left);
      }
      if (firstNode.right) {
        queue.push(firstNode.right);
      }
    }

    return result.sort(function (a, b) {
      return a - b;
    });
  }

  preOrder(node) {
    if (node === null) {
      return;
    }
    let queue = [];
    queue.push(node.data);
    function addToQueue(node) {
      if (node.left) {
        queue.push(node.left.data);
        addToQueue(node.left);
      }
      if (node.right) {
        queue.push(node.right.data);
        addToQueue(node.right);
      }
    }
    addToQueue(node);
    return queue;
  }

  postOrder(node) {
    if (node === null) {
      return;
    }
    let queue = [];

    function addToQueue(node) {
      if (node.left) {
        addToQueue(node.left);
        queue.push(node.left.data);
      }
      if (node.right) {
        addToQueue(node.right);
        queue.push(node.right.data);
      }
    }

    addToQueue(node);
    queue.push(node.data);
    return queue;
  }

  height(node) {
    if (node === null) {
      return 0;
    }

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(nodeToFind) {
    if (nodeToFind === null) {
      return `Not found`;
    }
    let count = 0;
    function repeat(node) {
      if (nodeToFind.data < node.data) {
        count++;
        repeat(node.left);
      }
      if (node.data < nodeToFind.data) {
        count++;
        repeat(node.right);
      }
    }
    repeat(this.root);
    return count;
  }

  isBalanced(root) {
    if (root == null) return true;

    // for left and right subtree height
    let lh = this.height(root.left);
    let rh = this.height(root.right);

    // allowed values for (lh - rh) are 1, -1, 0
    if (Math.abs(lh - rh) <= 1 && this.isBalanced(root.left) == true && this.isBalanced(root.right) == true) return true;

    // if we reach here means tree is not
    // height-balanced tree
    return false;
  }

  rebalance() {
    let queue = [];
    let result = [];

    queue.push(this.root);
    while (queue.length > 0) {
      const firstNode = queue.shift();
      result.push(firstNode.data);

      if (firstNode.left) {
        queue.push(firstNode.left);
      }
      if (firstNode.right) {
        queue.push(firstNode.right);
      }
    }
    return this.buildTree(result);
  }
}

const bst = new Tree();
bst.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
bst.insert(6);
bst.insert(2);
bst.insert(28);
bst.insert(24);
bst.insert(25);
bst.insert(29);
bst.insert(8);
bst.insert(100);
bst.insert(150);
bst.insert(4.5);
bst.insert(0.5);
bst.insert(8.5);
bst.insert(8.7);
console.log(bst);

console.log(`Find array:`);
console.log(bst.find(24));
console.log(`LevelOrder:`);
console.log(bst.levelOrder(bst.root));
console.log(`InOrder:`);
console.log(bst.inOrder(bst.root));
console.log(`PreOrder:`);
console.log(bst.preOrder(bst.root));
console.log(`PostOrder:`);
console.log(bst.postOrder(bst.root));
console.log(`Height:`);
console.log(bst.height(bst.root));
console.log(`Depth:`);
console.log(bst.depth(bst.find(6345)));

console.log(`Is tree balanced?:`);
console.log(bst.isBalanced(bst.root));
// console.log(`Rebalance:`);
// console.log(bst.rebalance());
console.log(`Tree with deleted node:`);
bst.deleteItem();
console.log(bst);
