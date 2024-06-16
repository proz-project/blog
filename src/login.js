const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwSchowhide = document.querySelectorAll(".pw_hide");

pwSchowhide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let gettPwInput = icon.parentElement.querySelector("input");
    if (gettPwInput.type === "password") {
      gettPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye")
    }else{
      gettPwInput.type = "password";
      icon.classList.replace("uil-eye-", "uil-eye-slash")

    }
  });
});
