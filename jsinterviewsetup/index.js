const arr = [1, 2, 3];

const person = [
  { name: "Anil", age: 26, location: "chennai" },
  { name: "Main", age: 26, location: "chennai" },
  { name: "Ramu", age: 30, location: "chennai" },
];

// const result = person.filter((item, index, arr) => item.age < 27);
// const agedPerson = persons.reduce((acc, item) => {
//   if (acc[item.age]) {
//     acc[item.age] = ++acc[item.age];
//   } else {
//     acc[item.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(result);

const result = person.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(result);
