
let hr = min = sec = "0" + 0,
startTimer;


const btnIniciar = document.querySelector(".iniciar"),
      btnParar = document.querySelector(".parar"),
      btnReset = document.querySelector(".restaurar");

/*!!Event Listeners!!*/
btnIniciar.addEventListener("click", start);      
btnParar.addEventListener("click", stop);
btnReset.addEventListener("click", reset);


/*!!INICIAR CRONOMETRO!!*/ 

function start(){

 btnIniciar.classList.add("active");
 btnParar.classList.remove("stopActivi");

startTimer = setInterval(() => {

    /*!!INTERVALO SEGUNDOS!!*/
    sec++
    sec = sec < 10 ? "0" + sec : sec;


    /*!!INTERVALO MINUTOS!!*/

    if(sec == 60){

    min++;
    min = min < 10 ? "0" + min : min;
    sec = "0" + 0;

    }

    /*!!INTERVALO HORAS!!*/
    if(min == 60){

        hr++;
        hr = hr < 10 ? "0" + hr : hr;
        min = "0" + 0;
    
        }

    percorrerTempo();

}, 1000);//definindo velocidade do cronometro em milesegundos 1000ms = 1 sec

}


/*!!INTERROMPER TIMER!!*/

function stop(){

 btnIniciar.classList.remove("active");
 btnParar.classList.add("stopActivi");  
 clearInterval(startTimer)
 
}


/*!!RESETAR VALORES!!*/

function reset(){

 btnIniciar.classList.remove("active");
 btnParar.classList.remove("stopActivi");
 clearInterval(startTimer)
 hr = min = sec = "0" + 0,
 percorrerTempo();

}

/*!!INCERIR VALORES NOS SPANS!!*/

function percorrerTempo(){

document.querySelector(".segundo").innerText = sec;
document.querySelector(".minuto").innerText = min;
document.querySelector(".hora").innerText = hr;

}