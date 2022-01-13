class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))

    def depthFirstSearch(self, array):
        array.append(self.name)  # append the first node
        for child in self.children:  # iterate through its children
            child.depthFirstSearch(array)
        return array  # only useful for the first call of DFS
