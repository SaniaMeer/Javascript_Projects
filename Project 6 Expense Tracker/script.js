let transactions = [];
let descrp = document.getElementById("description")
let amt = document.getElementById("amount")
let type = document.getElementById("type")

let balance = document.getElementById("balance")
let incomedata = document.getElementById("income")
let expenses = document.getElementById("expenses")

function createTransaction() {
    let ul = document.getElementById("transaction-list")
    let list = document.createElement("li")
    let transaction = {
        description: descrp.value,
        amount: amt.value,
        type: type.value
    }
    transactions.push(transaction)
    list.textContent = `${transaction.description} - ${transaction.amount} - ${transaction.type}`;
    ul.appendChild(list)
    let incometotal;
    let expensetotal;

    let onlyincome = transactions.filter((currentValue) => {
        return currentValue.type === "income";
    });
    incometotal = onlyincome.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.amount);
    }, 0);

    if (transaction.type === "income") {

        incomedata.textContent = "$" + incometotal
    }

    let ex = transactions.filter((currentValue) => {
        return currentValue.type === "expense";
    });
    expensetotal = ex.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.amount);
    }, 0);

    if (transaction.type === "expense") {

        expenses.textContent = "$" + expensetotal
    }
    balance.textContent = "$" + (incometotal - expensetotal);
}

let button = document.getElementById('btn')

button.addEventListener('click', (e) => {
    e.preventDefault();
    createTransaction();
})