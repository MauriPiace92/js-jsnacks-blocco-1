// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
// Calcola la somma del peso di tutte le zucchine.

// creo 10 oggetti:
var tipiZucchine=[
    {
        'varietà':'romanesco',
        'peso':125,
        'lunghezza':14
    },
    {
        'varietà':'nero di milano',
        'peso':80,
        'lunghezza':9
    },
    {
        'varietà':'ortolano di faenza',
        'peso':275,
        'lunghezza':23
    },
    {
        'varietà':'lunga fiorentina',
        'peso':100,
        'lunghezza':21
    },
    {
        'varietà':'siciliana',
        'peso':290,
        'lunghezza':55
    },
    {
        'varietà':'striata di Napoli',
        'peso':23,
        'lunghezza':23
    },
    {
        'varietà':'biance triestina',
        'peso':77,
        'lunghezza':7
    },
    {
        'varietà':'rigata pugliese',
        'peso':47,
        'lunghezza':9
    },
    {
        'varietà':'tondo di piacenza',
        'peso':200,
        'lunghezza':10
    },
    {
        'varietà':'tondo di Firenze',
        'peso':234,
        'lunghezza':6
    }

];

console.log(tipiZucchine);

var totPeso=0;

// devo prendere singolarmente ogni oggetto zucchina per fare operazioni
// for (var i=0; i< tipiZucchine.length; i++){
//     var thisZucchina= tipiZucchine[i];
    
//     // sommo i pesi
//     totPeso += thisZucchina.peso;   
// }
// console.log(totPeso);

// _________________________________________________________________________________________________________________________________________
// PARTE 2:
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var arrayMin = [];
var arrayMax = [];
var soglia = 15;
var pesoMin = 0;
var pesoMax = 0;
for (var i=0; i< tipiZucchine.length; i++){
    var thisZucchina= tipiZucchine[i];

    if(thisZucchina.lunghezza < soglia ){
        arrayMin.push(thisZucchina);
        pesoMin += thisZucchina.peso;

    }else if(thisZucchina.lunghezza > soglia){
        arrayMax.push(thisZucchina);
        pesoMax += thisZucchina.peso;
    }
}
console.log('Le zucchine più piccole di '+ soglia + ' hanno un peso Tot. di: ' + pesoMin);
console.log('Le zucchine più grandi di '+ soglia + ' hanno un peso Tot. di: ' + pesoMax);



