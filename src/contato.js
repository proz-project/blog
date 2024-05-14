
// VALIDAR NOME
function validaNome(nome) {
    var regexLetras = /^[a-zA-Z\s]+$/;
    var regexNumeros = /^[0-9]+$/;
    if (!isNaN(nome.value )|| !regexLetras) {
        nome.style.border = "red solid 3px";
        nome.style.boxShadow = "0px 0px 4px red";

    } else if((regexNumeros )){
        nome.style.border = "red solid 3px";
        nome.style.boxShadow = "0px 0px 4px red";
        document.getElementById('erroNome').innerText = "Por favor, digite apenas letras.";

    }
    else {
        nome.style.border = "green solid 3px";
        nome.style.boxShadow = "0px 0px 4px green";
    }
    document.getElementById("nome").value = document.getElementById("nome").value.toUpperCase();
}

//validando o email digitado pelo usuário *******ok
function validaEmail(email) {

    document.getElementById("email").value;

    if (email.value == "" || email.value.indexOf('@') < 0) {
        email.style.border = "red solid 3px";
        email.style.boxShadow = "0px 0px 4px red";
    } else {
        email.style.border = "green solid 3px";
        email.style.boxShadow = "0px 0px 4px green";
    }

}

//validando cpf digitado pelo usuário *******ok
function validaCPF(cpf) {
    var cpfValue = cpf.value.trim(); // Remover espaços em branco extras

    if (cpfValue.length !== 11) {
        document.getElementById("error").innerText = 'CPF deve conter 11 números';
        cpf.style.border = "red solid 3px";
        cpf.style.boxShadow = "0px 0px 4px red";
    } else {
        cpf.style.border = "green solid 3px";
        cpf.style.boxShadow = "0px 0px 4px green";
        // Remova esta linha se não desejar a formatação automática
        // formatCPF(cpf); // Chama a função para formatar o CPF
    }
}

function formatCPF(cpf) {
    var value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, "$1.$2.$3-$4");
    cpf.value = value;
}

var cpfInput = document.getElementById("cpf");

cpfInput.addEventListener("blur", function() {
    validaCPF(cpfInput);
});

var nome = document.getElementById('nome').value.trim();
var telefone = document.getElementById('telefone').value.trim();
var regexLetras = /^[a-zA-Z\s]+$/;
var regexNumeros = /^[0-9]+$/;
var camposValidos = true;

function validarFormulario() {

    // Verificar se o campo de nome contém números
    if (!regexLetras.test(nome)) {
        document.getElementById('erroNome').innerText = "Por favor, digite apenas letras.";
        camposValidos = false;
    } else {
        document.getElementById('erroNome').innerText = "m";
    }

    // Verificar se o campo de telefone contém letras
    if (!regexNumeros.test(telefone)) {
        document.getElementById('erroTelefone').innerText = "Por favor, digite apenas números.";
        camposValidos = false;
    } else {
        document.getElementById('erroTelefone').innerText = "";
    }

    // Adicionar borda verde aos campos preenchidos corretamente
    var campos = document.querySelectorAll('.formulario input, .formulario textarea');
    campos.forEach(function(campo) {
        if (campo.value.trim() !== "") {
            campo.style.border = "1px solid green";
        } else {
            nome.style.border = "red solid 3px";
            nome.style.boxShadow = "0px 0px 4px red";
    
        }
    });

    // Exibir mensagem de sucesso se todos os campos estiverem preenchidos corretamente
    if (camposValidos) {
        document.getElementById("mensagemSucesso").style.display = "block";
        return false;
    } else {
        return false;
    }
}
