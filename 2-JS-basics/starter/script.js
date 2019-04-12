/*
console.log('Hello World');

// variables and data types
var firstName = 'John';
console.log(firstName);

// Operator precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


//Multiple operators
var isFullAge = now - yearJohn >=fullAge; //true
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments

//More operators
 var x = x * 2;
x *= 2;
x += 10;
x += 1;
x++; //x += 1
*/

/**********************************
 *  CODING CHALLENGE 1
 */

/*  Mark and John are tring to compare their BMI (Body Mass Index), which is calculated using the formula: BMI =  mass / height^2 = mass / (height * height)
. (mass in kg and height in meter)

1.Store mark's and John's mass and height in variables
2.Calculate both their BMIs
3.Create a boolean variable containing information about whether Mark has a higher BMIthan John.
4.Print a string to the console containing the variable from step 3.(Something like "Is Mark's BMI heigher than John's? true").

GOOD LUCK😀
*/

/*
var MarkMass = 60; //kg
var MarkHeight = 1.7; //meter

var JohnMass = 88; //kg
var JohnHeight = 1.76; //meter

var MarkBMI,JohnBMI
MarkBMI = MarkMass / (MarkHeight * MarkHeight);
JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log(MarkBMI,JohnBMI);

var MarkHeigherBMIThanJohn = MarkBMI > JohnBMI;

var BMIresult = 'Is Mark\'s BMI heigher than John\'s? ' + MarkHeigherBMIThanJohn;
console.log(BMIresult);
*/



/*****************************
 * If / else statements
 */
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus == 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' isn\'t married!');
// }


// var isMarried = true;
// if (true) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' isn\'t married!');
// }

// var MarkMass = 60; //kg
// var MarkHeight = 1.7; //meter

// var JohnMass = 88; //kg
// var JohnHeight = 1.76; //meter

// var MarkBMI,JohnBMI
// MarkBMI = MarkMass / (MarkHeight * MarkHeight);
// JohnBMI = JohnMass / (JohnHeight * JohnHeight);

// if(MarkBMI > JohnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }

// var height;

// height = 23;

// if (height || height === undefined) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }

/****************
 *  Arrays
 */
// Initialize new array
// var names = ['John','Mark','Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// var john = {
//   job:'teacher',
//   birthYear: 1992,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//     return this.age;
//   }
// };

//  //呼叫function
// console.log(john.calcAge());
// console.log(john.age);


/**********************
 * CODING CHALLENGE 4
 */
// var Mark = {
//   fullName: 'Mark Miller',
//   mass: 86,
//   height: 1.7, 
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   } 
// };
// var John = {
//   fullName: 'John Smith',
//   mass: 56,
//   height: 1.7, 
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// if (Mark.calcBMI() > John.calcBMI()) {
//   console.log(Mark.fullName + ' has a higher BMI of ' + Mark.BMI);
// } else if (Mark.BMI < John.BMI) {
//   console.log(John.fullName + ' has a higher BMI of ' + John.BMI);
// } else {
//   console.log('They have the same BMI');
// }

/**************************
 * Loops and iteration
 */

//  for (var i = 0; i<= 10; i+=2) {
//    console.log(i);
//  }

//  var john = ['John', 'Smith', 1990, 'designer', false];
 
//  for (var i = 0; i < john.length; i++) {
//    if (typeof john[i] !== 'string') continue;
//    console.log(john[i]);
//  }  

//  for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }  

var john = {
  fullName: 'John Smith',
  bills: [124,48,268,180,42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {

      //Determine percentge based on tipping rules
      var percentage;
      var bill = this.bills[i];
      
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 200) {
        percentage = .1;
      } else {
        percentage = .15;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

john.calcTips();
console.log(john);