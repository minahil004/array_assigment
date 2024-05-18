/*
// #1 Array manipulation using splice method:
function insertAtIndex(arr:number[], index:number, value:number) {
    arr.splice(index, 0, value);
    return arr;
}
let array = [1, 2, 3, 4, 5];
let index = 2;
let value = 10;

console.log(insertAtIndex(array, index, value));

// #3 Print Integers using While loop:
let i:number = 0;
 while (i<26){
   console.log("Integers",i);
   i++;
 }

 // #4 Print Even using While loop:
let i:number = 0;
while (i<11){
   if (i % 2 == 0){
       console.log("Even",i);
   }
   i++;
 

// #5 Function for printing a Factorial usin While loop:
 function factorial(f:number){
    let i=1;
    let fact = 1;

    while(i<f){
        fact = fact * i;
        i++;
    }
    console.log("factrial = ", fact);
}
factorial(6);

// #6 Remove Negative numbers using while loop:
let posNum:number[]= [-3,-5,7,8,-1];
let i;
console.log(posNum);
for(i= posNum.length-1; i>=0; i--) {
    if (posNum[i]<0){
        posNum.splice(i, 1);
    }
}
console.log(posNum);*/
function sum(s) {
    let i = 0;
    let a = 0;
    while (i < s.length) {
        a = a + s[i];
        i++;
    }
    console.log("Sum=", a);
}
let num = [1, 2, 3, 4, 5];
sum(num);
export {};
/*
 let c:number []=[41,42,43];
 console.log("temprature in Celcius: ", c);
 let temp:number []=[];
 let i:number = 0;
 while (i<c.length){
    temp[i] = ((c[i]*9/5)+32) ;
    i++;
 }
 console.log("temprature in forenhite",temp);
 
 
 let posNum:number[]= [2,7,6,9,5,4,4];
let i;
console.log(posNum);
for(i= posNum.length-1; i>=0; i--) {
    if (posNum[i]%2!=0){
        posNum.splice(i, 1);
    }
}
console.log(posNum);
*/ 
