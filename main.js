function AddHoverAnimationsToButton(btn) {
    btn.addEventListener("mouseover", e => btn.classList.add("hover-enter"));
    btn.addEventListener("mouseleave", e => btn.classList.remove("hover-enter"));
}

function ValidateEmail(email) {
    // if (email !== "" && email.includes("@gmail.com")) console.log("Valid Email");
    return email !== "" && email.includes("@gmail.com");
}
function ValidatePassword(password) {
    if (password === "")
        return false;

    let passwordHasNum = false;
    for (let i = 0; i < password.length; i++) {
        const c = password[i];
        if (!isNaN(parseFloat(c)) && isFinite(c)) {
            passwordHasNum = true;
            break;
        }
    }
    // if (passwordHasNum && password.length >= 8) console.log("Valid password");
    return passwordHasNum && password.length >= 8;
}

/*********************************************************************************************************/

class User {
    id;
    email;
    password;

    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    PrintOutUser() {
        console.log(this.email + "\n" + this.password);
    }
}
const users = [];
let numOfUsers = 0;
users[0] = new User(0, "banecane@gmail.com", "password123");

function EnterNewUser(email, password) {
    users[numOfUsers] = new User(email, password, numOfUsers);
    numOfUsers++;
    PrintUsers();
}

function PrintUsers() {
    users.forEach(user => {
        user.PrintOutUser();
    })
}


function VerifyUserLogInDetails(email, password) {
    const user = FindUserWithEmail(email);
    if (user === undefined) return false;

    return user.password === password;
}

function FindUserWithEmail(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email)
            return users[i];
    }
}