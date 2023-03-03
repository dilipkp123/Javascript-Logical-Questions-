
// 1. Basic operation and outputs

// console.log("Java script");


// let a = 20;
// let b = "10";
// const c = a*b;
// console.log(typeof(c),c);
// console.log(isNaN(b));
// console.log("++a",++b);
// console.log("a++",b++);
// console.log(b);

// console.log(2 - "Hello");
// console.log(typeof(2-"Hello"));

// var Null = null;
// console.log(typeof(Null));



// Program of LeafYear

// function leafYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//         console.log(year + " is a leaf year");
//                } else {
//             console.log(year + "Not a leaf year");
//         }

//     } else {
//         console.log(year + " is a not a leaf year");
//     }

// }
// leafYear(2201)



// while Loop example
// let a = 0 ;
// while (a<10) {
//     console.log(a++);
// }

// const array = [1,5,3,5,6,7]
// console.log(...array);


// for loop
// const array = [1,5,3,5,6,7]
// for (const key in array) {
//   console.log(array[key]);
//     }


// ForEach
//     arr.forEach((element,index,arry) => {
//         console.log(element*2);
//     });

//     let arr1 = arr.push("9");
//     console.log("rr",arr1);
//     console.log(arr);

// indexNumber = arr.indexOf('hello0')
// console.log(indexNumber);
// indexNumber1 = arr.indexOf('10')

// console.log(indexNumber1);

// sum(10,3);
// function sum(a,b) {
//     const c = a+b;
//     console.log(c);
// }

// const sum = (a,b) =>{
//     const c = a+b;
//     console.log(c);
// }

// sum(10,5)

// let arr = [1,2,3,5,6,7,8,14];

// let output = arr.map((element) =>{
// return 2*element;
// })
// console.log(output);
// let output2 = arr.forEach((element) =>{
// return 2*element;
// })
// console.log(output2);
// console.log(Math.max(...arr));
// let arrMap = arr.map((key) => {
//     console.log(key);
// }).filter((key) => {
//     if (key>4) {
//         console.log(key);
//     } })

// let arr = [1, 2, 3, 5, 6, 7, 8];
// let newArr = arr.map((currkey) => {
//   let acc = 0;
//     return currkey*2
// } ).reduce((acc , currkey) =>{
//   return  acc = acc +  currkey;
// })
// console.log(newArr);
// arr.splice(2,0,"Rahul");
// console.log(arr);

// console.log(arr.slice(2));
// console.log("old arr",arr);

// let todayDate = new Date( 2022,11);
// console.log(todayDate.toLocaleString());
// console.log(todayDate.toDateString());
// console.log(todayDate.toString());

// class newClass{
//     name='Rahul'
//  sum = (a,b) => {
// return a+b;
// }}
// const myName = new newClass()
// console.log(myName.name)
// console.log(myName.sum(4,5));
// console.log(this);
// "use strict"

// const oldObject = {
//     name : "Dilip",
//     college : "JECRC"
// }

// const newObject = {
//     ...oldObject,
//     location: "Jaipur"
// }

// console.log(newObject);

// let a = '      R a h  u l';
// console.log(a);
// console.log(a.length);

// // console.log(a.trim().length);
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// var scope = "global scope";
// function check()
// {
//     var scope = "local scope";
//     function f()
//     {
//          return scope;
//     }
//     return f;
// }
// const  r = () =>{
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
// }
// r()

// const obj1 = {
//   name: "Rahul",
// class: 10,
// Fname: function(params) {
//   console.log("log1",this);
// }
// }
// function func() {
//   let name= "Hero"
//   return this
// }

// funcOutput = func()
// console.log("log3",funcOutput);
// console.log("log2",this);

// let a = 10;
// let b = 20;
// let c = "30";
// console.log(c+a+b);

// function sum(a,b,c,...other) {
//   console.log(a,b,c,other);
// }

// sum(2,4,5,6,6,8,9)

// rest operatior /spread operatior value overide
// const obj1 = {
//   name: 'Dilip',
//   age: 31,
//   hobey: ['singing', 'cricket']
// }

// const {age,...other} = obj1;
// console.log(other);

// const obj2 ={
//   ...obj1,
//   name: "Rahul"
// }
// console.log(obj2);

// callbacks function

// const arr1 = [
//   { name: "Dilip", class: "First" },
//   { name: "Hari", class: " Second" },
// ];

