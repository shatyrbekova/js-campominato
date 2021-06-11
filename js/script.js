
// Devo creare due array. In particolare,  per Pc e per Utente in modo che i numeri non vengono duplicati;
var numPcArray = [];
var numUserArray = [];
var possibility= 84;
var numUserScelta;

var flag = false;

while (numPcArray.length < 16){

  var numRandom = Math.floor(Math.random()*100) +1;


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
        
        if(numPcArray.includes(numUserScelta)){
          alert('Mina beccata');
          flag = true;
          break
        }else {
       
          numUserArray.push(numUserScelta)
          console.log(numUserArray);
        }  
      } 
      else if (isNaN (numUserScelta)|| numUserScelta < 1 || numUserScelta > 100) {
        alert('Dovevi inserire un numero da 1 a 100');
      }
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

alert ('Il tou punteggio è ' + numUserArray);
