const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    /*ponteiro dos segundos*/
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360) + 90;    
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    /*ponteiro dos minutos*/
    const minutos = now.getMinutes();
    const minutosDegree = ((minutos/60)*360) + 90;
    minHand.style.transform = `rotate(${minutosDegree}deg)`;

    /*ponteiro das horas*/
    const horas = now.getHours();
    const horasDegree = ((horas/12)*360) + 90;
    hourHand.style.transform = `rotate(${horasDegree}deg)`;
}

setInterval(setDate, 1000);

