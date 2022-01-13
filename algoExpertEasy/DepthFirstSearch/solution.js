// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      //traverse leftward until we reach a node with children, where we call the dfs recursively 
        array.push(this.name) //push in the node
        for (const child of this.children){ //traverse over the iterable children in the child node
            child.depthFirstSearch(array) //call depthFirstSearch on the child and pass in the final array
        }
        return array //only useful for the first iteration
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  