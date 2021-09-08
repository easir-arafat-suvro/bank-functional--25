/* Java Script for index.html page */

document.getElementById('btn-submit').addEventListener('click', function () {
    // get user email
    const userEmail = document.getElementById('user-email');
    const getEmail = userEmail.value;
    // get user password 
    const userPassword = document.getElementById('user-Password');
    const getPassword = userPassword.value;
    // check email & password
    if (getEmail == 'a@a.com' && getPassword == 'a123') {
        // redirect to another page if condition meet
        window.location.href = 'banking.html';
    }
    else {
        // First way
        /*
        show massage if condition is invalid
        const text = 'Invalid Password or User Name';
        const inc = document.getElementById('invalid-massage');
        inc.innerText = text;
        inc.style.color = 'red';
        */

        // second way
        document.getElementById('invalid-massage').innerText = ' Invalid User Name or Password ';
        document.getElementById('invalid-massage').style.color = 'red';
    }

});



