document.getElementById("generate").addEventListener("click", () => {
    let uppercase = false;
    let lowercase = false;
    let symbols = false;
    let numbers = false;

    const passwordLength = document.getElementById("length").value;
    const upperCaseCheckbox = document.getElementById("uppercase");
    const lowerCaseCheckbox = document.getElementById("lowercase");
    const symbolsCheckbox = document.getElementById("symbols");
    const numbersCheckbox = document.getElementById("numbers");

    if (upperCaseCheckbox.checked) uppercase=true;
    if (lowerCaseCheckbox.checked) lowercase=true;
    if (symbolsCheckbox.checked) symbols=true;
    if (numbersCheckbox.checked) numbers=true;
    
    generatePassword(passwordLength, uppercase, lowercase, symbols, numbers);

});

function generatePassword(length, uppercase, lowercase, symbols, numbers) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolsChars = "~!@#$%^&*-_=+[]{}:,<.>/?";
    const numbersChars = "0123456789";
    const generatedPassword = document.getElementById("generatedPassword");

    let allowedChars = "";
    let password = "";

    if (uppercase) allowedChars += uppercaseChars;
    if (lowercase) allowedChars += lowercaseChars;
    if (symbols) allowedChars += symbolsChars;
    if (numbers) allowedChars += numbersChars;

    if (allowedChars === ""){
        generatedPassword.value = "";
        generatedPassword.placeholder = "The password should have atleast 1 character."
    } else{
        for (i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        generatedPassword.value = password;
    }

    console.log(password);
}

