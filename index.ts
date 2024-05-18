import inquirer from "inquirer";

// #1 Array manipulation using splice method:
function insertAtIndex(arr:number[], index:number, value:number) {
    arr.splice(index, 0, value);
    return arr;
}
let array = [1, 2, 3, 4, 5];
let index = 2;
let value = 10;

console.log(insertAtIndex(array, index, value));

// #2 Impementing a Simple Shopping cart program using Array and Function:
let s_Cart = ["egg","bread","tea"];
let quantity = s_Cart.length;
console.log(s_Cart);
console.log(quantity);
let options = await inquirer.prompt([{
   name: "select",
   type: "list",
   choices:["add item" , "remove item"],
   message: "choose an option"
}])
if(options.select == "add item"){
   let answers = await inquirer.prompt([{
       name : "item_name",
       type : "string",
       message: "enetr item name to add  items in shopping cart"
    }])
    add_item(answers.item_name);
}
else if (options.select == "remove item"){
   remove_item();
}
else {
   console.log(s_Cart);
   console.log(quantity);
}
function add_item(i_name:string){
   s_Cart.push(i_name);
   quantity = quantity + 1;
   console.log("items in Array", s_Cart);
   console.log("Quantity of items: ", quantity);
}

function remove_item(){
   s_Cart.pop();
   quantity = quantity - 1;
   console.log("items in Array", s_Cart);
   console.log("Quantity of items: ", quantity);
}

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
console.log(posNum);

// #7 Funtion for Printing sum using While loop:
function sum (s:number[]){
    let i=0;
    let a=0;
    while (i<s.length){
        a=a+s[i];
        i++;
    }
    console.log("Sum=",a);
 }
 let num:number []= [1,2,3,4,5];
 sum(num);

// #8 Conversion of Temprature using While loop:
 let c:number []=[41,42,43];
 console.log("temprature in Celcius: ", c);
 let temp:number []=[];
 let i:number = 0;
 while (i<c.length){
    temp[i] = ((c[i]*9/5)+32) ;
    i++;
 }
 console.log("temprature in forenhite",temp);
 
// #9 Remove Odd numbers usin while loop:
 let posNum:number[]= [2,7,6,9,5,4,4];
let i;
console.log(posNum);
for(i= posNum.length-1; i>=0; i--) {
    if (posNum[i]%2!=0){
        posNum.splice(i, 1);
    }
}
console.log(posNum);
