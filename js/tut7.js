console.log("Learning Array");
let marks = [34,23,24,93,73,25];
//const fruits = [`orange`,`apple`,`pineapple`];
//const mixed = [`str`,89,[3,5]];

//const arr = new Array(23,123,21,`Orange`);
// console.log(arr);
// console.log(mixed);
// console.log(fruits);
// console.log(fruits[1]);

//Array has property and methods
console.log(marks.length); //this is a property cause of no paranthesis
//console.log(Array.isArray(arr));
//arr[0]=`Kiran`;
//console.log(arr);
//let arrElement=arr[0];
//console.log(arrElement);
console.log(marks);
//Methods
let value=marks.indexOf(34);
// console.log(value);

//Mutationg means modifying the array
marks.push(35467); //insert at the end
//console.log(marks);
//marks.unshift(56);  //insert at the beginning 
//console.log(marks);
//marks.pop();        //delete at the end
//console.log(marks);
//marks.shift();      //delete at the beginning
//console.log(marks);
//marks.splice(2,3);      .//start from,how many elements deleting
//console.log(marks);
// marks.reverse();
// console.log(marks);
// let marks2=[1,2,3,7];
// marks=marks.concat(marks2);
// console.log(marks);

let myobj={
    name:`Kiran`,
    'last name':`Jha`,
    dept:`Blockchain`,
    design: `Blockchain Intern`

}
console.log(myobj);
console.log(myobj.marks);
console.log(myobj.dept);
console.log(myobj['last name']);
console.log(myobj['design']);

