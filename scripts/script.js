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
const strenght_label = document.getElementById('strenght_label');
const strenght_bar = document.getElementById('strenght_bar');

// Characters Sets
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
const number_characters = "0123456789";
const symbols_characters = "!@#$%&*()-_=+[]{}|;:.,<>?/";

// Input Rage
function updateValue() {
    range_value.innerHTML = range_slider.value;
}

updateValue();

range_slider.addEventListener('input', updateValue);

// Password
button_password.addEventListener('click', geratePassword)

function geratePassword() {
    const lenght = Number(range_slider.value)
    const addUppercase = option_uppercase.checked
    const addLowercase = option_lowercase.checked
    const addNumber = option_number.checked
    

    
}