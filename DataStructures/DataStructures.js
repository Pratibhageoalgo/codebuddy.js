level - 3;

// 1. Write a recursive function that transforms all the strings to uppercase.

const user = {
  name: "Elie",
  job: "Instructor",
  workDetails: {
    type: "Part Time",
    hours: "40 hours",
  },
  educationQualifications: [
    {
      name: "Full Stack",
      type: "Certification",
    },
    {
      name: "Javascript",
      type: "Certification",
    },
  ],
};

const newUser = Object.values(user).toUpperCase();

console.log(newUser);

// 2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.

const data = "a:2,b:3,c:4,a:5,b:6";

const newData = Object.values(data).reduce((a, b) => a + b);

console.log(newData);
