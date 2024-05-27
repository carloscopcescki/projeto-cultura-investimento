function calcularJuros() {
    var valorInicial = parseFloat(document.getElementById('valorInicial').value);
    var taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
    var tempoAnos = parseInt(document.getElementById('tempoAnos').value);

    var juros = valorInicial * taxaJuros * tempoAnos;
    var montanteSimples = valorInicial + juros;

    document.getElementById('resultadoMontante').textContent = 'Montante Total: R$ ' + montanteSimples.toFixed(2);
    document.getElementById('resultadoJuros').textContent = 'Valor Total de Juros: R$ ' + juros.toFixed(2);
}

function limparCampos() {
    document.getElementById('valorInicial').value = 0;
    document.getElementById('taxaJuros').value = 0;
    document.getElementById('tempoAnos').value = 1;
    document.getElementById('resultadoMontante').textContent = 'Montante Total: R$ 0.00';
    document.getElementById('resultadoJuros').textContent = 'Valor Total de Juros: R$ 0.00';
}