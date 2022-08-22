const email = document.getElementById('email');
const sendBtn = document.getElementById('send-button');
const errorMsg = document.getElementById('error-msg');
const errorIcon = document.getElementById('error-icon');

email.addEventListener('blur', emailValidation);

function emailValidation (e) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    errorIcon.classList.remove('hide');
    errorMsg.classList.remove('hide');
    console.log('Aqui');
    return false;
    } else {
        errorIcon.classList.add('hide');
        errorMsg.classList.add('hide');
    }

}