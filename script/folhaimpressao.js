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
    coluna03.textContent = servico01.valorUnitario;
    coluna04.textContent = servico01.valorTotal;

    linha.appendChild(coluna01);
    linha.appendChild(coluna02).classList.add("alinhado");
    linha.appendChild(coluna03).classList.add("alinhado");
    linha.appendChild(coluna04).classList.add("alinhado");
    
    tabelaOrcamento.appendChild(linha);

    valores = [];
    valores.push(parseFloat(servico01.valorTotal))
});
console.log(valores)

//Comando para realizar impressão da pagina
const imprimir = () => {
    window.print()
}

