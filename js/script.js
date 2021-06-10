
// Devo creare due array. In particolare,  per Pc e per Utente in modo che i numeri non vengono duplicati;
var numPcArray = [];
var numUserArray = [];
var possibility= 2;
var numUserScelta;

var flag = false;

while (numPcArray.length < 16){

  var numRandom = Math.floor(Math.random()*100) +1;


  if (!numPcArray.includes[numRandom]){
      numPcArray.push[numRandom];
  }

}


document.getElementById('random-pc-number').innerHTML=numPcArray;

// Di seguito, creo un prompt per chiedere all'Utente di inserire un numero (compreso tra  1 e 100) per (100-16) volte, ciò 84 volte;
//i numeri che vengono inseriti da numUserScelta verranno salvati in numUserArray;

while (numUserArray.length < possibility ){ //84

   numUserScelta = parseInt(prompt('Inserire un numero tra 1 e 100'));
   
      if (!numUserArray.includes[numUserScelta] == false){
        numUserArray.push[numUserScelta];
        if (numUserArray.includes[numUserScelta] ){

        }
      }
   
}


//Generare 16 numeri per Pc(tra  1 e 100). come si fa con function e while o senza function?

// while (numPcArray.length < 16){

//   var numRandom = Math.floor(Math.random()*100) +1;


//   if (!numPcArray(numRandom)){
//       numPcArray.push[numRandom];
//   }

// }


// document.getElementById('random-pc-number').innerHTML=numPcArray;

