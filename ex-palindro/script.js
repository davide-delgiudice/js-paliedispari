// dichiaro la funzione
function isPalindrome(word) {
    // dichiaro una variabile di appoggio
    let palireverse='';

    // inizio il ciclo for
    for(let i = word.length -1; i>=0; i--){
        palireverse = palireverse + word[i];
        console.log(palireverse);
    }

    // inizio una condizione if
    if(word === palireverse){
        console.log(`La parola ${word} è palindroma`)
    }
    else{
        console.log(`La parola ${word} non è palindroma`)
    }

    // return della funzione
    return palireverse;
}

// faccio inserire all'utente una parola
const userWord = prompt('Inserisci una parola');
console.log(userWord);

// evoco la funzione
let pali = isPalindrome(userWord);
