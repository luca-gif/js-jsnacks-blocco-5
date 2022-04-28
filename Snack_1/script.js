/* Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchInfo = [{
        varieta: "Zucchine verdi",
        peso: 100,
        lunghezza: "15 cm",
    },
    {
        varieta: "Zucchine chiare",
        peso: 110,
        lunghezza: "18 cm",
    },
    {
        varieta: "Zucchine tonde",
        peso: 150,
        lunghezza: "8 cm",
    },
    {
        varieta: "Zucchine lunghe",
        peso: 140,
        lunghezza: "21 cm",
    },
    {
        varieta: "Zucchine gialle",
        peso: 57,
        lunghezza: "6 cm",
    },
    {
        varieta: "Zucchine eccentriche",
        peso: 200,
        lunghezza: "19 cm",
    },
    {
        varieta: "Zucchine italiane",
        peso: 120,
        lunghezza: "15 cm",
    },
    {
        varieta: "Zucchine spagnole",
        peso: 130,
        lunghezza: "14 cm",
    },
    {
        varieta: "Zucchine corte",
        peso: 60,
        lunghezza: "5 cm",
    },
    {
        varieta: "Zucchine fiore",
        peso: 200,
        lunghezza: "25 cm",
    },
];

let pesoTotale = 0;

for (let i = 0; i < zucchInfo.length; i++) {
    pesoTotale += zucchInfo[i].peso;
}
console.log(pesoTotale);