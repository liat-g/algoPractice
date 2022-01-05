function findClosestValueInBst(tree, target, closest = Infinity){
    if (tree === null){
        return closest //when we have traveresed the entire tree
    }
    else{
    if (Math.abs(tree.value - target ) < Math.abs(closest - target)){ //any number is less than infinity so the first node is set to the first node
        closest = tree.value
    }
    if (target < tree.value){ //if the target is less than the current value, traverse leftly
        return findClosestValueInBst(tree.left, target, closest)
    } else {
        return findClosestValueInBst(tree.right, target, closest)
    }
}
}