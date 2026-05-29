// =============================================================================
// PROJETO ARCA — script.js
// Responsável por: validação do formulário de login
// =============================================================================

/**
 * validarLogin(event)
 * 
 * Esta função é chamada quando o usuário clica em "Confirmar" no formulário.
 * Ela recebe o objeto `event` que representa o evento de envio do formulário.
 * 
 * @param {Event} event - Objeto do evento de submit do formulário
 */
function validarLogin(event) {

    // --------------------------------------------------------------
    // PASSO 1: Impedir o comportamento padrão do formulário
    // 
    // Por padrão, ao enviar um <form>, o navegador recarrega a página.
    // `preventDefault()` cancela esse comportamento, permitindo que
    // o JavaScript faça a validação sem recarregar.
    // --------------------------------------------------------------
    event.preventDefault();

    // --------------------------------------------------------------
    // PASSO 2: Capturar os valores digitados pelo usuário
    // 
    // `document.getElementById('id')` seleciona um elemento HTML pelo id.
    // `.value` acessa o texto digitado dentro do <input>.
    // `.trim()` remove espaços em branco do início e do fim da string.
    //   Ex: "  tutor  ".trim() → "tutor"
    // --------------------------------------------------------------
    const usuario = document.getElementById('usuario').value.trim();
    const senha   = document.getElementById('senha').value.trim();

    // --------------------------------------------------------------
    // PASSO 3: Verificar as credenciais e redirecionar
    // 
    // Usamos `if / else if / else` para testar cada combinação válida
    // de usuário e senha. Dependendo do perfil, o sistema redireciona
    // para uma página diferente.
    // 
    // `window.location.href = 'pagina.html'` é como o JavaScript
    // navega para outra página — como clicar em um link.
    // --------------------------------------------------------------

    if (usuario === 'tutor' && senha === '123456') {
        // Perfil: Tutor
        window.location.href = 'tutor_apresentacao.html';

    } else if (usuario === 'candidato' && senha === 'cand!098') {
        // Perfil: Candidato/Cidadão
        window.location.href = 'candidato_apresentacao.html';

    } else if (usuario === 'Ong' && senha === 'ong$-135') {
        // Perfil: ONG Parceira
        window.location.href = 'ong_apresentacao.html';

    } else if (usuario === 'prefeitura' && senha === 'pref@456') {
        // Perfil: Prefeitura
        window.location.href = 'prefeitura_apresentacao.html';

    } else {
        // --------------------------------------------------------------
        // PASSO 4: Exibir mensagem de erro se as credenciais forem erradas
        // 
        // `alert()` exibe uma caixa de mensagem simples no navegador.
        // Em projetos reais, é melhor mostrar o erro dentro da própria
        // página (um elemento HTML com mensagem de erro), mas para fins
        // didáticos, alert() funciona bem.
        // --------------------------------------------------------------
        alert('❌ Usuário ou senha inválidos!\nVerifique suas credenciais e tente novamente.');
    }
}

// =============================================================================
// CONTAS DE ACESSO PARA TESTES (só use isso em protótipos, nunca em produção!)
// 
// Perfil        | Usuário    | Senha
// --------------|------------|----------
// Tutor         | tutor      | 123456
// Candidato     | candidato  | cand!098
// ONG           | Ong        | ong$-135
// Prefeitura    | prefeitura | pref@456
// =============================================================================
