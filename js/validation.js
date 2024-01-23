//Gestion du Regex dans le formulaire de contact par Max la Menace

//Dans un premier temps nous allons récupèrer les valeurs de chaque input du formulaire de contact

const userName = document.querySelector("#name");
const userFirstname = document.querySelector("#firstname");
const userPhonenumber = document.querySelector("#phone");
const userEmail = document.querySelector ("#email");
const userSubject = document.querySelector("#sujet");
const userMessage = document.querySelector("#message");

//Nous allons initier les variables de validation

let nameValid = false;
let firstnameValid = false;
let phonenumberValid = false;
let emailValid = false;
let subjectValid = false;
let messageValid = false;

//Nous allons mettre les expressions régulières (Regex)

const UserRegex = /^[a-zA-Z-]{3,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const SujetRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;

//Nous allons faire une fonction addClass qui permet de renvoyer true ou false

function addClass(input , regex , value) {
    // console.log(arrayCompare.test(input.value));

    if (regex.test(value) === false) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
};

//Nous allons faire les écouteurs d'événement permettant d'écouter les événnements lorsque l'utilisateur rentre une donnée dans les inputs
userName.addEventListener("input", (e)=> {
    addClass(userName, UserRegex, e.target.value);
    if (userName.classList.contains("is-valid")) {
        nameValid = true
    } else {
        nameValid = false
    }
});

userFirstname.addEventListener("input", (e)=> {
    addClass(userFirstname, UserRegex, e.target.value);
    if (userFirstname.classList.contains("is-valid")) {
        firstnameValid = true
    } else {
        firstnameValid = false
    }
});

userPhonenumber.addEventListener("input", (e)=> {
    addClass(userPhonenumber, PhoneNumberRegex, e.target.value);
    if (userPhonenumber.classList.contains("is-valid")) {
        phonenumberValid = true
    } else {
        phonenumberValid = false
    }
});

userEmail.addEventListener("input", (e)=> {
    addClass(userEmail, EmailRegex, e.target.value);
    if (userEmail.classList.contains("is-valid")) {
        emailValid = true
    } else {
        emailValid = false
    }
});

userSubject.addEventListener("input", (e)=> {
    addClass(userSubject, SujetRegex, e.target.value);
    if (userSubject.classList.contains("is-valid")) {
        subjectValid = true
    } else {
        subjectValid = false
    }
});

userMessage.addEventListener("input", (e)=> {
    addClass(userMessage, MessageRegex, e.target.value);
    if (userMessage.classList.contains("is-valid")) {
        messageValid = true
    } else {
        messageValid = false
    }
});
