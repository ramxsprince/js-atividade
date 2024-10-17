const btnCadastrar = document.getElementById("Cadastrar");
        btnCadastrar.addEventListener ("click", () => {
        let nome = document.getElementById("nome").value;
        document.getElementById ("li1").innerHTML = "Nome: " +nome;
});

        btnCadastrar.addEventListener ("click", () => {
        let email = document.getElementById("email").value;
        document.getElementById ("li2").innerHTML = "Email:" +email;
});
        btnCadastrar.addEventListener ("click", () => {
        let nasc = document.getElementById("nasc").value;
        document.getElementById ("li3").innerHTML = "Data de Nascimento:" +nasc;
});
