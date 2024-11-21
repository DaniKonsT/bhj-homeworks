const cookie = document.getElementById("cookie");



function clickerCookie(){
    clickerCounter = document.getElementById("clicker__counter");
    clickerCounter.textContent ++; 

    if(clickerCounter.textContent % 2) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
};

cookie.onclick = clickerCookie;


