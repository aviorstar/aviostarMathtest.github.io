let btn = document.getElementById("finish");

btn.addEventListener("click", checkTest);

function checkTest(){
    let result = 0;

    let a1 = document.getElementById("q1").value;
    if (a1 === "107"){
        result ++;
    }
    let a2 = document.getElementById("q2").value;
    if (a2 === "90"){
        result ++;
    }
    let a3 = document.getElementById("q3").value;
    if (a3 === "50"){
        result ++;
    }
    let a4 = document.getElementById("q4").value;
    if (a4 === "-35"){
        result ++;
    }
    let a5 = document.getElementById("q5").value;
    if (a5 === "16"){
        result ++;
    }
    let a6 = document.getElementById("q6").value;
    if (a6 === "1"){
        result ++;
    }
    let a7 = document.getElementById("q7").value;
    if (a7 === "25"){
        result ++;
    }


    const questions = document.querySelectorAll ('.question')
    let messageText = result;
        if (messageText === questions.length){
		    messageText = 'Поздравляем! 🎉\nВы ответили верно на все вопросы';
        } else if (messageText*100/questions.length >= 50){
            messageText = 'Неплохой результат! 😉\nВы дали более половины правильных ответов';
        } else if (messageText*100/questions.length <= 50 && messageText*100/questions.length > 0){
            messageText = 'Стоит постараться! 😐\nПока у Вас меньше половины правильных ответов';
        } else {
            messageText = 'Не стоит отчаиваться! 😢\nПока у Вас нет верных ответов';
        }

    
    alert ("Количество правильных ответов: " + result + "\n" + messageText);
};