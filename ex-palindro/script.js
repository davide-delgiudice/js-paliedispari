// Palindroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all'utente un numero
// Dichiarare la funzione ed evocarla
// Dichiaro delle variabili all'interno della funzione
// 

function isPalindrome(word) {
    let palireverse='';

    for(let i = word.length -1; i>=0; i--){
        palireverse = palireverse + word[i];
        console.log(palireverse);
    }

    if(word === palireverse){
        console.log(`La parola ${word} è palindroma`)
    }
    else{
        console.log(`La parola ${word} non è palindroma`)
    }

    return palireverse;
}

const userWord = prompt('Inserisci una parola');
console.log(userWord);

let pali = isPalindrome(userWord);
