let passwordLength = 20;
let lowerCase = true;
let upperCase = true;
let numbers = true;
let symbols = true;

function generatePassword(passwordLength, lowerCase, upperCase, numbers, symbols) {
    let lowerSeries = "abcdefghijklmnopqrstuvwxyz";
    let upperSeries = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbersSeries = "1234567890";
    let symbolsSeries = "!@#$%^&*()_+-=";
    let combinedPassword = "";

    if(lowerCase) {
        combinedPassword += lowerSeries;
    }
    if(upperCase) {
        combinedPassword += upperSeries;
    }
    if(numbers) {
        combinedPassword += numbersSeries;
    }
    if(symbols) {
        combinedPassword += symbolsSeries;
    }
    let finalPassword = "";
    for(let i = 0; i < passwordLength; i++) {
        let iterator = combinedPassword.length
        let randomIndex = Math.floor(Math.random() * iterator);
        finalPassword += combinedPassword[randomIndex];
        // console.log(iterator);
        // console.log(randomIndex);
    }
    console.log(finalPassword);

}

generatePassword(passwordLength, lowerCase, upperCase, numbers, symbols);



