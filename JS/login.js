document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        //Se login e senha está certo, é direcionado para index.html
        if(username == 'admin' && password == '4710') {
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