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
    // console.log('formatOfVariable')
    

    let minutes = numberOfDays * 24 * 60
    let hours = numberOfDays * 24
    let weeks = numberOfDays / 7
    let months = numberOfDays / 30
    let years = numberOfDays / 365

    let output = ''

    if (formatOfVariable == minutes){
    output = `${numberOfDays} days - ${minutes} minutes.`

    } else if (formatOfVariable == hours) {
        output = `${numberOfDays} days - ${hours} hours.`

    } else if (formatOfVariable == weeks) {
        output = `${numberOfDays} days - ${weeks} weeks.`

    } else if (formatOfVariable == months) {
        output = `${numberOfDays} days - ${months} months.`

    } else {
        output = `${numberOfDays} days - ${years} years.`
    } 

    return output

}

    console.log(convertDays(5, 'hours'))

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//   11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
//   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

//   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

//   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.