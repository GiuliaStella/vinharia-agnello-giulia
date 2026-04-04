
  var botao = document.getElementById("meuBotao");
  botao.addEventListener("click", function() {
    var Nome = prompt('Digite seu nome: ');
    var Sobrenome = prompt('Digite seu sobrenome: ');
    var Email = prompt('Digite seu email: ');
        if (Email === null || Email.trim() === '') {
            alert('Email não inserido, favor colocar um email válido.');
            return;
        } else if (!Email.includes('@') || !Email.includes('.')) {
            alert('Email inválido, favor colocar um email válido.');
            return;
        } else {
            alert("Cadastro realizado com sucesso! Bem-vindo," + Nome + "!");
        }
    
  });




