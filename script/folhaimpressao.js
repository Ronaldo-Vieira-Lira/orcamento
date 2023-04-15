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

const orcamentoRecupecao = JSON.parse(localStorage.getItem('orcamento')) || [];
const tabelaOrcamento = document.getElementById('tabelaOrcamentoFinal');

orcamentoRecupecao.forEach((servico01) => {
    const linha = document.createElement('tr');
    const coluna01 = document.createElement('td');
    const coluna02 = document.createElement('td')
    const coluna03 = document.createElement('td')
    const coluna04 = document.createElement('td')

    coluna01.textContent = servico01.servico;
    coluna02.textContent = servico01.quantidade;
    coluna03.textContent = formatarCifrao(servico01.valorUnitario);
    coluna04.textContent = formatarCifrao(servico01.valorTotal);


    linha.appendChild(coluna01);
    linha.appendChild(coluna02).classList.add("alinhado");
    linha.appendChild(coluna03).classList.add("alinhado");
    linha.appendChild(coluna04).classList.add("alinhado");

    tabelaOrcamento.appendChild(linha);
});
// Preenchimento do campo de Data

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Janeiro é 0
var ano = dataAtual.getFullYear();
var dataFormatada = dia + " - " + (mes < 9 ? "0" + mes: null)  + " - " + ano;
var dataTitulo = dia + "-" + (mes < 9 ? "0" + mes: null)  + "-" + ano;

document.getElementById("data").innerHTML = dataFormatada;

document.getElementById("titulo").innerHTML = `Orçamento_${dataTitulo}`


// Somador de valor total do orçamento
let total = 0
orcamentoRecupecao.forEach((valores) => {
    total += valores.valorTotal
})
document.getElementById("somatorio").innerHTML = formatarCifrao(total)

//Comando para realizar impressão da pagina

document.getElementById("btn-release").addEventListener("click", () => {
    localStorage.removeItem('orcamento');
    window.location.href = "../router/orcamento.html";
});

document.getElementById("imprimir").addEventListener("click", () => {
    window.print()
});
