
function validarLogin(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const senha   = document.getElementById('senha').value.trim();
    if (usuario === 'tutor' && senha === '123456') {
    
        window.location.href = 'tutor_apresentacao.html';

    } else if (usuario === 'candidato' && senha === 'cand!098') {
        window.location.href = 'candidato_apresentacao.html';

    } else if (usuario === 'Ong' && senha === 'ong$-135') {
        window.location.href = 'ong_apresentacao.html';

    } else if (usuario === 'prefeitura' && senha === 'pref@456') {
        window.location.href = 'prefeitura_apresentacao.html';

    } else {
       
        alert('❌ Usuário ou senha inválidos!\nVerifique suas credenciais e tente novamente.');
    }
}


