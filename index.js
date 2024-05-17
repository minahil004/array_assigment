import inquirer from "inquirer";
//  function insertAtindex (arr:number,index:number,value:number):number {
//     array.splice(index,0,value);
//     return arr;
//  }
//  let array = [1,2,3,4,5];
//  let index = 2;
//  let value = 10;
//  console.log (insertAtindex(array,index,value));
// function insertAtIndex(arr:number[], index:number, value:number) {
//     arr.splice(index, 0, value);
//     return arr;
// }
// let array = [1, 2, 3, 4, 5];
// let index = 2;
// let value = 10;
// console.log(insertAtIndex(array, index, value));
let s_Cart = ["egg", "bread", "tea"];
let quantity = s_Cart.length;
console.log(s_Cart);
console.log(quantity);
let options = await inquirer.prompt([{
        name: "select",
        type: "list",
        choices: ["add item", "remove item"],
        message: "choose an option"
    }]);
if (options.select == "add item") {
    let answers = await inquirer.prompt([{
            name: "item_name",
            type: "string",
            message: "enetr item name to add  items in shopping cart"
        }]);
    add_item(answers.item_name);
}
else if (options.select == "remove item") {
    remove_item();
}
else {
    console.log(s_Cart);
    console.log(quantity);
}
function add_item(i_name) {
    s_Cart.push(i_name);
    quantity = quantity + 1;
    console.log("items in Array", s_Cart);
    console.log("Quantity of items: ", quantity);
}
function remove_item() {
    s_Cart.pop();
    quantity = quantity - 1;
    console.log("items in Array", s_Cart);
    console.log("Quantity of items: ", quantity);
}
