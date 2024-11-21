document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('check');
    const stateSelect = document.querySelector('select[name="estados"]');
    const genderInputs = document.querySelectorAll('input[name="sexo"]');

    form.addEventListener('submit', function(event) {
        let valid = true; //Atribui um valor booleano a variável "valid"

        document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

        //Limpar as mensagens de erro
        document.querySelectorAll('.error').forEach(el => el.remove());

        if (!emailInput.value) {
            showError(emailInput, "Email é obrigatório");
            valid = false;
        }

        if (!passwordInput.value) {
            showError(passwordInput, "Senha é obrigatória");
            valid = false;
        }

        if (!checkbox.checked) {
            showError(checkbox, "Você deve aceitar os termos");
            valid = false;
        }

        if (stateSelect.value === "Escolher") {
            showError(stateSelect, "Selecione um estado");
            valid = false;
        }

        const genderChecked = Array.from(genderInputs).some(input => input.checked);
        if (!genderChecked) {
            showError(genderInputs[0], "Selecione seu gênero");
            valid = false;
        }


        //Verificar se os dados de cadastro estão corretos
        if(valid == true) {
            window.location.replace = ('/Paginas/login.html');
        }
    });

    function showError(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = message;
        element.parentElement.appendChild(errorDiv);
        errorDiv.style.display = 'block';
    }
});