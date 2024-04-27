"use strict";

// map function
var arr = [1, 2, 3, 4, 5]; //const doubleArray = arr.map((item, index, ar) => item * 2);
// console.log(doubleArray);
// 1) polyfill for map

Array.prototype.myMap = function (cb) {
  //console.log(this);
  var temp = [];

  for (var _i = 0; _i < this.length; _i++) {
    temp.push(cb(this[_i], _i, this));
  }

  return temp;
}; // const doubleArray = arr.myMap((item, index, ar) => item * 2);
// console.log(doubleArray);
//2) polifill for filter


Array.prototype.myFilter = function (cb) {
  var temp = [];

  for (i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
}; // const evenArray = arr.myFilter((item, index, ar) => item % 2 === 0);
// console.log(evenArray);
//reduce function
// const totalSum = arr.reduce((acc, current, index, array) => {
//   return acc + current;
// }, 0);
// console.log(totalSum);
// 3) polifyll for reduce function


Array.prototype.myReduce = function (cb, initialValue) {
  var accumilator = initialValue;

  for (var _i2 = 0; _i2 < this.length; _i2++) {
    accumilator = accumilator ? cb(accumilator, this[_i2], _i2, this) : this[_i2];
  }

  return accumilator;
};

var totalSum = arr.myReduce(function (acc, current, index, array) {
  return acc + current;
}, 0); // console.log(totalSum);
// promise polyfill

function promisePolyfill(executor) {
  var onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this["catch"] = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

var examplePromise = new promisePolyfill(function (resolve, reject) {
  var a = 7;

  if (a % 2 === 0) {
    resolve("This is even");
  } else {
    reject("This is odd");
  }
});
examplePromise.then(function (res) {
  return console.log(res);
})["catch"](function (e) {
  return console.log(e);
});