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
      if (this.left === null && this.right === null ){
          return array
      } if(this){
          array.addChild(this)
          depthFirstSearch(array)
      }
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  