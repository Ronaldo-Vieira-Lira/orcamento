const voltarBtn = document.getElementById("btn-voltar").addEventListener('click', (e) => {
    window.location.href = "../router/principal.html";
})

const redirecionarBtn = document.getElementById("redirecionar").addEventListener('click', (e) => {
    if (localStorage.length === 0) {
        window.alert("Não existe produtos para serem cotados!");
    } else {
        window.location.href = "../router/folhaImpressao.html";
    }
})

const myForm = document.getElementById('formulario');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const servico = event.target.servico.value;
    const valorUnitario = event.target.valorUnitario.valueAsNumber;
    const quantidade = event.target.quantidade.valueAsNumber;
    let valorTotal = valorUnitario * quantidade;

    // recupera a array do localStorage, ou cria uma nova se ela ainda não existe
    let orcamento = JSON.parse(localStorage.getItem('orcamento')) || [];

    orcamento.push({ servico, quantidade, valorUnitario, valorTotal }); // adiciona o novo serviço à array

    localStorage.setItem('orcamento', JSON.stringify(orcamento)); // armazena a array atualizada no localStorage

    event.target.reset(); // limpa os campos do formulário
    location.reload();
});


const tabelaServicos = document.getElementById('servicosTableBody');

// Recupera a array de serviços do localStorage
const orcamentoRecupecao = JSON.parse(localStorage.getItem('orcamento')) || [];

function formatarCifrao(valor) {
    let valorFormatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });
    return valorFormatado
}

// Exibe os dados da array na tabela HTML
orcamentoRecupecao.forEach((servico) => {
    const row = document.createElement('tr');
    const coluna01 = document.createElement('td');
    const coluna02 = document.createElement('td');
    const coluna03 = document.createElement('td');
    const coluna04 = document.createElement('td');

    coluna01.textContent = servico.servico;
    coluna02.textContent = servico.quantidade;
    coluna03.textContent = formatarCifrao(servico.valorUnitario);
    coluna04.textContent = formatarCifrao(servico.valorTotal);

    row.appendChild(coluna01);
    row.appendChild(coluna02);
    row.appendChild(coluna03);
    row.appendChild(coluna04);

    tabelaServicos.appendChild(row);
});
