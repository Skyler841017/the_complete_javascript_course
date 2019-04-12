

//Function constructor
/*
const  john = {
   name: 'John',
   yearOfBirth: 1990,
   job: 'teacher'
 };

 const Person = function(name, yearOfBirth,job) {
   this.name = name;
   this.yearOfBirth = yearOfBirth;
   this.job = job;
 }
 Person.prototype.calculateAge = 
 function (yearOfNow) {
   console.log(yearOfNow - this.yearOfBirth);
 }

 const jimmy = new Person('Jimmy',1995,'programer');
 console.log(jimmy);
 jimmy.calculateAge(2019);
 */


 //Object.create



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
 


   