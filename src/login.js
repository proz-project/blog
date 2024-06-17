// variaveis
const pwSchowhide = document.querySelectorAll(".pw_hide");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textpassword = document.getElementById("textpassword");

// ocultar e mostrar a senha
pwSchowhide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let gettPwInput = icon.parentElement.querySelector("input");
    if (gettPwInput.type === "password") {
      gettPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      gettPwInput.type = "password";
      icon.classList.replace("uil-eye-", "uil-eye-slash");
    }
  });
});

// para verificar se está vazia os campos e passar a mensagem
form.addEventListener("submit", (e) =>{
  if(email.value== " " && password.value == ""){
    textForm.textContent = "Você precisa preenher todos os campos"
  }else if(validadorEmail(email.value) === true && validadorPassword(password.value) === true){
    console.log(email.value);
    console.log(password.value);
    textForm.textContent = ' ';
    textEmail.textContent = ' ';
    textpassword.textContent = ' ';
  }else{
    console.log("requisição não atendida")

  }
  e.preventDefault()
});

// vERIFICAR DIGITOS
email.addEventListener("keyup", () => {
  if (validadorEmail(email.value) !== true) {
    textEmail.textContent = "exemplo formato com letra minuscula: nome@gmail.com";
  } else {
    textEmail.textContent = " ";
  }
});

password.addEventListener("keyup", () => {
  if (validadorPassword(password.value) !== true) {
    textpassword.textContent =
      "formato da senha deve ter no mínimo 6 caracteres, contendo pelo menos um especial e uma letra em maiúscula";
  } else {
    textpassword.textContent = " ";
  }
});

//função validação do email
function validadorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

//função de validação da senha
function validadorPassword(password) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password);
}
