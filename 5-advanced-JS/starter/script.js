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







