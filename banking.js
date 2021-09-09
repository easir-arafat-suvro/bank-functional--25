/*  Function to get input amount of deposit and withdraw */
function getInputOfDepositOrWithdraw(inputId) {
    const inputDetails = document.getElementById(inputId);
    const inputAmount = parseFloat(inputDetails.value);
    inputDetails.value = '';
    return inputAmount;
}

/* Functin to get the previous amount of deposit and withdraw */
function getPreviousDepositOrWithdraw(inputId) {
    const previousValue = document.getElementById(inputId);
    const previousAmount = parseFloat(previousValue.innerText);
    return previousAmount
}

/* Function to get previous balance */
function getPreviousBalance(inputId) {
    const previousBalance = document.getElementById(inputId);
    const previousBalanceAmount = parseFloat(previousBalance.innerText);
    return previousBalanceAmount;
}

/* --- Handle Deposite --- */
document.getElementById('deposit-button').addEventListener('click', function () {
    /* Update total DEPOSIT */
    const currentInputAmount = getInputOfDepositOrWithdraw('deposit-input');
    const previousDepositAmount = getPreviousDepositOrWithdraw('deposit-total');
    document.getElementById('deposit-total').innerText = previousDepositAmount + currentInputAmount;

    /* Update total BALANCE */
    const previousBalanceAmount = getPreviousBalance('balance-total');
    document.getElementById('balance-total').innerText = previousBalanceAmount + currentInputAmount;
});

/* --- Handle Withdraw --- */
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* Update total WITHDRAW */
    const currentInputAmount = getInputOfDepositOrWithdraw('withdraw-input');
    const previousWithdrawAmount = getPreviousDepositOrWithdraw('withdraw-total');
    document.getElementById('withdraw-total').innerText = previousWithdrawAmount + currentInputAmount;

    /* Update total BALANCE */
    const previousBalanceAmount = getPreviousBalance('balance-total');
    document.getElementById('balance-total').innerText = previousBalanceAmount - currentInputAmount;
});