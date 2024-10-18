
/*
// Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.

const varv = 1000

for(let i = 0 ; i < varv ; i++) {
    console.log(i)
}
*/

/*
// Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.

const countdown = 100
for(let i = countdown ; i >= 0 ; i--) {
    console.log(i)
}
*/


/*
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
// Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).

for(let i = 0 ; i <= fruits.length ; i++) {
// första varvet i loopen är i = 0
// därför får vi första frukten vid första varvet och andra frukten vid andra varvet, osv..

    console.log(fruits[i])
}
*/

/*
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
// Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
for(let i = 0 ; i < fruits.length ; i++) {
    console.log(i + ". " + fruits[i])
}
*/


// Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.

const suites = ['hjärter', 'ruter', 'spader', 'klöver']

for(let i = 0 ; i < suites.length ; i++) {

    for(let j = 2 ; j <= 14 ; j++) {
        console.log(suites[i] + " " + j)


    }

}
