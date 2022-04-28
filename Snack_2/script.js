const zucchInfo = [{
        varieta: "Zucchine verdi",
        peso: 100,
        lunghezza: 15,
    },
    {
        varieta: "Zucchine chiare",
        peso: 110,
        lunghezza: 18,
    },
    {
        varieta: "Zucchine tonde",
        peso: 150,
        lunghezza: 8,
    },
    {
        varieta: "Zucchine lunghe",
        peso: 140,
        lunghezza: 21,
    },
    {
        varieta: "Zucchine gialle",
        peso: 57,
        lunghezza: 6,
    },
    {
        varieta: "Zucchine eccentriche",
        peso: 200,
        lunghezza: 19,
    },
    {
        varieta: "Zucchine italiane",
        peso: 120,
        lunghezza: 15,
    },
    {
        varieta: "Zucchine spagnole",
        peso: 130,
        lunghezza: 14,
    },
    {
        varieta: "Zucchine corte",
        peso: 60,
        lunghezza: 5,
    },
    {
        varieta: "Zucchine fiore",
        peso: 200,
        lunghezza: 25,
    },
];

const over15cm = [];
const under15cm = [];
let pesoTotaleOver = 0;
let pesoTotaleUnder = 0;

for (let i = 0; i < zucchInfo.length; i++) {
    const cmMax = 15;
    if (zucchInfo[i].lunghezza < cmMax) {
        under15cm.push(zucchInfo[i]);
    } else {
        over15cm.push(zucchInfo[i]);
    }
}

/*** Maggiori 15 ***/

for (let i = 0; i < over15cm.length; i++) {
    pesoTotaleOver += over15cm[i].peso;
}
console.log("over", pesoTotaleOver);
console.log(over15cm);

/*** Minori 15 ***/

for (let i = 0; i < under15cm.length; i++) {
    pesoTotaleUnder += under15cm[i].peso;
}
console.log("under", pesoTotaleUnder);
console.log(under15cm);