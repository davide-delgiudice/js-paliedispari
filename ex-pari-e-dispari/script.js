// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// dichiaro una variabile di prompt per l'utente per la tipologia di numero
// dichiaro una variabile di prompt per l'utente per il numero
// dichiaro una funzione per la somma e la evoco
// dichiaro una variabile che restituisca un numero randomico per il computer
// effettuo la somma dei due valori e la salvo in una variabile esterna
// dichiaro una funzione per il pari o dispari e la evoco
// effettuo un if per stabilire se la somma dei due valori è pari o dispari
// dichiaro in console il vincitore in base alla scelta iniziale

function sumNum(value){
    let comNum = Math.floor(Math.random() * 5) +1;
    console.log(`Numero scelto dal PC ${comNum}`);

    let result = value + comNum;
    console.log(`Somma dei due numeri ${result}`);

    return result;
}

function oddeven(sumResult){
    
    if(sumResult % 2 === 0 && typeNum === 'pari'){
        console.log('Hai vinto');
    }
    else if(sumResult % 2 !==0 && typeNum === 'dispari'){
        console.log('Hai vinto');
    }
    else{
        console.log('Hai perso');
    }
}

const typeNum = prompt('Scegli pari o dispari');
console.log(typeNum);

const userNum = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(`Numero scelto dall\'utente ${userNum}`);

let sum = sumNum(userNum)

let winner = oddeven(sum);