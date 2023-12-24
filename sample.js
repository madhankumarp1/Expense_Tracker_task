// // Move all your existing code here

// const balance = document.querySelector('.amo span');
// const incomeDisplay = document.getElementById('add');
// const expenseDisplay = document.getElementById('low');
// const textInput = document.querySelector('.textbox');
// const amountInput = document.querySelector('.amountbox');
// const historyList = document.querySelector('.his');
// const addButton = document.querySelector('button');

// let totalBalance = 0;
// let totalIncome = 0;
// let totalExpense = 0;

// function updateBalance() {
//     balance.textContent = totalBalance.toFixed(2);
//     incomeDisplay.textContent = totalIncome.toFixed(2);
//     expenseDisplay.textContent = totalExpense.toFixed(2);
// }

// function addTransaction(text, amount) {
//     const transactionItem = document.createElement('p');
//     transactionItem.textContent = `${text} - ${amount.toFixed(2)}`;
//     historyList.appendChild(transactionItem);
// }

// function updateHistory() {
//     historyList.innerHTML = ''; // Clear the history list
//     // Add new transactions to the history
//     // You can customize this based on your needs
//     // For example, you can store transactions in an array and iterate over them
//     addTransaction(textInput.value, parseFloat(amountInput.value));
// }

// function handleAddTransaction() {
//     const text = textInput.value.trim();
//     const amount = parseFloat(amountInput.value);

//     if (text === '' || isNaN(amount)) {
//         alert('Please enter valid text and amount.');
//         return;
//     }

//     if (amount > 0) {
//         totalIncome += amount;
//     } else {
//         totalExpense += Math.abs(amount);
//     }

//     totalBalance = totalIncome - totalExpense;

//     updateBalance();
//     updateHistory();

//     // Clear input fields after adding a transaction
//     textInput.value = '';
//     amountInput.value = '';
// }

// // Event listener for the "Add Transaction" button
// addButton.addEventListener('click', handleAddTransaction);



//       // Hover effect when hovering over transactionItem_1
//       transactionItem_1.addEventListener("mouseover", function () {
//         removebtn.classList.add("hovered");
//     });

//     transactionItem_1.addEventListener("mouseout", function () {
//         removebtn.classList.remove("hovered");
//     });



// // let balance = document.querySelector(".amo span");
// // let incomeDisplay = document.getElementById("add");
// // let expenseDisplay = document.getElementById("low");
// // let textInput = document.querySelector(".textbox");
// // let amountInput = document.querySelector(".amountbox");
// // var historyList = document.querySelector(".history_div");
// // let addButton = document.querySelector("button");
// // let buttontns = document.querySelector(".button_rem");
// // var hist = document.querySelector(".history");
// // let add_Product = document.querySelector(".his_1");


// // let totalBalance = 0;
// // let totalIncome = 0;
// // let totalExpense = 0;

// addButton.addEventListener("click", Transaction);

// function Transaction() {
//   let text = textInput.value.trim();
//   let amount = Number(amountInput.value);

//   if (text === "" || isNaN(amount)) {
//     alert("Please enter valid text and amount.");
//     return;
//   } 
  
//   else if (amount > 0)
  
  
//   {
//     let transactionItem = document.createElement("p");
//     transactionItem.classList="j"
//     let transactionItem_1 = document.createElement("p");
//     transactionItem_1.classList = "hia";
//     var all = document.createElement("div");
//     all.classList = "af";
//     let itmamount = document.createElement("p");
//     itmamount.classList = "h";
//     let removebtn = document.createElement("button");
//     removebtn.classList = "remove_btn";
//     removebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
//     historyList.append(all);
//     all.append(removebtn,transactionItem,itmamount,transactionItem_1);
  
//     transactionItem_1.className = "left_g";
//     transactionItem.textContent = `${text} `;
//     itmamount.textContent=`+${amount}`;



//     removebtn.addEventListener("click", function () {
//       all.remove(transactionItem);
//       transactionItem_1.classList.remove("left_g");

//       totalIncome -= amount;
//       // totalExpense -= amount;
//       balance.textContent = totalBalance = totalIncome - totalExpense;
//       incomeDisplay.textContent = totalIncome;
//       // expenseDisplay.textContent = totalExpense;


//       textInput.value = "";
//       amountInput.value = "";
//     });



//     totalIncome -= amount;
//     // totalExpense -= amount;
//     balance.textContent = totalBalance = totalIncome - totalExpense;
//     incomeDisplay.textContent = totalIncome;
//     // expenseDisplay.textContent = totalExpense;


//   } 
  
//   else {
//     let transactionItem = document.createElement("p");
//     transactionItem.classList="j"
//     let transactionItem_1 = document.createElement("p");
//     transactionItem_1.classList = "hia";
//     var all = document.createElement("div");
//     all.classList = "af";
//     let itmamount = document.createElement("p");
//     itmamount.classList = "h";
//     let removebtn = document.createElement("button");
//     removebtn.classList = "remove_btn";
//     removebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
//     historyList.append(all);
//     all.append(removebtn,transactionItem,itmamount,transactionItem_1);
  
//     transactionItem_1.className = "left_r";
//     transactionItem.textContent = `${text} `;
//     itmamount.textContent=`${amount}`;


//     removebtn.addEventListener("click", function () {
//       all.remove(transactionItem);


//       totalIncome -= amount;
//       totalExpense -= amount;
//       balance.textContent = totalBalance = totalIncome - totalExpense;
//       incomeDisplay.textContent = totalIncome;
//       expenseDisplay.textContent = totalExpense;


//       textInput.value = "";
//       amountInput.value = "";
//     });

//     // totalIncome -= amount;
//     totalExpense -= amount;
//     balance.textContent = totalBalance = totalIncome - totalExpense;
//     // incomeDisplay.textContent = totalIncome;
//     expenseDisplay.textContent = totalExpense;
    
//   }

//     totalIncome -= amount;
//     totalExpense -= amount;
//     balance.textContent = totalBalance = totalIncome - totalExpense;
//     // incomeDisplay.textContent = totalIncome;
//     // expenseDisplay.textContent = totalExpense;

//   textInput.value = "";
//   amountInput.value = "";
// 