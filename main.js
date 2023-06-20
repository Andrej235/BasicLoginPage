const popup = document.querySelector("#popup");
const popupAppearClass = "popup-appear";
const popupDisappearClass = "popup-disappear";
let popupOnScreen = true;

const popupBtn = document.querySelector("#popup-btn");
popupBtn.addEventListener("click", e => {
    console.log("Click");
    if (popupOnScreen) {
        popup.classList.remove(popupAppearClass);
        popup.classList.add(popupDisappearClass);
        popupOnScreen = false;
    }
    else {
        popup.classList.remove(popupDisappearClass);
        popup.classList.add(popupAppearClass);
        popupOnScreen = true;
    }
});

const loginBtn = document.querySelector("#submit-btn");
const emailInputField = document.querySelector("#email-input");
const passwordInputField = document.querySelector("#password-input");
loginBtn.addEventListener("click", e => {
    if (!InputValidation())
        console.log("Invalid input");
    else {
        EnterNewUser(emailInputField.value, passwordInputField.value);
        // console.log("Email: " + emailInputField.value + "\nPassword: " + passwordInputField.value);
    }
});

loginBtn.addEventListener("mouseover", e => loginBtn.classList.add("hover-enter"));

loginBtn.addEventListener("mouseleave", e => loginBtn.classList.remove("hover-enter"));

function InputValidation() {
    const email = emailInputField.value
    const password = passwordInputField.value
    if (email === "" || password === "")
        return false;

    let passwordHasNum = false;
    for (let i = 0; i < password.length; i++) {
        const c = password[i];
        if (!isNaN(parseFloat(c)) && isFinite(c)) {
            passwordHasNum = true;
            // console.log("Found number in password");
            break;
        }
    }
    const isPasswordValid = passwordHasNum && password.length >= 8;

    if (!isPasswordValid) {
        console.log("Invalid Password");
        return false;
    }

    let isEmailValid = email.includes("@gmail.com");
    if (!isEmailValid) {
        console.log("Invalid Email");
        return false;
    }

    return true;
}

const users = [];
let numOfUsers = 0;

function EnterNewUser(email, password) {
    users[numOfUsers] = new User(email, password);
    numOfUsers++;
    PrintUsers();
}

function PrintUsers() {
    users.forEach(user => {
        user.PrintOutUser();
    })
}

class User {
    email;
    password;

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    PrintOutUser() {
        console.log(this.email + "\n" + this.password);
    }
}