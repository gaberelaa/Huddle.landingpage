function verificarEmail() {
    let email = document.querySelector('#email'); 
    let emailValue = email.value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let message = document.querySelector('#message');

    if (regex.test(emailValue)) {
        message.className = 'successMessage pt-2';
        message.innerText = 'Email sent!';
        email.value = "";
    } else {
        message.className = 'errorMessage pt-2';
        message.innerText = 'Check your email please.'
    }
}

document.querySelector('#btn').addEventListener('click', verificarEmail)