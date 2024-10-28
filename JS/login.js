document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        
        event.preventDefault(); //Não ativa o login caso os campos não estejam preenchidos

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        //Se login e senha está certo, é direcionado para index.html
        if(username == 'admin' && password == '4710' || username == 'user_name@gmail.com' && password == '9820') {
            alert("Bem vindo Administrador do site.");
            location.href = ('/index.html');
        } 
        
        //Se login e senha está errado, é direcionado para login.html
        else {
            alert("Voçe não é o Administrador do site.");
            location.href = ('/Paginas/login.html');
        }
    });
});