const country = 'Bangladesh';
const age = 52;
const isIndependent = true;

const student = {id: 12, name: 'bulbul', class: 11};

const friends = [12, 13, 14, 15, 16];

function add (num1, num2){
    sum = num1 + num2;
    return sum;
}

// console.log(typeof(country));
// console.log(typeof(age));
// console.log(typeof(isIndependent));
// console.log(typeof(student));

//Checking array using Array.isArray()
// console.log(Array.isArray(age));
// console.log(typeof(add));

//Checking element existance in an array
//method 1
// console.log(friends.includes(15));

// console.log(friends.indexOf(100));
// Method 2
if(friends.indexOf(33) == -1){
    // console.log('Element not exist');
}


// Array concatination 
const newFriends = [33, 44, 55, 66, 77];

const allFriends = friends.concat(newFriends);

console.log(allFriends);
