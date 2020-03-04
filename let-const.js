//constant variable
const hubby = "Salman Khan";
//hubby = "Amir Khan"; // - don't work : test

//for constant array
const numbers = [12, 45];
numbers[1] = 88; //can change elements in array: test
numbers.push(22); //can add elements in array : test
//numbers =["Salman", "Amir", "Sharuk"] // test show error
numbers.push("salman");
//numbers = [101, 202, 303]; //test show error

//for constant object
const hero = { name: "salman khan", phone: 123456 }; // can change elements

//for change variable
let patientName = "Rahim Chacha";
patientName = "Nasima Khala"; //can change
console.log(patientName);
//let leak prove
let sum = 0;
for (var i = 0; i < 10; i++) {
  sum = sum + 1;
} 
console.log(i);// test: show result
/*let sum = 0;
for (let i = 0; i < 10; i++) { //change var by let
 sum = sum + 1;
}
console.log(i);// test: show error result*/ 

