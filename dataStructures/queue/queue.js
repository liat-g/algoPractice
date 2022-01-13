//first in first out
//functions can go in at the beginning or the end of the array
function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection)
    }
    this.enqueue = function (element){ //adds to the queue
        collection.push(element);
    };
    this.dequeue = function (){ //removes from the queue
        return collection.shift();
    }
    this.front = function(){
        return collection[0]
    }
    this.size = function(){
        return collection.length
    }
    this.isEmpty = function(){
        return (collection.length === 0)
    }
}

//when you pass in elements with the same priority, it acts like a normal queue but items with higher priority are sent to the beginning of the queue
function PriorityQueue(){
var collection = [];
this.printCollection = function(){
    (console.log(collection))
}
this.enqueue = function(element){
    if (this.isEmpty()){ //check if its empty
        collection.push(element);
    } else { //check priorities
        var added = false;
        for (var i = 0; i < collection.length; i++){
            if (element[1] < collection[i][1]){
                collection.splice(i, 0, element);
                added = true;
                break
            }
        }
        if (!added){
            collection.push(element)
        }
    }
}
this.dequeue = function(){
    var value = collection.shift();
    return value[0];
}
this.front = function(){
    return collection[0];
}
this.size = function(){
    return collection.length;
}
}