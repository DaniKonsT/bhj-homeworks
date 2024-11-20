const addText = function(){
    const timer = document.getElementById("timer");
    let countdown = timer.textContent -= 1;
    if(countdown < 0){
        clearTimeout(id);
        alert ("Вы победили в конкурсе!");
    }
    
}

const id = setInterval(addText, 1000);