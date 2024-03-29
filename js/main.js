const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const succes = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');



function validateForm(){


    console.log()
    clearMessages();

    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = 'Name cannot be blank';
        nameInput.classList.add('error-border');
        errorFlag = true;
        console.log('test')
    }

    if(email.value.length < 1){
        errorNodes[1].innerText = 'email cannot be blank';
        email.classList.add('error-border');
        errorFlag = true;
    }

    if(message.value.length <1){
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

const questions = document.querySelectorAll(".question")


    questions.forEach(function(question){
        const btn = question.querySelector(".question-btn");
        btn.addEventListener('click',function(){
            questions.forEach(function(item){
                if(item !== question){
                    item.classList.remove("show-text");
                }
            });

            question.classList.toggle("show-text");
        })

    })



