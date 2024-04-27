// map function
const arr = [1, 2, 3, 4, 5];
//const doubleArray = arr.map((item, index, ar) => item * 2);
// console.log(doubleArray);

// 1) polyfill for map
Array.prototype.myMap = function (cb) {
  //console.log(this);
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// const doubleArray = arr.myMap((item, index, ar) => item * 2);
// console.log(doubleArray);

//2) polifill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

// const evenArray = arr.myFilter((item, index, ar) => item % 2 === 0);
// console.log(evenArray);

//reduce function
// const totalSum = arr.reduce((acc, current, index, array) => {
//   return acc + current;
// }, 0);

// console.log(totalSum);

// 3) polifyll for reduce function

Array.prototype.myReduce = function (cb, initialValue) {
  var accumilator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumilator = accumilator ? cb(accumilator, this[i], i, this) : this[i];
  }
  return accumilator;
};

const totalSum = arr.myReduce((acc, current, index, array) => {
  return acc + current;
}, 0);

// console.log(totalSum);

// promise polyfill

function promisePolyfill(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function" && isCalled) onResolve(val);
  }

  function reject(val) {
    onReject(val);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

// const examplePromise = new promisePolyfill((resolve, reject) => {
//   let a = 7;
//   if (a % 2 === 0) {
//     resolve("This is even");
//   } else {
//     reject("This is odd");
//   }
// });

// examplePromise.then((res) => console.log(res)).catch((e) => console.log(e));

// bind polifill
const obj1 = { name: "Anil", age: 27 };

let printName = function (greeting, loaction) {
  console.log(`${this.name} age is ${this.age} ${greeting} ${loaction}`);
};

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  console.log(params);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName = printName.myBind(obj1, "koruru", "Ap");
// printMyName();
printMyName("Heelo", "chennai");
