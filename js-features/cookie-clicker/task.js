const cookie = document.getElementById("cookie");


function clickerCookie(){
    cookie.width = 150;
    clickerCounter = document.getElementById("clicker__counter");
    clickerCounter.textContent ++; 
};

cookie.onclick = clickerCookie;


