// Password and Confirmed passwords validation
let pwd = document.getElementById('password');
let confirmPwd = document.getElementById('confirm-password')
let matchingTxt = document.querySelector('.matching-txt')
let form = document.querySelector('.form')
console.log(form);

function comparePwd() {
    if (confirmPwd.value) {
    if (pwd.value != confirmPwd.value) {
       matchingTxt.style.display = 'block'
       matchingTxt.style.color = 'red'
       matchingTxt.innerHTML = 'Not Matching'
       return false
       e.preventDefault()

    } else {
        matchingTxt.style.display = 'block'
        matchingTxt.style.color = 'green'
        matchingTxt.innerHTML = 'Matching'
    }
} else {
    matchingTxt.style.display = 'none'
}
}