// function getData() {
//   setTimeout(() => {
//     arr1.forEach((element) => {
//       console.log(element.name);
//     });
//   }, 500);
// }

// function createData(newData, callback) {
//   setTimeout(() => {
//     arr1.push(newData);
//     callback();
//   }, 1000);
// }

// createData(
//   {
//     name: "chinu",
//     class: "five",
//   },
//   getData
// );

// function sum(x) {
//   console.log(x);
//   let y = 5;
//   return function(z) {
//     return x+y+z;
//   }
// }

// let store =  sum(6);
// console.log(store(10));

// let name = "Dilip"
// function getData(params) {
//   console.log(this);
// }
// getData()

// console.log(isNaN(5));

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

// //Method 1: Convert the keys to Array using - Object.keys()
// console.log(Object.keys(obj));
// // ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
// console.log(Object.values(obj));
// // ["1", "user22r", "26", "programmer"]

// // Method 3 Converts both keys and values using - Object.entries()
// console.log(Object.entries(obj));

// let pokemon = {
//   firstname: 'Pika',
//   lastname: 'Chu ',
//   getPokeName: function() {
//       var fullname = this.firstname + ' ' + this.lastname;
//       return fullname;
//   }
// };

// let pokemonName = function() {
//   console.log(this.getPokeName() + 'I choose you!');
// };

// pokemonName.call(pokemon,"RAhul","Hello"); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// let a = [1,2,3,4]
// let x =a.forEach((num)=>{
// return num*2;
// })
// console.log(x);

// let x =a.map((item)=>{
//   return 2*item;
// })
// console.log(x);

// let a = [1,3,4,5,3,5,2,5,2,55,6,35,5,55,5]
// Remove Deplicates for array
// let a = ["d", "i", "l", "i", "p"];
// const duplicates = a.filter((item, index, arr) => {
//   return arr.indexOf(item) == index;
// });
// console.log(duplicates);

// let arr1 = [2, 4, 45, 234, 522, 32, 454, 23];

// const maxNumber = (arr) => {
//   return arr.reduce((acc, currItem) => {
//     return acc < currItem ? acc : currItem; //Min
//     return acc > currItem ? acc : currItem; //max
//   });
// };

// const maxItem = maxNumber(arr1);
// console.log(maxItem);

//---------------------------------------------------------------------
// == and === diff
//example
// const a = 5
// const b = '5'
// console.log(a == b);  //true
// console.log(a===b);  //false

// string to array
// let a = "Dilip";
// console.log(a.split(""));

// function sum(a) {
//     return function(b) {
//         return a+b
//     }
// }

// const res = sum(2)(8)
// // const res2 = res(4)
// console.log( res);

// let a = [2,4,45,234,522,32,454,23]
// const res1 = a.forEach((item)=>{
//     return item*2
// })
// console.log(res1);

// let a = [2,4,45,234,522,32,454,23]
// const res1 = a.map((item)=>{
//     return item*2
// })
// console.log(res1);

// const sum =(a)=>{
//     return (b) =>{
//         return  a+b;
//     }
// }

// const res = sum(4)(2)
// console.log((res));

// const obj = {
//     a: 'hello',
//     b: 'hi'
//   }
//   const arr = [
//       [
//           "a",
//           "hello"
//       ],
//       [
//           "b",
//           "hi"
//       ]
//   ]

//   console.log();

const arr = [1,1,3,4,5,1]

 const res =arr.filter((item, index) =>{
    // return arr.indexOf(item) == index
    return arr.indexOf(item) !== index

 })

console.log((res));

// let a = 5;
// {
//   const a = 6;
//   console.log(a);
// }
// console.log(a)
// let a = 5;
// {
//   var a = 6;
//   console.log(a);
// }
// console.log(a)
// Dharmik Patel15:38
// const array = ['arr1', 'arr2'];
// array.length = 0;
// console.log(array[0]);

// foo();
// const foo = function() {
//   console.log('FOOOOO');
// };
// Dharmik Patel15:40
// foo();
// var foo = function() {
//   console.log('FOOOOO');
// };
// console.log(a)
// var a =-5
// Nikhil Boricha15:41
// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }
// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }
// Nikhil Boricha15:42
// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }
// var i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }
// Dharmik Patel15:51
// const obj = {
//   a: 'hello',
//   b: 'hi'
// }
// const arr = [
//     [
//         "a",
//         "hello"
//     ],
//     [
//         "b",
//         "hi"
//     ]
// ]

