let std = 
[
{name:"Kashan",age: 21, marks: 90},
{name:"Saad",age:21,marks:80},
{name:"Gulam",age:21,marks:70},
{name:"Hasseb",age:21,marks:60}
];

console.log("All students");
console.log(std);
let highest = std[0];

for (let i = 1; i < std.length; i++) {
    if (std[i].marks > highest.marks) {
        highest = std[i];
    }
}

console.log("Highest Marks Student:");
console.log(highest);