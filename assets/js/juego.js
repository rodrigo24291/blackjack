
//botones
const nuevo=document.getElementById('btnNuevo'),
        pedir=document.getElementById('btnPedir'),
        detener=document.getElementById('btnDetener');
        
        //cartas
    let baraja=[];
    const cart=['S','D','C','H'];
    const dos=['J','Q','K','A'];    
    const jugardorcartas=document.getElementById('jugador-cartas');
    const computadorascartas=document.getElementById('computadora-cartas');

    //puntos
    
    const puntaje1=document.getElementById('puntero1');
    
    const puntaje2=document.getElementById('puntero2');
    let puntos1=0;
    let puntos2=0;

document.addEventListener('DOMContentLoaded',()=>{
pedir.disabled=false;
detener.disabled=true;
iniciarcartas()
})

nuevo.addEventListener('click',(e)=>{
    
    location.reload();

}
)

pedir.addEventListener('click',()=>{
    detener.disabled=false;
if(puntos1<=25){
   const azar=_.shuffle(baraja).pop();
   const img=document.createElement('img');
   img.classList.add('carta');
   img.setAttribute('src',`assets/cartas/${azar}.png`)
   console.log(img)
   jugardorcartas.appendChild(img);
   puntos(azar)
}

else{pedir.disabled=true;
jugarmaquina();
}

   
})

detener.addEventListener('click',(e)=>{
    e.preventDefault();
    jugarmaquina();
})

//iniciar cartas

function iniciarcartas(){
    
    for(i=2; i<=10; i++){
    dos.push(i);
    }
for(i=0;i<cart.length;i++){
    
    for(o=0; o<dos.length; o++){ 
        baraja.push(`${dos[o]}${cart[i]}`)
    }
}
}

function puntos(numero){
    
   let valor= numero.slice(0,numero.length-1);
   console.log(valor)
   if(valor=='J'|| valor=='Q'|| valor=='K'|| valor=='A'){
   switch(valor){
       case 'J': puntos1+=11
       break;
       case 'Q':puntos1+=12
        break;
        case 'K':puntos1+=13
        break;
        case 'A':puntos1+=14
        break;
   }
}
else{puntos1+=parseInt(valor)}
puntaje1.innerText=puntos1
}


function puntoaje2(numero){
    
    let valor= numero.slice(0,numero.length-1);
    console.log(valor)
    if(valor=='J'|| valor=='Q'|| valor=='K'|| valor=='A'){
    switch(valor){
        case 'J': puntos2+=11
        break;
        case 'Q':puntos2+=12
         break;
         case 'K':puntos2+=13
         break;
         case 'A':puntos2+=14
         break;
    }
 }
 else{puntos2+=parseInt(valor)}
 puntaje2.innerText=puntos2
 }

function jugarmaquina(){
    do{const azar=_.shuffle(baraja).pop();
        const img=document.createElement('img');
        img.classList.add('carta');
        img.setAttribute('src',`assets/cartas/${azar}.png`)
        console.log(img)
        computadorascartas.appendChild(img);
        puntoaje2(azar)}
        while(  puntos1>puntos2 && puntos2<=25 && puntos1<=25 )
        pedir.disabled=true;
        detener.disabled=true;

        if(puntos1<=25 && puntos2>25 ){
            alert('Ganaste');
        }
        else if(puntos2==puntos1){
            
            alert('Empataron');
        }
        else{
            alert('Perdiste');
        }
}