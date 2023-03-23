const questions = document.querySelector(".question")

questions.forEach(function(question){
        const btn = question.querySelector('.question-btn');
        btn.addEventlistener('click',function(){
            question.classList.add('show-text');
    })
});
