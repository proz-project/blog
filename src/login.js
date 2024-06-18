const formContainer = document.querySelector(".form_container")
const BtnCadastro = document.querySelector("#signup")
const loginBtn = document.querySelector("#login")
const OcultarAmostra = document.querySelectorAll(".pw_hide")


BtnCadastro.addEventListener("click", (e)=>{
e.preventDefault();
formContainer.classList.add("active")
console.log(1)
})


loginBtn.addEventListener("click", (e)=>{
e.preventDefault();
console.log(1)
formContainer.classList.remove("active")
})
