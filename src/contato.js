function validarFormulario() {
    var nome = document.getElementById('nome').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var cep=document.getElementById()
    var regexLetras = /^[a-zA-Z\s]+$/;
    var regexNumeros = /^[0-9]+$/;
    var camposValidos = true;

    // Verificar se o campo de nome contém números
    if (!regexLetras.test(nome)) {
        document.getElementById('erroNome').innerText = "Por favor, digite apenas letras.";
        camposValidos = false;
    } else {
        document.getElementById('erroNome').innerText = "";
    }

    // Verificar se o campo de telefone contém letras
    if (!regexNumeros.test(telefone)) {
        document.getElementById('erroTelefone').innerText = "Por favor, digite apenas números.";
        camposValidos = false;
    } else {
        document.getElementById('erroTelefone').innerText = "";
    }

    // Adicionar borda verde aos campos preenchidos corretamente e vermelho caso nao estesjam todos preenchidos
    var campos = document.querySelectorAll('.formulario input, .formulario textarea');
    campos.forEach(function(campo) {
        if (campo.value.trim() !== "") {
            campo.style.border = "1px solid green";
        } else {
            campo.style.border = "1px solid red";
            camposValidos = false;
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
