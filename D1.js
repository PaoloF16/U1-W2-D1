/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//let // serve per dichiarare una variabile
//const // serve per dichiarare una costante
/* SCRIVI QUI LA TUA RISPOSTA */
//Essempio:
let myString = "Questa e una stringa" //Posso darle un valore di testo
let myNumber = 10 // Posso darli un valore numerico
let myBoolean = true // Posso darli un valore booleano sia true o false
let myBoolean2 = false // In queste caso li do un valore false 

let myUndefined // Questo significa che e  una variabile indefinita
let myUndefined2 = undefined // Questo e una seconda forma d dichiarare la variabile indefinita

let myNull = null // Questo significa che e una variabile nulla 


//Adesso provero con const
const paese = "Italia" // in queste caso le dichiaro una constante vuol dire che non si puo cambiare il valore de questa variabile
console.log('Stampera il valore de mi const paese =', paese)

/* ESERCIZIO 2
Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Paolo"

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 20

console.log("Questo stampera la somma de a + b=", a + b)


/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Fiorentini"
/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let mySottrazione = 10 - 1 - 2 - x
console.log("Questo stampera la sostrazione de 10-1-2-x =", mySottrazione)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon"
let name2 = "Jhon"

console.log("name1  =  name2?", name1 !== name2)
console.log("name1  =  name2?", name1.toLowerCase() === name2.toLowerCase())

