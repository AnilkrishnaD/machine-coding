// higer order functions

// def: A function which takes another function as an argument or returns another function is called an higher order function

const nums = [1, 2, 3, 4];
const area = function (radius) {
  return (Math.PI * radius * radius).toFixed(2);
};

const circumference = function (radius) {
  return (2 * Math.PI * radius).toFixed(2);
};

const diameter = function (radius) {
  return (2 * radius).toFixed(2);
};

const getOutPut = (nums, logic) => {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    output.push(logic(nums[i]));
  }
  return output;
};

// console.log(getOutPut(nums, area), "area");
// console.log(getOutPut(nums, circumference), "circumference");
// console.log(getOutPut(nums, diameter), "diameter");

// map & array & reduce

const persons = [
  { firstName: "Anil", lastName: "Krishna", age: 26 },
  { firstName: "Mani", lastName: "Kanta", age: 26 },
  { firstName: "Swetha", lastName: "desu", age: 29 },
];

// map
// map function takes 3 args, 1) item 2)index 3)array
const fullNames = persons.map(
  (item, index, array) => item.firstName + item.lastName
);
// filter
// filter function used to filter the items that will satisfy specific condition

// age should greate that 26
// console.log(fullNames);

const nameOfPeopleWithHighAge = persons
  .filter((item) => item.age > 27)
  .map((person) => person.firstName + " " + person.lastName);
// console.log(nameOfPeopleWithHighAge);

// reduce
//reduce function takes the array and returns a single value, it have two args one is accumilator and one is prev value
const agedPerson = persons.reduce((acc, item) => {
  if (acc[item.age]) {
    acc[item.age] = ++acc[item.age];
  } else {
    acc[item.age] = 1;
  }
  return acc;
}, {});

console.log(agedPerson);

// function currying
//two ways
// 1) Bind 2) Closeure
// coseure
function multiply(x) {
  return function (y) {
    // console.log(x * y);
  };
}

const multiplyByThree = multiply(3);
multiplyByThree(5);

// function sum currying
function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }
    return sum(a + b);
  };
}

// onsole.log(sum(12)(12)(), "currying");
// array flatning
const flatarray = [1, 2, [3, 4], [5, 6, [7, 8]]];

// console.log(array.flat(2), "flatten array");

function customFlatArray(array, depth = 1) {
  let result = [];

  array.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlatArray(ar, depth - 1));
    } else {
      result.push(ar);
    }
  });
  return result;
}

// console.log(customFlatArray(flatarray));

function customFlatArrayOne(array) {
  let result = [];

  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(customFlatArrayOne(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(
  customFlatArrayOne([1, 2, [3, 4], [5, [6, 7, [8, [9, [10, 12]]]]]])
);

// .then .catch
function main() {
  return getName()
    .then((name) => {
      console.log(`Hello, ${name}`);
      return getAge(name);
    })
    .then((age) => {
      const drink = age < 10 ? "milk" : "coke";
      //console.log(`Have a ${drink}.`);
      const child = age < 10;
      return child;
    })
    .catch((e) => {
      // console.log(e);
    });
}

// compose function
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

const compose = (...functions) => {
  return (args) => {
    console.log(functions, args);
    // left to right  => reduce
    return functions.reduce((arg, fn) => fn(arg), args);
    // right to left => reduceRight
    // return functions.reduceRight((arg,fn) => fn(arg), args)
  };
};
const evaluate = compose(addThree, substractFour, multiplyFour);
console.log(evaluate(10));

// object iteration

const person = { name: "Anil", age: 26, loaction: "chennai" };

// for in loop
for (i in person) {
  console.log(i, person[i]);
}

// object.keys
let personKeys = Object.keys(person);

for (const key of personKeys) {
  console.log(key, person[key]);
}

// object.entries
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

// deep copy of object
const deepPerson = JSON.parse(JSON.stringify(person));

// debounce submit
count = 0;
function getData() {
  console.log("fetching data", count++);
}

function doSomeMagic(fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
}

const betterFunction = doSomeMagic(getData, 300);

// roadside coder

let pressCount = 0;
let triggeredCount = 0;

const incrementBtn = document.getElementById("increment-button");
const clickCount = document.getElementById("press-count");
const triggerCount = document.getElementById("trigger-count");

const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = myDebounce(() => {
  triggeredCount += 1;
  triggerCount.innerHTML = triggeredCount;
}, 1000);

incrementBtn.addEventListener("click", () => {
  clickCount.innerHTML = ++pressCount;
  debounceCount();
});

console.log(3 + "3");
console.log(3 - "3");

// promise.all

Promise.allSettled([Promise.resolve(" 1"), Promise.reject("Step2")])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
    console.error(Object.keys(e));
  });

const data = [
  {
    name: "NmmeA",
    count: 2,
  },
  {
    name: "NmmeB",
    count: 4,
  },
  {
    name: "NmmeC",
    count: 0,
  },
  {
    name: "NmmeD",
    count: 1,
  },
  {
    name: "NmmeE",
    count: -5,
  },
  {
    name: "NmmeF",
    count: 12,
  },
];
