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



//Object.create
const personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
}

const john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

const jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1886 },
  job: { value: 'model' }
})
console.log(jane);

//Primitives vs objects



//First Class Functions
const years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  const arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    //.push方法可向數組的尾末添加一個或多個元素，並返回新的長度，
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}