*compute the absolute difference between absolute and target value
*set the closest value equal to inifinity
\*using Math.abs (target - closest) > Math.abs(target - tree.value) or Math.abs(tree.value - target) > Math.abs(closest - target) we set closest to the first node each time

avg time complexity: O(Log(n)) where n is the number of nodes in the tree
avg space complexity: O(Log(n))

worst time complexity: O(n) time | O(n) space which is when there is only branch so we can't rule any of the nodes out from the get go
