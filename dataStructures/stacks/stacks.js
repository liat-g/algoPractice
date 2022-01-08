//last in first out 
//browsers back button or pile of books is a stack
//stack functions: push, pop, peek (dispalying the elements in the stack), length
//the array object has stack methods

var letters = [];

var word = "racecar"

var rword = "";

//put letters into the stack
for (var i = 0; i < word.length; i++){
    letters.push(word[i])
}

for (var i = 0; i < word.length; i++){
    rword += letters.pop()
}

if (rword === word){
    console.log(word + " is a palindrome.")
}else 
{
    console.log( word + "is not a palindrome.")
}
