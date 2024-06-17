// variaveis
const pwSchowhide = document.querySelectorAll(".pw_hide");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordTeste = document.getElementById("password-test");
const form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textpassword = document.getElementById("textPassword");
let textpasswordTeste = document.getElementById("textpassword-test");
const campos = document.querySelectorAll(".required");
const small = document.querySelectorAll(".small-required");
// ocultar e mostrar a senha
pwSchowhide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let gettPwInput = icon.parentElement.querySelector("input");
    if (gettPwInput.type === "password") {
      gettPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      gettPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

// para verificar se está vazia os campos e passar a mensagem
form.addEventListener("submit", (e) => {
  if (email.value == " " && password.value == "") {
    textForm.textContent = "Você precisa preencher todos os campos";
  } else if (
    (validadorEmail(email.value) === true &&
    validadorPassword(password.value) === true)
  ) {
    console.log(email.value);
    console.log(password.value);
    textForm.textContent = " ";
    textEmail.textContent = " ";
    textpassword.textContent = " ";
    textpasswordTeste.textContent = " ";
    alert("Cadastro com sucesso!")
  } else {
    console.log("Requisição não atendida");
  }
  e.preventDefault();
});

// vERIFICAR DIGITOS no email
email.addEventListener("keyup", () => {
  if (validadorEmail(email.value) !== true) {
    textEmail.textContent =
      "Exemplo formato com letra minúscula: nome@gmail.com";
    setError(0);
  } else {
    textEmail.textContent = " ";
    removeError(0);
  }
});

// VERIFIANDO A SENHA principal DIGITO POR DIGITO
password.addEventListener("keyup", () => {
  if (validadorPassword(password.value) !== true) {
    textpassword.textContent =
      "Formato da senha deve ter no mínimo 6 caracteres, contendo pelo menos um caracter especial.";
    setError(1);
  } else {
    textpassword.textContent = " ";
    removeError(1);
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

//função de comparação
function CompararValores() {
  if (passwordTeste.value.length < 6) {
    setError(2);
    textpasswordTeste.textContent =
    "Senha abaixo do limite de caracteres que é 6.";
  } else {
    removeError(2);
    textpasswordTeste.textContent =
    "";
    comparar();
  }
}

// comparar
function comparar() {
  if (campos[1].value === campos[2].value && campos[2].value.length >= 6) {
    removeError(2);
  } else {
    mensagemErro();
    setError(2);
  }
}

//função para aplicar cor na borda
function setError(index) {
  campos[index].style.border = " 1px solid #e63636";
}

function removeError(index) {
  campos[index].style.border = "";
}

function mensagemErro(){
  textpasswordTeste.textContent =
    "Senha incorreta.";
}