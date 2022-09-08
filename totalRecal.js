//////////////////////////A.Q + A///////////////////////

// How do we assign a value to a variable?
const firstName = 'abdulai'
let age = 23
// How do we change the value of a variable?
age = 19;
// How do we assign an existing variable to a new variable?
let lastName = 'balde'
lastName = 'sow'
// Remind me, what are declare, assign, and define?
  //declare is when a variable is given a name like (let, const)
  //assign is when the variable is given a string,number,function etc
  //define is what is given to the declared as a name
// What is pseudocoding and why should you do it?
  //pseudocoding is fundimental to programming, it helps to break it down
  //to regular language for anyone to understand
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  //the majority of time should be spent thinking of how to solve a problem
  // and that means pseudocoding and breaking it down


///////////////////// B.Strings///////////////////////

// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable
// Assign it the value of the string "Hello World"
firstVariable = 'Hello world'
// Change the value of this variable to some number
firstVariable = 2
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable
// Change the value of secondVariableto any string.
secondVariable = 'apple'
// What is the value of firstVariable ?
    //firstVariable = 2
    // console.log(firstVariable);
//Create a variable called yourNameand set it equal to your name as a string.Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
//     ex: Hello, my name is Jean Valjean
let yourNameand = 'andul'
let greeting = 'hello, my name is ' + '' + yourNameand
// console.log(greeting); //hello my name is Andul


///////////////////// C.Booleans////////////////////////

// Using the provided variable definitions, replace the blanks so that all log statements print truein the console.Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a,b);
// console.log(c,d);
// console.log('Name' + '' +'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false && true);
// console.log(true || false)
// console.log(e || 'Kevin');
// console.log(a + b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a / d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');


//////////////////////////////// D.The farm///////////////////////////

// Declare a variable animal.Set it to be either "cow" or something else
let animal = 'cow'
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === 'cow') {
  let cowSound2 = ''
  // console.log('mooooooooooo');
} else {
  // console.log("Hey! You're not a cow.");
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."


//////////////////////////// E.Driver's Ed//////////////////////////

// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let personAge = 19
  const answer = personAge >= 16  ? `here is the keys` : `sorry youre too young`
// console.log(answer);


//////////////////// A.The basics////////////////////////////

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++){
  // console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 0; i <= 400; i++) {
  // console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i++) {
  if (i % 3 === 0) {
  // console.log(i);
  }
}

////////////////////////////// B.Get even///////////////////////

// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 0; i <= 400; i++) {
  if (i % 2 === 0) {
    // console.log(`${i}  is an even number` );
  }
  // console.log(i);
}


//////////////////////// C.Give me Five//////////////////////////

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    // console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    // console.log(`I found a ${i}. High three!`);
  }
}


////////////////////// D.Savings account//////////////////////

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week.Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10, 100 in it.

let bank_account = 0
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
for (let i = 0; i < 100; i++){
  bank_account += i * 2
}
const totalSum = bank_account
// console.log(totalSum);//110

////////////////// III.Arrays & Control flow////////////////////

// A.Talk about it:
// What are the things in an array called ?
    //things in an array is called an element
// Do Arrays guarantee those things will be in order ?
    //no arrays do not guarantee it will be in order
// What real - life thing could you model with an array ?
    //in hospitals for the patients


////////////////////// B.Easy Does It///////////////////
// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ['i like', 'you like', 'they like']

// C.Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array ?
//   Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array.How ? Why, yes! console.log();

const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);
randomThings[2] = "World"
// console.log(randomThings);

/////////////////////////////// D.Change values//////////////////////
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array ?
//   Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[4] = "Octocat"
ourClass.push("Cloud City") 
// console.log(ourClass)

////////////////////// E.Mix It Up//////////////////////

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array.Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse().
//Did you mutate the array ? 
    //yes the array mutated
//What does mutate mean ?
    //mutate means to change
// Did the.reverse()method return anything ?
    //the .reverse() method return what is called on
    
const myArray = [5, 10, 500, 20]
myArray.push("Aegon", 'maru')
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
// console.log(myArray);


// F.Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.


let biggie = 800
if (biggie < 100) {
  // console.log("little number");
} else if(biggie >= 100) {
  // console.log('big number');
}

/////////////////////////////// G.Monkey in the Middle/////////////////
// Write an if ... else if ...elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
//   Otherwise, log "monkey".

let num = '-25' //not showing the else log
if (num < 5) {
  // console.log('little number');
} else if (num > 10) {
  // console.log('big number');
} else {
  // console.log("monkey");
}

////////////////////H.What's in Your Closet?////////////////////////////

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ], [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ], [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[1] + '' + kristynsCloset[3] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.push("raybans", "yellow knit hat" )
// console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[8] = "stained knit hat"
    // console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
    // console.log(thomsCloset[0][2]);

// In the same way, access one item from Thom's pants array.
    // console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.
    // console.log(thomsCloset[2][2]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
    // console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = 'Footie Pajamas'
//  console.log(thomsCloset);


//////============= IV.Functions======================

///////////////////////// A.printGreeting////////////////
//skip

// //////////////////////B.printCool/////////////////////

// Write a function printCoolthat accepts one parameter, nameas an argument.The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
  name = 'sow'
  // console.log(`Captain ${name} is cool`);
}
printCool()


///////////////////// C.calculateCube/////////////////////

// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

const calculateCube = function (cube) {
  cube = 5
  // console.log(cube * 4);
}
calculateCube()

///////////////////////// D.isVowel//////////////////////
// Write a function isVowelthat takes a character(i.e.a string of length 1) and returns true if it is a vowel, false otherwise.The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

function isVowel(a) {
  if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
    console.log(true);
  } else {
    console.log(false);
  }
}
isVowel('e')
