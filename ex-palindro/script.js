// Palindroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all'utente un numero
// Dichiarare la funzione ed evocarla
// Dichiaro delle variabili all'interno della funzione
// 

function isPalindrome(word) {
    let palireverse;

    for(let i = word.lenght -1; i>=0; i--);{
        palireverse = palireverse + word[i]
    }

    if(word === palireverse){
        true
    }
    else{
        false
    }

    return
}

const userWord = prompt('Inserisci una parola');

let pali = isPalindrome(userWord);
