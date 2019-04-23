/////////////////////////////////////////////////////////////
//Function constructor

// const Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// const feather = new Person('Feather', 1995, 'teacher');

// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Hung';

// feather.calculateAge();
// console.log(feather.lastName);
// console.log(Person);
// console.log(Person.prototype);
// console.log(feather);

// // Person的prototype等於feather的繼承__proto__
// console.log(Person.prototype === feather.__proto__);



/////////////////////////////////////////////////////////////
//Object.create
// const personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// }

// const john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// const jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1886 },
//   job: { value: 'model' }
// })
// console.log(jane);



/////////////////////////////////////////////////////////////
//Primitives vs Objects

// // 變數定義primitives is copy the value
// // Primitives
// let a = 23;
// let b = a;
// a = 46;
// console.log(a); // 46
// console.log(b); // 23 

// // 變數定義object not copy, 而是指向object的位置
// // Objects
// const obj1 = {
//   name: 'John',
//   age: 26
// };
// const obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age); // 30
// console.log(obj2.age); // 30


// // Functions
// let ag
// const age = 27;
// const obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };
// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }

// change(age, obj); 
// console.log(age); // age = 27,function裡定義的只在function裡有效
// console.log(obj.city); // obj.city = 'San Francisco',因為是指向位置,故function裡給的可以改變




/////////////////////////////////////////////////////////////
//Passing functions as arguments(callback function)
// const years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   const arrRes = [];
//   for (let i = 0; i < arr.length; i++) {

//     //.push方法可向數組的尾末添加一個或多個元素，並返回新的長度，
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2019 - el;
// }
// // callback function, mean it's called later
// const ages = arrayCalc(years, calculateAge);
// console.log(ages);


// function isFullAge(el) {
//   return el >= 18;
// }
// const fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);


// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.64 * el)); // 四捨五入最大心跳率
//   } else {
//     return -1;
//   }
// }
// const maxHeartRates = arrayCalc(ages, maxHeartRate);
// console.log(maxHeartRates);


/////////////////////////////////////////////////////////
// Lecture: Functions returning functions

// function interviewQuestion(job) {
//   if(job === 'designer') {
//     return function (name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log('What subject do you teach, ' + name + '?');
//     }
//   } else {
//     console.log('Hello, ' +　name);
//   }
// }

// const teacherQuestion = interviewQuestion('teacher');
// const designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Jane')
// designerQuestion('Mark')

// interviewQuestion('teacher')('skyler')


///////////////////////////////////////////////////////
// Lecture: Immediately Invoked Function Expressions(IIFE)

// function game() {
//   const score = Math.random() * 10; //0~9點多
//   console.log(score >= 5); 
// }
// game(); // true or false

// // IIFE
// (function () {
//   const score = Math.random() * 10;
//   console.log(score >= 5);
// })(); // true or false

// // console.log(score); // score is not defined

// (function (goodLuck) {
//   const score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5); // true


/////////////////////////////////////////////////////////
// Lecture: closures
// an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned

// function retirement(retirementAge) {
//   return function(yearOfBirth) {
//     const text = ' years left until retirement.';
//     const age = 2019 - yearOfBirth;
//     console.log((retirementAge - age) + text);
//   }
// }

// const retirementUS = retirement(66);
// retirementUS(1990); //  37 years left until retirement.

// retirement(65)(1995); // 41 years left until retirement.


// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher'){
//       console.log('What subject do you teach, ' + name + '?');
//     } else {
//       console.log('Hello, ' +　name);
//     }
//   }
// }
// interviewQuestion('')('skyler'); // Hello, skyler



////////////////////////////////////////////////////////
// Lecture: Bind, call and apply

// const skyler = {
//   name: 'Skyler',
//   age: 23,
//   job: 'programer',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//     }
//   }
// };

// const emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };
// skyler.presentation('formal', 'morning'); // Good morning, ladies and gentlemen! I'm Skyler, I'm a programer and I'm 23 years old.

// // use John's presentation method, but setting the 'this' variable to 'emily', that is the 'call' method.
// skyler.presentation.call(emily, 'friendly', 'afternoon'); // Hey! what's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice afternoon.

// // apply(like 'call', but for array)
// skyler.presentation.apply(emily, ['friendly', 'evening']); // Hey! what's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice evening.


// // the 'bind doesn't immediately call the function, but instead it generates a copy of the function, so that we can store it somewhere.
// // at least 第一個括號要有object名稱,其他參數可以放第一個括號也可以放第二個callback括號
// const skylerFriendly = skyler.presentation.bind(emily, 'friendly')
// skylerFriendly('night'); // Hey! what's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice night.



// const years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   const arrRes = [];
//   for (let i = 0; i < arr.length; i++) {

//     //.push方法可向數組的尾末添加一個或多個元素，並返回新的長度，
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2019 - el;
// }


// function isFullAge(limit, el) {
//   return el >= limit;
// }

// // callback function, mean it's called later
// const ages = arrayCalc(years, calculateAge);
// console.log(ages); // [29, 54, 82, 14, 21]

// const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(fullJapan); // [true, true, true, false, true]



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// (function() {
//   function Question(q, option, currectA) {
//     this.q = q;
//     this.option = option;
//     this.currectA = currectA;
//   }

//   Question.prototype.displayQuestion = function() {
//     console.log(this.q);
//     for (let i = 0; i < this.option.length; i++) {
//       console.log(i + ': ' + this.option[i]);
//     }
//   }

//   Question.prototype.checkAnswer = function() {
//     if (answer === this.currectA) {
//       console.log('Currect answer!');
//     } else {
//       console.log('Answer isn\'t currect!');
//     }
//   }

//   const q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
//   const q2 = new Question('What is the name of this courses\'s teacher?', ['John', 'Michael', 'Johnas'], 2);
//   const q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2)

//   const questions = [q1, q2, q3];

//   const random = (Math.floor(Math.random() * questions.length))

//   questions[random].displayQuestion();

//   const answer = parseInt(prompt('Please select the correct answer(just type the number).'));

//   questions[random].checkAnswer(answer);
// })();

// use IIFE 可以保證在裡面定義的變數不會跟外面重複的有衝突
// parseInt()函式能將輸入的字串轉成整數。






/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
  function Question(q, option, currectA) {
    this.q = q;
    this.option = option;
    this.currectA = currectA;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.q);
    for (let i = 0; i < this.option.length; i++) {
      console.log(i + ': ' + this.option[i]);
    }
  }

  Question.prototype.checkAnswer = function() {
    if (answer === this.currectA) {
      console.log('Currect answer!');
    } else {
      console.log('Answer isn\'t currect!');
    }
  }

  const q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
  const q2 = new Question('What is the name of this courses\'s teacher?', ['John', 'Michael', 'Johnas'], 2);
  const q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2)

  const questions = [q1, q2, q3];

  const random = (Math.floor(Math.random() * questions.length))

  questions[random].displayQuestion();

  const answer = parseInt(prompt('Please select the correct answer(just type the number).'));

  questions[random].checkAnswer(answer);
})();