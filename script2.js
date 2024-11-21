function contar() {
    var res = document.getElementById("res");
    var ini = Number(document.getElementById("tini").value);
    var fim = Number(document.getElementById("tfim").value);
    var passo = Number(document.getElementById("tpass").value);

    // Verifica se o passo é 0 ou negativo
    if (passo <= 0) {
        window.alert("Passo inválido! Considerando passo 1");
        passo = 1; // Define um passo padrão de 1
    }

    // Limpa o conteúdo de 'res' para a nova contagem
    res.innerHTML = "Contando: <br>";

    // Executa a contagem
    if (ini < fim) {
        // Contagem crescente
        for (var i = ini; i <= fim; i += passo) {
            res.innerHTML += `${i} 🏃‍♂️‍➡️ `;
        }
    } else {
        // Contagem regressiva
        for (var i = ini; i >= fim; i -= passo) {
            res.innerHTML += `${i} 🏃‍♂️‍➡️ `;
        }
    }
    res.innerHTML += "🏁";
}
