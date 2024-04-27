"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// higer order functions
// def: A function which takes another function as an argument or returns another function is called an higher order function
var nums = [1, 2, 3, 4];

var area = function area(radius) {
  return (Math.PI * radius * radius).toFixed(2);
};

var circumference = function circumference(radius) {
  return (2 * Math.PI * radius).toFixed(2);
};

var diameter = function diameter(radius) {
  return (2 * radius).toFixed(2);
};

var getOutPut = function getOutPut(nums, logic) {
  var output = [];

  for (var _i = 0; _i < nums.length; _i++) {
    output.push(logic(nums[_i]));
  }

  return output;
}; // console.log(getOutPut(nums, area), "area");
// console.log(getOutPut(nums, circumference), "circumference");
// console.log(getOutPut(nums, diameter), "diameter");
// map & array & reduce


var persons = [{
  firstName: "Anil",
  lastName: "Krishna",
  age: 26
}, {
  firstName: "Mani",
  lastName: "Kanta",
  age: 26
}, {
  firstName: "Swetha",
  lastName: "desu",
  age: 29
}]; // map
// map function takes 3 args, 1) item 2)index 3)array

var fullNames = persons.map(function (item, index, array) {
  return item.firstName + item.lastName;
}); // filter
// filter function used to filter the items that will satisfy specific condition
// age should greate that 26
// console.log(fullNames);

var nameOfPeopleWithHighAge = persons.filter(function (item) {
  return item.age > 27;
}).map(function (person) {
  return person.firstName + " " + person.lastName;
}); // console.log(nameOfPeopleWithHighAge);
// reduce
//reduce function takes the array and returns a single value, it have two args one is accumilator and one is prev value

var agedPerson = persons.reduce(function (acc, item) {
  if (acc[item.age]) {
    acc[item.age] = ++acc[item.age];
  } else {
    acc[item.age] = 1;
  }

  return acc;
}, {});
console.log(agedPerson); // function currying
//two ways
// 1) Bind 2) Closeure
// coseure

function multiply(x) {
  return function (y) {// console.log(x * y);
  };
}

var multiplyByThree = multiply(3);
multiplyByThree(5); // function sum currying

function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }

    return sum(a * b);
  };
} // console.log(sum(12)(-12)());
// array flatning


var flatarray = [1, 2, [3, 4], [5, 6, [7, 8]]]; // console.log(array.flat(2), "flatten array");

function customFlatArray(array) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = [];
  array.forEach(function (ar) {
    if (Array.isArray(ar) && depth > 0) {
      result.push.apply(result, _toConsumableArray(customFlatArray(ar, depth - 1)));
    } else {
      result.push(ar);
    }
  });
  return result;
} // console.log(customFlatArray(flatarray));


function customFlatArrayOne(array) {
  var result = [];

  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(customFlatArrayOne(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(customFlatArrayOne([1, 2, [3, 4], [5, [6, 7, [8, [9, [10, 12]]]]]])); // .then .catch

function main() {
  return getName().then(function (name) {
    console.log("Hello, ".concat(name));
    return getAge(name);
  }).then(function (age) {
    var drink = age < 10 ? "milk" : "coke";
    console.log("Have a ".concat(drink, "."));
    var child = age < 10;
    return child;
  })["catch"](function (e) {
    console.log(e);
  });
} // compose function
// if will do all the functions[one afeter one function] actividites one by none with signle value


function addThree(number) {
  return number + 3;
}

function substractFour(number) {
  return number - 4;
}

function multiplyFour(number) {
  return number * 4;
}

var compose = function compose() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (args) {
    // left to right  => reduce
    return functions.reduce(function (arg, fn) {
      return fn(arg);
    }, args); // right to left => reduceRight
    // return functions.reduceRight((arg,fn) => fn(arg), args)
  };
};

var evaluate = compose(addThree, substractFour, multiplyFour);
console.log(evaluate(10));