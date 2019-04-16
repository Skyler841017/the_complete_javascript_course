///////////////////////////////////////
// Lecture: Hoisting

// this is hoisting,the calculateAge function is stored in the variable object and even before the code is executed
// calculateAge(1995);
// function calculateAge(year) {
//   console.log(2019 - year);
// }

// hoisting is only works for function declarations,this one is function expression,so it doesn't work
// retirement(1995);
// const retirement = function(year) {
//   console.log(65 - (2019 - year));
// }


// // variables
// console.log(age); //undefined
// var age = 23;

// function foo() {
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// const a = 'Hello!';
// first();

// function first() {
//     const b = 'Hi!';
//     second();

//     function second() {
//         const c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();
// // a = 'hello'

// function first() {
//   var b = 'Hi!';
//   second();
//   // a = 'Hello'
//   // b = 'Hi'

//   function second() {
//     var c = 'Hey!';
//     third()
//     // a = 'Hello'
//     // b = 'Hi'
//     // c = 'Hey'
//   }
// }

// function third() {
//   var d = 'John';
//   console.log(a + b + c + d);
//   // a = 'Hello'
//   // d = 'John'
// }




///////////////////////////////////////
// Lecture: The this keyword

// calcuateAge(22);

// function calcuateAge(year) {
//   console.log(2019 - year);
//   console.log(this);
// }

const john = {
  name: 'John',
  yearOfBirth: 1990,

  //math of john object
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
}
john.calculateAge();

const mike = {
  name: 'Mike',
  yearOfBirth: 1984
}
mike.calculateAge = john.calculateAge;
mike.calculateAge()