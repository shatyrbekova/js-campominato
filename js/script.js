
// Devo creare due array. In particolare,  per Pc e per Utente in modo che i numeri non vengono duplicati;
var numPcArray = [];
var numUserArray = [];
var possibility= 84;
var numUserScelta;

var flag = false;


function getRandomNum (){

  //con la formula seguente generiamo numero random per computer;
  return Math.floor(Math.random()* (max- min +1)+min);
}

while (numPcArray.length < 16){

  //il numero random per computer deve essere compreso tra 1 e 100;

  var numRandom = getRandomNum(1, 100);

//se il numero generato non c'è nell'array, si deve pushare;
  if (!numPcArray.includes[numRandom]){
      numPcArray.push(numRandom);
  }

}

console.log(numPcArray);



document.getElementById('random-pc-number').innerHTML= 'Il numero casuale di PC:' + '  ' + numPcArray;

// Di seguito, creo un prompt per chiedere all'Utente di inserire un numero (compreso tra  1 e 100) per (100-16) volte, ciò 84 volte;
//i numeri che vengono inseriti da numUserScelta verranno salvati in numUserArray;

while (numUserArray.length < possibility ){ //84

   numUserScelta = parseInt(prompt('Inserire un numero tra 1 e 100'));
     
   
      if (!numUserArray.includes(numUserScelta)){
        
        //se l'utente inserisse un numero simile a quello di PC, il gioco sarebbe finito ed utente avrebbe perso;

        if(numPcArray.includes(numUserScelta)){
          alert('Mina beccata');
          flag = true;
          break
        }else {
       // se l'utente inserisse un numero che numUserArray non contiene, allora a questo punto il numero generato verrebbe salvato nell'array in questione;
          numUserArray.push(numUserScelta)
          console.log(numUserArray);
        }  
      } 
      // se l'utente inserisse non un numero, ma una parola ossia una lettera uscirebbe un alert;
      else if (isNaN (numUserScelta)|| numUserScelta < 1 || numUserScelta > 100) { // PROBLEMA: Non funzione numUserScelta < 1 || numUserScelta > 100?
        alert('Dovevi inserire un numero da 1 a 100');
      }
      //inoltre, se l'utente scegliesse un numero che aveva già inserito, di nuovo uscirebbe un alert;
      else  {
        alert ('Hai già inserito questo numero')
      } 
}

document.getElementById('random-pc-number').innerHTML+= '<br>' + 'Il numero dell\'utente:' + ' '+numUserArray;

// Come calcolare lo score del game?

if (!flag){
  alert('Hai vinto');
} else {
  alert ('Hai perso');
}

alert ('Il tuo punteggio è ' + numUserArray);

