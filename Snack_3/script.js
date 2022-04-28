/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

function reverse(str) {
    const reversPhrase = str.split("").reverse().join("");
    return reversPhrase;
}

console.log(reverse("ciao"));