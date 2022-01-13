depth can be used loosely as a term but for this question, we know it means the height
start at the top most node - the root node
the root node is the only node in the tree we know what the node’s depth is
recursive approach: return the sum of the depths and call the recursive formula on the child’s left and right, B(n, d) = d + B(l, d+1) + f(r, d+1)
iterative approach: use a stack to traverse through the tree, grab the root node and add it onto the stack and store the node’s depth. as long as the stack ins’t empty, pop it off the stack and keep track of the running sum of the depths
time complexity: o(n) where n is the total number of nodes in the binary tree because we have to traverse all of the nodes
space complexity: o(h) where h is the height of the binary tree

try #1

function nodeDepths(root) {
const stack = []; //if i'm going to use a recursive approach, i shouldn't use a stack, but this stack should be const stack = [{node: root, depth: 0}]
let currentDepth = 1 //don't need this instead i need a variable that sums the depths such as sumOfDepths = 0
currentNode = this.value; //don't need this
if(root === null && stack === null){ //don't need this, but there should be a while loop that stops when the stack length is 0
return -1
} else
{
return stack.reverse.forEach((element, index) => {element.length + 1 \* index + 1})
}
if (currentNode.left !== null){ //we want to be popping the {node, depth} pairs off so that the while loop will end
//then we want to add the depth to the total sumOfDepths
stack.shift([currentNode.left])
currentDepth++;
nodeDepths(root.left)
}
if (currentNode.right !== null){
stack[-(currentDepth)].push(currentNode.right)
nodeDepths(root.right);
} //instead of these if statements, we want to push onto the next nodes of the tree and add one to the depth, which represents the level of the tree we're traversing
}
