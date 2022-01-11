# iterative
def nodeDepths(root):
    sumOfDepths = 0
    stack = [{"node": root, "depth": 0}]
    while len(stack) > 0:
        nodeInfo = stack.pop()
        node, depth = nodeInfo["node"], nodeInfo["depth"]
        if node is None:
            continue
        sumOfDepths += depth
        stack.append({"node": node.left, "depth": depth + 1})
        stack.append({"node": node.right, "depth": depth + 1})
    return sumOfDepths

# recursive


def nodeDepths(root, depth=0):
    # Handle base case of recusion
    if root is None:  # if there is no tree return 0
        return 0
    # return the depth, call the function
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
# recursively on the left and right side of the tree with the depth incrementing by one every time the functions are called recursively
