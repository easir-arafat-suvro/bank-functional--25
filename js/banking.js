/* Java Script for banking.html page */

document.getElementById('deposit-button').addEventListener('click', function () {
    /* === Update total DEPOSIT amount === */

    /* get the deposited amount */
    const depositInput = document.getElementById('deposit-input');
    const currentAmount = parseFloat(depositInput.value);

    /* get the total previous amount & convert to number */
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositedAmount = parseFloat(totalDeposit.innerText);

    /* update current total deposit */
    totalDeposit.innerText = previousDepositedAmount + currentAmount;
    //clear the deposit input field
    depositInput.value = '';

    /* === Update total BALANCE === */

    /* get the previous balance */
    const totalBalance = document.getElementById('balance-total');
    const totalPreviousBalance = parseFloat(totalBalance.innerText);

    /* Update total balance by current deposit */
    totalBalance.innerText = totalPreviousBalance + currentAmount;

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* === Update total WITHDRAW amount === */

    /* get the total previous amount & convert to number */
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawdAmount = parseFloat(totalWithdraw.innerText);

    /* get the withdraw amount */
    const withdrawInput = document.getElementById('withdraw-input');
    const currentWithdraAmount = parseFloat(withdrawInput.value);

    /* update current total withdraw */
    totalWithdraw.innerText = previousWithdrawdAmount + currentWithdraAmount;
    //clear the deposit input field
    withdrawInput.value = '';

    /* === Update total BALANCE === */

    /* get the previous balance */
    const totalBalance = document.getElementById('balance-total');
    const totalPreviousBalance = parseFloat(totalBalance.innerText);

    /* Update total balance by current deposit */
    totalBalance.innerText = totalPreviousBalance - currentWithdraAmount;
})