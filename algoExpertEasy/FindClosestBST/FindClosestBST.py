def findClosestValueInBst(tree, target):
    # since we set the closest value to infinity, when we take its absolute value it will be the first number on the tree from the first round
    return findClosestValueInBstHelper(tree, target, float("inf"))


def findClosestValueInBstHelper(tree, target, closest):
    if tree is None:
        return closest
    # closest will always be set the first node because infinity is always greater
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    if target < tree.value:  # if the target is less than the current node, we traverse to the left
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        # else we traverse to the right
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest
