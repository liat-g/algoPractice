function mySet(){
    var collection = [];
//checks for the presence of an element and returns true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1 );
    }
//returns the values in the set
this.values = function(){
    return collection
}
//this method will add an element to the set - the es6 .add will return the full set which will be an object
this.add = function(element){
    if(!this.has(element)){
        collection.push(element);
        return true;
    }
    return false;
}

this.remove = function(element){
    if(this.has(element)){
        index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
    }
    return false;
}

this.size = function(){
    return collection.length;
}
//returns the union of two sets
//these methods are not in the es6 sets
this.union = function(otherSet){
var unionSet = new mySet();
var firstSet = this.values();
var secondSet = otherSet.values();
firstSet.forEach(function(e){
    unionSet.add(e)
})
secondSet.forEach(function(e){
unionSet.add(e)
})
return unionSet;
}

//returns the intersection of two sets, all the items that both sets share
this.intersection = function(otherSet){
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
        if(otherSet.has(e)){ //check if the other set has the value
            intersectionSet.add(e)
        }
    })
    return intersectionSet
}

//returns the differences of two sets as a new set
this.difference = function(otherSet){
    var differenceSet = new Set(); //creates a new set instance
    var firstSet = this.values();
    firstSet.forEach(function(e){
        if (!otherSet.has(e)){
            differenceSet.add(e)
        }
    })
    return differenceSet;
}

//tests if a set is a subset of a different set
this.subset = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(value){ //every method tests if all the elements pass the test
        return otherSet.has(value);
    })

};
}