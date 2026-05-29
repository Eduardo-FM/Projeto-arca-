const formulario      = document.getElementById('formCrudEcoponto');
const corpoTabela     = document.querySelector('#tabelaEcopontos tbody');
const campoId         = document.getElementById('ecopontoId');
const campoNome       = document.getElementById('nomePonto');
const campoEndereco   = document.getElementById('enderecoPonto');
const campoCapacidade = document.getElementById('capacidade');
const campoStatus     = document.getElementById('status');

let ecopontos = JSON.parse(localStorage.getItem('ecopontos')) || [];

function salvar() {
    localStorage.setItem('ecopontos', JSON.stringify(ecopontos));
}

function renderizarTabela() {
    corpoTabela.innerHTML = '';

    if (ecopontos.length === 0) {
        corpoTabela.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:30px; color:#888;">Nenhum ecoponto cadastrado.</td></tr>';
        return;
    }

    ecopontos.forEach(eco => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${eco.nome}</td>
            <td>${eco.endereco}</td>
            <td>${eco.capacidade} ton</td>
            <td>
                <span class="status-badge ${eco.status === 'ativo' ? 'status-ativo' : 'status-manutencao'}">
                    ${eco.status === 'ativo' ? '● Ativo' : '⚙ Manutenção'}
                </span>
            </td>
            <td>
                <button class="btn-acao btn-editar"  onclick="editarEcoponto(${eco.id})">✏ Editar</button>
                <button class="btn-acao btn-excluir" onclick="excluirEcoponto(${eco.id})">🗑 Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(linha);
    });
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const id = campoId.value;

    if (id) {
        const indice = ecopontos.findIndex(eco => eco.id == id);
        ecopontos[indice] = { id: Number(id), nome: campoNome.value, endereco: campoEndereco.value, capacidade: campoCapacidade.value, status: campoStatus.value };
    } else {
        ecopontos.push({ id: Date.now(), nome: campoNome.value, endereco: campoEndereco.value, capacidade: campoCapacidade.value, status: campoStatus.value });
    }

    salvar();
    formulario.reset();
    campoId.value = '';
    renderizarTabela();
});

window.editarEcoponto = function(id) {
    const eco = ecopontos.find(eco => eco.id == id);
    if (!eco) return;

    campoId.value         = eco.id;
    campoNome.value       = eco.nome;
    campoEndereco.value   = eco.endereco;
    campoCapacidade.value = eco.capacidade;
    campoStatus.value     = eco.status;

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.excluirEcoponto = function(id) {
    if (!confirm('Deseja excluir este ecoponto?')) return;

    ecopontos = ecopontos.filter(eco => eco.id != id);
    salvar();
    renderizarTabela();
};

renderizarTabela();
