function calcularJurosComposto() {
    var capital = parseFloat(document.getElementById('valorInicialComposto').value);
    var aporteMensal = parseFloat(document.getElementById('aporteMensal').value);
    var taxaJurosAnual = parseFloat(document.getElementById('taxaJurosComposto').value) / 100;
    var tempoAnos = parseInt(document.getElementById('tempoAnosComposto').value);

    var meses = tempoAnos * 12;
    var total = capital;
    var deposito = 0;

    var taxaJurosMensal = Math.pow(1 + taxaJurosAnual, 1 / 12) - 1;

    for (var i = 1; i <= meses; i++) {
        deposito += aporteMensal;
        total += total * taxaJurosMensal;
        total += aporteMensal;
    }

    deposito += capital;
    var jurosCompostos = total - deposito;

    document.getElementById('resultadoInvestido').textContent = 'Total Investido: R$ ' + deposito.toFixed(2).replace('.', ',');
    document.getElementById('resultadoJurosComposto').textContent = 'Total em Juros: R$ ' + jurosCompostos.toFixed(2).replace('.', ',');
    document.getElementById('resultadoMontanteComposto').textContent = 'Montante Total: R$ ' + total.toFixed(2).replace('.', ',');
}

function limparCamposComposto() {
    document.getElementById('valorInicialComposto').value = 0;
    document.getElementById('aporteMensal').value = 0;
    document.getElementById('taxaJurosComposto').value = 0;
    document.getElementById('tempoAnosComposto').value = 1;
    document.getElementById('resultadoInvestido').textContent = 'Total Investido: R$ 0.00';
    document.getElementById('resultadoJurosComposto').textContent = 'Total em Juros: R$ 0.00';
    document.getElementById('resultadoMontanteComposto').textContent = 'Montante Total: R$ 0.00';
}