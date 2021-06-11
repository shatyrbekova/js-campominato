
//BONUS//

//chiedere una difficoltà all’utente che cambia il range di numeri casuali: 
//con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50;

//Creo un prompt con parseInt per chiedere il range di numeri casuali;

var numPcArray = [];
var numUserArray = [];
var possibility= 100-16;
var flag = false; //flag ci serve per capire chi ha perso oppure chi ha vinto;
var rangeUser = parseInt(prompt('Scegliere un livello di difficoltà: 0, 1 oppure 2'));

switch(rangeUser){

    case 0: 
        var min = 1;
        var max =100-16;
        alert('Inserisci un numero compreso tra 1 e' + max);
        break;

    case 1:
        min = 1;
        max =80-16;
    
        alert('Inserisci un numero compreso tra 1 e ' + max);
        break;
    
    case 2:
        min = 1;
        max = 50-16;
        alert('Inserisci un numero compreso tra 1 e '+ max);
        break;

}

// Devo creare due array. In particolare,  per Pc e per Utente in modo che i numeri non vengono duplicati;


function getRandomNumber (min,max) {

  //con la formula seguente generiamo un numero random per computer;
  return Math.floor(Math.random()* (max- min + 1)+ min);
}

while (numPcArray.length < 16){

  // //il numero random per computer deve essere compreso tra 1 e 100;

  var numRandom = getRandomNumber (1,max);

//se il numero generato non c'è nell'array, si deve pushare;
  if (!numPcArray.includes[numRandom]){
      numPcArray.push(numRandom);
  }

}

console.log ('COMPUTER'+numPcArray);



document.getElementById('output').innerHTML+= 'Il numero casuale di PC:' + '  ' + numPcArray;

// Di seguito, creo un prompt per chiedere all'Utente di inserire un numero (compreso tra  1 e 100) per (100-16) volte, ciò 84 volte;
//i numeri che vengono inseriti da numUserScelta verranno salvati in numUserArray;

while (numUserArray.length < max ){ 

   var numUserScelta = parseInt(prompt('Inserire un numero tra 1 e '+max));
     
   if (isNaN (numUserScelta)|| numUserScelta < 1 || numUserScelta > 100) { // PROBLEMA: Non funziona numUserScelta < 1 || numUserScelta > 100?
    alert('Dovevi inserire un numero da 1 a 100');
  } else {
    if (!numUserArray.includes(numUserScelta)){ 
        numUserArray.push(numUserScelta)
        if(numPcArray.includes(numUserScelta)){
            alert('Mina beccata');
            flag = true;
            break;
          }
       } else  {
        alert ('Hai già inserito questo numero')
      } 
        
        //se l'utente inserisse un numero simile a quello di PC, il gioco sarebbe finito ed utente avrebbe perso;

       
  }
   
    
      
      // se l'utente inserisse non un numero, ma una parola ossia una lettera uscirebbe un alert;
     
      //inoltre, se l'utente scegliesse un numero che aveva già inserito, di nuovo uscirebbe un alert;
      
}

console.log('USER'+ numUserArray)
document.getElementById('random-pc-number').innerHTML+= '<br>' + 'Il punteggio dell\'utente:' + ' '+numUserArray;

// Come calcolare lo score del game?

if (!flag){
  alert('Hai vinto');
} else {
  alert ('Hai perso');
}
