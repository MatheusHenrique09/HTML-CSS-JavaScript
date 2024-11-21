function tabuada() {
    var res = document.getElementById("res");
    var a = Number(document.getElementById("tini").value);
    var B = Number(document.getElementById("tfim").value);
    var tab = Number(document.getElementById("ttab").value);
    
    // Limpa o conteúdo de 'res' para a nova tabuada
    res.innerHTML = "Tabuada:<br>";

    for (let i = a; i <= B; i++) {
        let c = i * tab;
        res.innerHTML += `${i} x ${tab} = ${c}<br>`; // Adiciona cada linha da tabuada
    }
}
