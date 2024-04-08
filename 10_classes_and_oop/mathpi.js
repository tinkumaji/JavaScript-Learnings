// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

const Course = {
  name: "JavaScript",
  price: 999,
  isAvailable: true,

  callTA: function () {
    console.log(`TA is not available right now`);
  },
};

// console.log(Course);
const courseName = Object.getOwnPropertyDescriptor(Course, "name");
console.log(courseName);

Object.defineProperty(Course, "name", {
  // writable: false,
  enumerable: false, // Stop iterating
});

for (let [key, value] of Object.entries(Course)) {
  if (typeof value != "function") {
    // condition to avoid printing function
    console.log(`${key} : ${value}`);
  }
}
