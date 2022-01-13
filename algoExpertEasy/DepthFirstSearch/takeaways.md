*return the nodes in their order from smallest to largest
*can be implemented recursively 
*for every node add the given nodes name to the give array
*for every child, call the depth first search and pass in the final array
*for time and space complexity, we are dealing with verticies and edges 
*Time = O(V+E)
*Space O(v) ---> because if we had only one branch, we would have to go to every vertex before removing frames from the callstack