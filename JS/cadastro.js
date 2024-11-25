document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const estadoSelect = document.querySelector('select[name="estados"]');
    const sexoRadios = document.getElementsByName('sexo');
    const checkbox = document.getElementById('check');
    
    form.addEventListener('submit', function(event) {
        // Previne o envio do formulário para validação
        event.preventDefault();
        
        let valid = true;
        let errorMessage = '';

        // Verificando se o campo de e-mail está preenchido corretamente
        if (!emailInput.value || !validateEmail(emailInput.value)) {
            valid = false;
            errorMessage += 'Por favor, insira um email válido.\n';
        }

        // Verificando se o campo de senha está preenchido
        if (!senhaInput.value) {
            valid = false;
            errorMessage += 'Por favor, insira uma senha.\n';
        }

        // Verificando se o estado foi selecionado
        if (estadoSelect.value === 'Escolher') {
            valid = false;
            errorMessage += 'Por favor, selecione um estado.\n';
        }

        // Verificando se o gênero foi selecionado
        let genderSelected = false;
        for (let i = 0; i < sexoRadios.length; i++) {
            if (sexoRadios[i].checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            valid = false;
            errorMessage += 'Por favor, selecione um gênero.\n';
        }

        // Verificando se o checkbox foi marcado
        if (!checkbox.checked) {
            valid = false;
            errorMessage += 'Você deve aceitar os termos para prosseguir.\n';
        }

        // Se houver erros, mostrar a mensagem
        if (!valid) {
            alert(errorMessage);
        } else {
            // Caso o formulário esteja correto, redirecionar para a página de login
            alert('Cadastro realizado com sucesso!');
            window.location.href = '/Paginas/login.html';  // Aqui você coloca a URL da página de login
        }
    });

    // Função para validar o formato do e-mail
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});