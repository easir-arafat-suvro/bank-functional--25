/*  Function to get input amount of deposit and withdraw */
function getInputOfDepositOrWithdraw(inputId) {
    const inputDetails = document.getElementById(inputId);
    const inputAmount = parseFloat(inputDetails.value);
    inputDetails.value = '';
    return inputAmount;
}

/* Functin to get the previous amount of deposit and withdraw & update field*/
function getUpdateDepositOrWithdraw(inputId, currentInputAmount) {
    const previousValue = document.getElementById(inputId);
    const previousAmount = parseFloat(previousValue.innerText);
    previousValue.innerText = previousAmount + currentInputAmount;
}

function getCurrentBalance() {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceAmount = parseFloat(previousBalance.innerText);
    return previousBalanceAmount;
}


/* Function to get previous balance & update total balance */
function getUpdateBalance(currentInputAmount, isAdd) {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        previousBalance.innerText = previousBalanceAmount + currentInputAmount;
    }
    else {
        previousBalance.innerText = previousBalanceAmount - currentInputAmount;
    }
}

/* --- Handle Deposite & Update Balance--- */
document.getElementById('deposit-button').addEventListener('click', function () {
    const currentInputAmount = getInputOfDepositOrWithdraw('deposit-input'); /* Update total DEPOSIT */
    if (currentInputAmount > 0) { // consition to remove negative number & string
        getUpdateDepositOrWithdraw('deposit-total', currentInputAmount); /* Update total BALANCE */
        getUpdateBalance(currentInputAmount, true);
    }
});

/* --- Handle Withdraw & Update Balance  --- */
document.getElementById('withdraw-button').addEventListener('click', function () {
    const currentInputAmount = getInputOfDepositOrWithdraw('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (currentInputAmount > 0 && currentBalance >= currentInputAmount) { /* condition to remove negative number, string & withdraw greter than balance */
        getUpdateDepositOrWithdraw('withdraw-total', currentInputAmount);
        getUpdateBalance(currentInputAmount, false); /* Update total BALANCE */
    }
    if (currentBalance < currentInputAmount) {
        document.getElementById('error-massage').innerText = 'You Have Insufficient Balance in Your Account';
        document.getElementById('error-massage').style.color = 'OrangeRed';
    }
});