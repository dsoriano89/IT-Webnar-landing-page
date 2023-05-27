const form = document.querySelector("#form")
const inputName = document.querySelector("#name")
const inputLastname = document.querySelector("#lastname")
const inputEmail = document.querySelector("#email")
const inputSubmit = document.querySelector("#submit")
console.log(form, inputName, inputLastname, inputEmail, inputSubmit);

form.addEventListener("submit", (event) => {
    if(inputName.value === "") {
        alert("Please fill with your name");
        return
    }
    if(inputLastname.value === "") {
        alert("Please fill with your lastname");
        return
    }
    // if(inputEmail.value === "" || !validEmail(inputEmail.value)) {
    //     alert("Please enter your email");
    //     return
    // }
    if(inputEmail.value === "") {
        alert("Please enter your email");
        return
    }


    form.submit();
})
// function validEmail(email) {
//     const emailRegex = new RegExp(
//         /^[a-ZA-Z0-9._-]+@[a-ZA-Z0-9._-]+\.[a-zA-Z]{2,}$/
//     );
//     if(emailRegex.test(email)) {
//         return true
//     }
//     return false;
// }

// if(!validPassword(passwordInput.value, 8)) {
    //     alert("Password must be at least 8 digits")
    // }
// function validPassword( password, minDigits) {
//     if(password.length >= minDigits) {
//         return true
//     }
//     return false
// }
