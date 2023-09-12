console.log('veikia')

// Sukurti žemiau nurodytas funkcijas:

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.


function convertDays(numberOfDays, formatOfVariable){
    // console.log(numberOfDays)
    // console.log(formatOfVariable)
    

    if (isNaN(numberOfDays)){
        return `neteisingai nurodytas dienų skaičius`
    }

    if (formatOfVariable === `minutes`){
        let minutes = numberOfDays * 24 * 60
    
        return `${numberOfDays} days - ${minutes} minutes.`
    }

    if (formatOfVariable === `hours`) {
        let hours = numberOfDays * 24
        
        return `${numberOfDays} days - ${hours} hours.`
    } 
    
    if (formatOfVariable === `weeks`) {
        let weeks = (numberOfDays / 7).toFixed(1)

        return `${numberOfDays} days - ${weeks} weeks.`
    }

    if (formatOfVariable === `months`) {
        let months = (numberOfDays / 30).toFixed(2) 

        return `${numberOfDays} days - ${months} months.`
    }

    if (formatOfVariable === `years`) {
        let years = (numberOfDays / 365).toFixed(3)

        return `${numberOfDays} days - ${years} years.`
    } 

    if (formatOfVariable === ``){
       return `Nurodytas formatas yra netinkamas. Galima rinktis iš minutes, hours, weeks, months, years`
    }
}

    console.log(convertDays(5, `minutes`))
    console.log(convertDays(5, `hours`))
    console.log(convertDays(5, `weeks`))
    console.log(convertDays(5, `months`))
    console.log(convertDays(5, `years`))
    console.log(convertDays(5, ``))
    console.log(convertDays('desimt', `minutes`))

    // ROMANO KODAS no8

    // PIRMAS VARIANTAS 

    // function convertDays(days, format) {
//   if (format === 'minutes') {
//     let minutes = days * 24 * 60
//     return `${days} days - ${minutes} minutes.`
//   } else if (format === 'hours') {
//     let hours = days * 24
//     return `${days} days - ${hours} hours.`
//   } else if (format === 'weeks') {
//     let weeks = (days / 7).toFixed(2)
//     return `${days} days - ${weeks} weeks.`
//   } else if (format === 'months') {
//     let months = (days / 30).toFixed(2)
//     return `${days} days - ${months} months.`
//   } else if (format === 'years') {
//     let years = (days / 365).toFixed(2)
//     return `${days} days - ${years} years.`
//   }
// }

    // ANTRAS VARIANTAS 

// function convertDays(days, format) {
//     if (isNaN(days)) {
//       return 'Neteisingai nurodytas dienų skaičius.'
//     }
  
//     if (format === 'minutes') {
//       let minutes = days * 24 * 60
//       return `${days} days - ${minutes} ${format}.`
//     }
    
//     if (format === 'hours') {
//       let hours = days * 24
//       return `${days} days - ${hours} ${format}.`
//     }
    
//     if (format === 'weeks') {
//       let weeks = (days / 7).toFixed(2)
//       return `${days} days - ${weeks} ${format}.`
//     }
    
//     if (format === 'months') {
//       let months = (days / 30).toFixed(2)
//       return `${days} days - ${months} ${format}.`
//     }
    
//     if (format === 'years') {
//       let years = (days / 365).toFixed(2)
//       return `${days} days - ${years} ${format}.`
//     }
  
//     return 'Nurodytas formatas yra netinkamas. Galima rinktis iš: minutes, hours, weeks, months, years.'
//   }
  
//   console.log(convertDays(45, 'years'))
//   console.log(convertDays('labas', 'minutes'))
//   console.log(convertDays(45))

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function division(unit, divisor){
    let remainder = unit % divisor 

    if (unit % divisor === 0) {
        return `${unit} dalinasi iš ${divisor}.`
    } else {
        return `Skaičius ${unit} nesidalina iš ${divisor}. Liekana yra ${remainder}.`
    }
 
}

console.log(division(10, 5))
console.log(division(18, 5))

// ROMANO KODAS No 9

// function checkNumber(unit, divisor) {
//     let answer = unit % divisor
  
//     if (answer === 0) {
//       return `${unit} dalinasi iš ${divisor}.`
//     } 
    
//     return `Skaičius ${unit} nesidalina iš ${divisor}. Liekana yra ${answer}.`
//   }
  
//   console.log(checkNumber(15, 5))


// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

    function checkText(str) {

    console.log(str)    

    if (typeof str !== 'string') {
    return `ERROR: Įvesti duomenys nėra tekstas.`
    }

    let strLength = str.length

    if (strLength % 2 === 0) {
        return `Tekstas ${str} turi porinį simbolių kiekį.`
    }
    return `Tekstas ${str} turi neporinį simbolių kiekį.`
    }

    console.log(checkText('car'))


// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//   11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
//   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".


//raides skaiciuoja nuo 0. tarkim labas "b" yra 4 raide . Tad jei norim, kad ziuretu 3cia raide, reikia nurodyti, kad pvz. symbolIndex = num(raides numeris) - 1, o jau musu pasirinkta raide selectedSymbol = str(musu stringo,teksto)[symbolIndex] (lauztiniuose skliaustuose rasomas numeris)

//   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

//   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function getSymbol(str, symbolNum) {

if (symbolNum === 0) {
    return `Reikia ivesti teigiama arba neigiama skaiciu.`
}

let strLength = str.length

let convertedNum = symbolNum < 0 ? symbolNum * -1 : symbolNum

if (strLength < symbolNum) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${symbolNum}. `
}
if (strLength < convertedNum) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum}.` 
}
if (symbolNum < 0) {
    // let symbolIndexBack = strLength + symbolNum // prideti, nes kai skaicius minusinis ir atimame, gaunasi pliusas
    // let selectedBackSymbol = str[symbolIndexBack]

    let selectedBackSymbol = str.at(symbolNum)

    return `Teksto "${str}" ${convertedNum} simbolis nuo galo yra "${selectedBackSymbol}"`
}

let symbolIndex = symbolNum - 1
// let selectedSymbol = str[symbolIndex]

// let selectedSymbol = str.charAt(symbolIndex)
let selectedSymbol = str.at(symbolIndex) //geras metodas isskaiciuoti raides, nes reiksme galima rasyti tiek teigiama, tiek neigiama.

return `Teksto "${str}" ${symbolIndexBack} simbolis yra "${selectedSymbol}"`

}

console.log(getSymbol('sveikas', -4))