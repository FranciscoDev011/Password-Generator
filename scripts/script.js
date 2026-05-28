// Data

const password_input = document.getElementById('password');
const copy_clipboard = document.getElementById('copy');

const range_value = document.getElementById('length-info');
const range_slider = document.getElementById('password-length');
const option_uppercase = document.getElementById('uppercase');
const option_lowercase = document.getElementById('lowercase');
const option_number = document.getElementById('number');
const option_symbol = document.getElementById('symbols');

const button_password = document.getElementById('gerate-password');
const strength_label = document.getElementById('strength-label');
const strength_bar = document.getElementById('strength-bar');

// Characters Sets
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
const number_characters = "0123456789";
const symbols_characters = "!@#$%&*()-_=+[]{}|;:.,<>?";

// Input Rage
function updateValue() {
    range_value.textContent = range_slider.value;
}

updateValue();

range_slider.addEventListener('input', updateValue);

// Password
button_password.addEventListener('click', generatePassword)

function generatePassword() {
    const characters_length = Number(range_slider.value);
    const addUppercase = option_uppercase.checked;
    const addLowercase = option_lowercase.checked;
    const addNumber = option_number.checked;
    const addSymbols = option_symbol.checked;

    let allCharacters = '';
    let warning = document.getElementById('text');

    if (!addUppercase && !addLowercase && !addNumber && !addSymbols) {
        warning.style.display = 'flex';    
        return
    } else {
        warning.style.display = 'none'; 
    }

    if (addUppercase) {allCharacters += uppercase_letters;}
    if (addLowercase) {allCharacters += lowercase_letters;}
    if (addNumber) {allCharacters += number_characters;}
    if (addSymbols) {allCharacters += symbols_characters;}

    let password = ''

    for (let i = 0;i < characters_length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    password_input.value = password;
    updateStrengthMeter(password)
}

function updateStrengthMeter(password) {
    const password_length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%&*()-_=+[\]{}|;:.,<>?]/.test(password);

    let meterScore = 0;
    meterScore += Math.min(password_length * 2, 40)

    if (hasUppercase) {meterScore += 10;} 
    if (hasLowercase) {meterScore += 10;} 
    if (hasNumber) {meterScore += 20;} 
    if (hasSymbol) {meterScore += 20;}  

    if (password_length <= 8) {
        meterScore = Math.min(meterScore, 40)
    }

    const barScore = Math.max(5, Math.min(100, meterScore))
    strength_bar.style.width = barScore + "%"

    if (meterScore < 50) {
        strength_bar.style.backgroundColor = 'var(--color-weak)';
        strength_label.textContent = 'Weak'
    } else if (meterScore < 80) {
        strength_bar.style.backgroundColor = 'var(--color-medium)';
        strength_label.textContent = 'Medium'
    } else {
        strength_bar.style.backgroundColor = 'var(--color-strenght)';
        strength_label.textContent = 'Strength'
    }
}

copy_clipboard.addEventListener('click', () => {
    if (password_input.value == false) {return}

    navigator.clipboard
    .writeText(password_input.value)
})