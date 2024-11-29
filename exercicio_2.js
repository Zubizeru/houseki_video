/* Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alert, considere que o 
usuário não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra. */
function principal2() {
    const quantidadeNotas = 4;
    const notas = lerNotas(quantidadeNotas);
    const media = calcularMedia(notas);
    exibirNotaseMedia(notas, media);
}

function lerNotas(quantidade) {
    let notas = [];
    for (let i = 0; i < quantidade; i++) {
        let nota;
        let entrada;
        do {
            entrada = prompt(`Informe a ${i + 1}ª nota:`).trim();
            if (entrada === "") {
                alert("Espaço em branco. Por favor, digite uma nota válida.");
            } else {
                nota = parseFloat(entrada);
                if (isNaN(nota)) {
                    alert("Número inválido. Por favor, digite uma nota válida.");
                }
            }
        } while (entrada === "" || isNaN(nota));
        notas.push(nota);
    }
    return notas;
}

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function exibirNotaseMedia(notas, media) {
    let mensagem = "Notas: ";

    for (let i = 0; i < notas.length; i++) {
        mensagem += `${i + 1}ª nota: ${notas[i].toFixed(2)}`;
        if (i === notas.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }
    mensagem += `\nMédia: ${media.toFixed(2)}`;
    alert(mensagem);
}