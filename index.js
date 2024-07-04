document.addEventListener('DOMContentLoaded', function() {
    const saldoInicial = 1000;
    let saldoAtual = saldoInicial;

    const operationSelect = document.getElementById('operation');
    const amountInput = document.getElementById('amount');
    const realizarBtn = document.getElementById('realizar-btn');
    const resultParagraph = document.getElementById('result');

    realizarBtn.addEventListener('click', function() {
        const operation = operationSelect.value;
        const amount = parseFloat(amountInput.value);

        try {
            switch (operation) {
                case 'consultar':
                    resultParagraph.textContent = `Seu saldo atual é R$ ${saldoAtual.toFixed(2)}`;
                    break;
                case 'sacar':
                    if (isNaN(amount) || amount <= 0 || amount > saldoAtual) {
                        throw new Error('Valor de saque inválido ou saldo insuficiente.');
                    }
                    saldoAtual -= amount;
                    resultParagraph.textContent = `Saque de R$ ${amount.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldoAtual.toFixed(2)}`;
                    break;
                case 'depositar':
                    if (isNaN(amount) || amount <= 0) {
                        throw new Error('Por favor, insira um valor válido maior que zero para depositar.');
                    }
                    saldoAtual += amount;
                    resultParagraph.textContent = `Depósito de R$ ${amount.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldoAtual.toFixed(2)}`;
                    break;
                default:
                    throw new Error('Operação inválida.');
            }
        } catch (error) {
            resultParagraph.textContent = error.message;
        }

        amountInput.value = ''; // Limpa o campo de valor após a operação
    });

    // Atualiza o texto de resultado ao carregar a página para mostrar o saldo inicial
    resultParagraph.textContent = `Seu saldo atual é R$ ${saldoAtual.toFixed(2)}`;
});