// const res = Object.entries(obj)
// console.log(res);
// Dharmik Patel15:54
// const a =5
// console.log( a ?? 'nothing')
// const a =5
// console.log(a?.b)
// const  a =5
// console.log(a || 'aaaa')
// Dharmik Patel15:55
// const  a = ''
// console.log(a || 'aaaa')
// Nikhil Boricha15:56
// Find unique and duplicate element
// const arr = [1,1,3,4,5,1]
// Dharmik Patel16:00
// console.log({} == {})
// Dharmik Patel16:01

// Dharmik Patel16:23
{
  /* <Route path='/books/:id' element={<Book />} />
   <Route path='/books/1' element={<NewBook />} /> */
}

// const a =5
console.log( undefined ?? 'nothing')

// const a =5
// console.log(a?.b)

// const  a =5
// console.log(a || 'aaaa')

// const  a = ''
// console.log(a || 'aaaa')

// const array = ['arr1', 'arr2'];
// array.length = 0;
// console.log(array[0]);

foo();
function foo() {
  console.log('FOOOOO');
}

// foo();
// const foo = function() {
//   console.log('FOOOOO');
// };

// foo();
// var foo = function() {
//   console.log('FOOOOO');
// };

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// for (let i = 0; i < 3; i++) {
//       const log = () => {
//         console.log(i);
//       }
//       setTimeout(log, 100);
//     }

// for (var i = 0; i <= 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// console.log({} == {})

// new Promise((resolve, reject) => {
//     console.log("1");
//     resolve();
//   }).then(() => {
//     console.log("2");
//   });
//   console.log("3");

// const obj = {
//   a: 'hello',
//   b: 'hi'
// }

// const res = Object.entries(obj)
// console.log(res);

// const arrr = [1,1,3,4,5,1]
// // let x = new Set(arrr)
// // console.log(x);

// const filter = arrr.filter((item,index)=>{
//     return arrr.indexOf(item) == index
// })
// console.log(filter);

// const a = [ '1' ,'3','4','5','1']

// let res = a.map((item)=>{
//   return  item * 2
// }).filter((item) =>{
//    if (item>6) {
//       console.log(item);
//    }
// })

// console.log("hello");
// setInterval(() => {
//    console.log("123");
// }, 0);
// console.log("bye");

// const a = [ 1 ,3,4,5,1]

// const res = a.reduce((acc=0, key) => {
// return acc= acc+ key
// })
// console.log(res);

// const str = "how are you?"
// const newArr = str.split(' ')
// console.log(newArr);
// newArr.splice(0,1);

//  newArr.splice(0,0,"Hello Rahul");
//  console.log(newArr.join(' '));

//  console.log(str.replace(/how/g,"Hello Rahul"));

//Cache memo

// let sum = 0;
// function cal(n) {
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }

// const memoFun = (callback) => {
//   let cache = {};
//   return function (args) {
//     let n = args;
//     if (n in cache) {
//       console.log("890");
//       return cache[n];
//     } else {
//       console.log("123");
//       let res = cal(n);
//       cache[n] = res;
//       return res;
//     }
//   };
// };

// const final = memoFun(cal);
// console.log(final(6));

//  const memo=(callbacks)=> {
//    let cache ={};
// return function(...arg) {
//    let n = arg[0]
//    if (n in cache) {
//       console.log("from cache");
//       return cache[n];
//    }
//    else{
//       console.log("from calculate");
//      let res =cal(n)
//      cache[n] = res;
//      return res;
//    }
// }
// }
// console.time()
// let final = memo(cal)
// console.log(final(45));
// console.timeEnd()

// let a = {
//   name: "Dilip",
//   age: 28,
//   fun: function() {
//    console.log(`Hello this ${this.name} and his age is ${this.age}`);
//   }
// };

// let res = a.fun.apply({name:"Dilip12", age: 34})
// console.log(res);

// selfInvoke Function

// (function selfInvoke() {
//   for (var i = 0; i < 5; i++) {
//    console.log("Hello");
//   }
//   console.log(i);
// })();


// const b= {
//   name: "Dilip"
// }
// console.log(b);
// const a =[1,2,3]
// console.log(a);



