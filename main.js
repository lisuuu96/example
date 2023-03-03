const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const succes = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

function validateForm(){

    clearMessages();

    let errorFlag = false;

    if(nameInput.value.lenght < 1){
        errorNodes[0].innerText = 'Name cannot be blank';
        nameInput.classList.add('error-border');
        errorFlag = true;
    }

    if(email.value.lenght <1){
        errorNodes[1].innerText = 'email cannot be blank';
        email.classList.add('error-border');
        errorFlag = true;
    }

    if(message.value.lenght <1){
        errorNodes[2].innerText = 'Please write message';
        message.classList.add('error-border');
        errorFlag = true;
    }

    if(!errorFlag){
        succes.innerText= 'Success'
    }

}

function clearMessages(){
    for(let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText = '';
    }
    succes.innerText = '';
    nameInput.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');

}

