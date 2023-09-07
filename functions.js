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


// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function division(unit, divisor){
    let remainder = unit % divisor 
    let output = ''


    if (unit % divisor === 0) {
        output = `${unit} dalinasi iš ${divisor}.`
    } else {
        output = `Skaičius ${unit} nesidalina iš ${divisor}. Liekana yra ${remainder}.`
    }

    return output
}

console.log(division(10, 5))
console.log(division(11, 5))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

// function checkText(string){

//     let stringLength = str.length

//     console.log(string)
//     console.log(string.length)
//     if (string.length % 2 === 0) {
//         return 'Tekstas '${string}' turi porinį simbolių kiekį'
//     }
//     return 'Tekstas '${string}' turi neporinį simbolių kiekį'
// }

// checkText('labas')


// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//   11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
//   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".


//raides skaiciuoja nuo 0. tarkim labas "b" yra 4 raide . Tad jei norim, kad ziuretu 3cia raide, reikia nurodyti, kad pvz. symbolIndex = num(raides numeris) - 1, o jau musu pasirinkta raide selectedSymbol = str(musu stringo,teksto)[symbolIndex] (lauztiniuose skliaustuose rasomas numeris)

//   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

//   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.