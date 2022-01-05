#find the target number in an array

def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array) - 1)
def binarySearchHelper(array, target, left, right):
    if left > right:
        return -1 #or whatever the interviewer wants you to return when its finished
    middle = (right + left) // 2 # // means divide by two and round down
    potentialMatch = array[middle] # set the potentialMatch to be the middle so we can rule out either the right or the left to the number
    if target == potentialMatch:
        return middle
    elif target < potentialMatch: # if the target is less than the middle number, search to left and start one place to the left bc we already checked the middle number
        return binarySearchHelper(array, target, left, middle - 1)
    else: #check the right of the middle number
        return binarySearchHelper(array, target, middle + 1, right)