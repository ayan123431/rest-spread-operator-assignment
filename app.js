
// REST OPERATOR QUESTIONS


// 1
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Q1:", sumAll(10, 20, 30, 40));

// 2
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log("Q2:", findMax(10, 50, 90, 20));

// 3
function greetUsers(message, ...names) {
    console.log(`${message}: ${names.join(", ")}`);
}
greetUsers("Hello", "Ali", "Ahmed", "Sara");

// 4
let arr = [10, 20, 30, 40, 50];

let [first, second, ...rest] = arr;

console.log("Q4:");
console.log(first);
console.log(second);
console.log(rest);

// 5
let student = {
    name: "Ali",
    age: 20,
    class: "JS",
    city: "Karachi"
};

let { name, ...remainingData } = student;

console.log("Q5:");
console.log(name);
console.log(remainingData);

// 6
function collectItems(firstItem, ...items) {
    console.log("First Item:", firstItem);
    console.log("Remaining Items:", items);
}
collectItems("Apple", "Banana", "Orange", "Mango");

// 7
function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("Q7:", filterEven(1,2,3,4,5,6,7,8));

// 8
// function test(...numbers, name){
// }


// Error:
// Rest parameter must be last formal parameter

console.log("Q8: Rest parameter must be the last parameter in a function.");

// 9
function makeSentence(...words) {
    return words.join(" ");
}
console.log("Q9:", makeSentence("I", "love", "JavaScript"));

// 10
function multiplyAndCollect(firstNumber, ...numbers) {
    return {
        doubled: firstNumber * 2,
        remaining: numbers
    };
}

console.log("Q10:", multiplyAndCollect(10,20,30,40));


// SPREAD OPERATOR QUESTIONS

// 1
let originalArray = [1,2,3];
let copiedArray = [...originalArray];

copiedArray.push(4);

console.log("Q1:");
console.log("Original:", originalArray);
console.log("Copied:", copiedArray);

// 2
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let mergedArray = [...arr1, ...arr2];

console.log("Q2:", mergedArray);

// 3
let numbers = [1,2,6,7];

let updatedNumbers = [1,2,...[3,4,5],6,7];

console.log("Q3:", updatedNumbers);

// 4
function showData(a,b,c){
    console.log("Q4:", a,b,c);
}

let values = [10,20,30];

showData(...values);

// 5
let person = {
    name: "Ali",
    age: 20
};

let updatedPerson = {
    ...person,
    city: "Karachi"
};

console.log("Q5:", updatedPerson);

// 6
let user = {
    name: "Ahmed",
    age: 18
};

let newUser = {
    ...user,
    age: 25
};

console.log("Q6:", newUser);

// 7
let nestedObj = {
    name: "Ali",
    address: {
        city: "Karachi"
    }
};

let copyNested = {
    ...nestedObj
};

copyNested.address.city = "Lahore";

console.log("Q7:");
console.log(nestedObj);
console.log(copyNested);

// 8
let duplicateArray = [1,2,2,3,4,4,5];

let uniqueArray = [...new Set(duplicateArray)];

console.log("Q8:", uniqueArray);

// 9
let original = [1,2,3,4,5];

let reversed = [...original].reverse();

console.log("Q9:");
console.log("Original:", original);
console.log("Reversed:", reversed);

// 10
function combineData(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}

let objA = {
    name: "Ali",
    age: 20
};

let objB = {
    age: 25,
    city: "Karachi"
};

console.log("Q10:", combineData(objA, objB));