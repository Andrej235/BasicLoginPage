const loginBtn = document.querySelector(".submit-btn");
AddHoverAnimationsToButton(loginBtn);

const emailInputField = document.querySelector(".email-input");
const passwordInputField = document.querySelector(".password-input");
const repeatPasswordInputField = document.querySelector(".repeat-password-input");
loginBtn.addEventListener("click", e => {
    if (VerifyUserLogInDetails(emailInputField.value, passwordInputField.value))
        console.log("Logged in");
    else
        console.log("Invalid log in information");
});