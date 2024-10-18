// Ta med hjälp av en if-sats reda på om talet a är större än b.

const a = 100
const b = 20

/* if(a > b) {
    console.log("ja, a är större än b");
}
else {
    console.log("nej, a är inte större än b")
} */

// Gör ett program som tar emot två stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.

const value1 = "tja"
const value2 = "hej"

console.log(value1)
console.log(value2)

if(value1 > value2) {
    // om value 1 är större än value 2, gör det här
    console.log("value 1 är större än value 2")
}
else if(value1 < value2) {
    // om value 2 är större än value 1, gör det här
    console.log("value 2 är större än value 1")
}
else if(value1 === value2){
    // om värderna är lika stora, gör det här
    console.log("value 1 och value 2 är lika stora")
}
else {
    // om något går fel, gör det här
    console.log("något blev fel, försök igen.")
}

// Gör en program som tar ett number och ta reda på om talet är jämt eller udda.

const evenOrOdd = 42311221899

if(evenOrOdd % 2 === 0) {
    console.log("talet är jämnt")
}
else {
    console.log("talet är udda")
}

// Gör ett program som ska sitta i en sensor på lisebergs åkattration Helix. För att få åka helix ska man vara minst 150cm lång. Programmet ska skriva ut true eller false.

const minimumLength = 150
const personLength = 189

if(personLength >= minimumLength) {
    console.log("grattis, du får åka helix, på liseberg!")
}
else {
    console.log("sorry grabben, du är för kort. kom tillbaka nästa år.")
}

// På Liseberg finns 4 olika åkband; small, medium, large och platinum. För att få åka Balder krävs large eller platinum. Gör ett program som kollar ens åkband och skriver ut ifall man får åka Balder eller inte.

const small = 1
const medium = 2
const large = 3
const platinum = 4

const personÅkband = small

if(personÅkband >= 3 || personLength >= minimumLength) {
    console.log("du får åka balder, kul!")
}
else {
    console.log("sorry bror. du får inte åka balder.")
}

// Gör ett program som tar ett nummer ( 1-7 ) och skriver ut vilken veckodag numret motsvarar. Ex. 1 = måndag, 3 = untzdag. Om numret inte motsvarar någon veckodag skall programmet skriva ut false.

const chooseWeekday = 5 //prompt("skriv in en siffra!!!")

switch(chooseWeekday) {
    case "3": console.log("3 = onsdag")
        break
    case "1": console.log("1 = måndag")
        break
    case "7": console.log("7 = söndag")
        break
    case "4": console.log("4 = torsdag")
        break
    case "2": console.log("2 = tisdag")
        break
    case "5": console.log("5 = fredag")
        break
    case "6": console.log("6 = lördag")
        break
    default:  console.log("NÅGONTING GICK FEL!")
}

const number = "10"

if(number === 10) {
    console.log("===")
}
else if(number == 10) {
    console.log("==")
}

let age = 95
// Du kan ändra detta värde för att testa 
//Använd en ternary operator för att avgöra om personen är en "vuxen" (18 år eller äldre) eller en "minderårig".

age >= 18 ? console.log("personen är en vuxen") : console.log("personen är en minderårig")

let num = -5; 
// Du kan ändra detta värde för att testa 
// Använd en ternary operator för att avgöra om ett tal är positivt, negativt eller noll.

num > 0 ? console.log('talet är större än 0') 
        :  num < 0 ? console.log('talet är mindre än 0') 
        : console.log("talet är 0")






const score = 75;
const passGrade = 60 
// Du kan ändra detta värde för att testa 
//Använd en ternary operator för att avgöra om ett betyg är "godkänt" (60 poäng eller mer) eller "icke godkänt".

score >= passGrade ? console.log("du är godkänt") : console.log("du är inte godkänt")


/*
customertypes:
0 - non member
1 - member
2 - premium member
3 - platinum member
*/
let customerType = 'member'; 
// Alternativa värden kan vara 'non-member' 
// Använd en ternary operator för att avgöra om en kund har rätt till rabatt ("eligible") eller inte ("not eligible") beroende på om de är en "member" eller "non-member".

customerType === 'member' ? console.log('Du är eligiblelee för rabatt!') : console.log("du är inte eligible för att få en rabatt..")