// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
          this.tree = tree;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
          const target = value
          const closest = 0
     function insertHelper (tree, left, right, target){
           if (target > left){
               closest = target
               insertHelper(tree, right)
           }
           if (value < left){
               insertHelper(tree, left)
           }
       }
      return this;
    }
  
    contains(value) {
      function containsHelper (tree, right, left, value){
              if (left < value){
                  containsHelper(right, left, value)
              }
              if (right > value){
                  containsHelper(right, left, value)
              }
              if (this === value){
                  return true;
              }
          }
          return false
    }
  
    remove(value) {
      function findAndRemove (tree, left, right, value){
              if (left > value){
                  findAndRemove(tree, right, value)
              }
              if (right > value){
                  findAndRemove(tree, left, value)
              }
              if (this === value){
                  this = null;
              }
          }
      return this;
    }
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  