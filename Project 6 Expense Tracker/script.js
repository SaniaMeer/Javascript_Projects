let transactions = [];
let descrp = document.getElementById("description")
let amt = document.getElementById("amount")
let type = document.getElementById("type")

let balance = document.getElementById("balance")
let income = document.getElementById("income")
let expenses = document.getElementById("expenses")

function createTransaction() {
    let ul = document.getElementById("transaction-list")
    let list = document.createElement("li")
    let transaction = {
        description: descrp.value,
        amount:amt.value,
        type:type.value
    }
    transactions.push(transaction)
    list.textContent = `${transaction.description} - ${transaction.amount} - ${transaction.type}`; 
    ul.appendChild(list)
}

let button = document.getElementById('btn')

button.addEventListener('click',(e)=>{
    e.preventDefault();
   createTransaction();
})