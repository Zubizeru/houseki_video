/* Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, e após verificar 
quantas vogais foram lidas e mostre somente consoantes no alert. */
function principal3() {
    const quantidadeLetras = 10;
    const letras = lerLetras(quantidadeLetras);
    const consoantes = separarConsoantes(letras);
    const vogais = separarVogais(letras);
    exibirSeparacao(consoantes, vogais);
}

function lerLetras(quantidade) {
    let letras = [];

    for (let i = 0; i < quantidade; i++) {
        let letra;
        do {
            letra = prompt(`Informe a ${i + 1}ª letra (somente uma letra de A a Z):`).toUpperCase().trim();
            /* / e /: Estes são os delimitadores que definem o início e o fim da expressão regular.
            ^: Este é um ancorador que indica o início da string deve ser verificado.
            [A-Z]: Este é um conjunto de caracteres.
            $: Este é outro ancorador, mas indica o fim da string deve ser verificado.
            .test(): É uma função disponível em objetos de expressão regular em JavaScript. 
            Ele é usado para verificar se uma string corresponde ao padrão definido pelo regex. */
            if (letra == "") {
                alert("Espaço em branco. Por favor, digite uma única letra de A a Z.");
            } else if (letra.length !== 1 || !/^[A-Z]$/.test(letra)) {
                alert("Entrada inválida. Por favor, digite uma única letra de A a Z.");
            } else {
                letras.push(letra);
                break;
            }
        } while (true);
    }

    return letras;
}

function separarConsoantes(letras) {
    let consoantes = [];

    for (let i = 0; i < letras.length; i++) {
        let letra = letras[i];
        if (letra !== "A" &&
            letra !== "E" &&
            letra !== "I" &&
            letra !== "O" &&
            letra !== "U") {
            consoantes.push(letra);
        }
    }

    return consoantes;
}

function separarVogais(letras) {
    let vogais = [];

    for (let i = 0; i < letras.length; i++) {
        let letra = letras[i];
        if (letra === "A" ||
            letra === "E" ||
            letra === "I" ||
            letra === "O" ||
            letra === "U") {
            vogais.push(letra);
        }
    }

    return vogais;
}

function exibirSeparacao(consoantes, vogais) {
    let mensagem = `Algoritmo de dez letras:\nForam lidas ${vogais.length} vogais!\n`;

    for (let i = 0; i < consoantes.length; i++) {
        mensagem += consoantes[i];
        if (i === consoantes.length - 1) {
            mensagem += ".";
        } else if (i === consoantes.length - 2) {
            mensagem += " e ";
        } else {
            mensagem += ", ";
        }
    }

    mensagem += ` são as consoantes do algoritmo (${consoantes.length} consoantes).`;
    alert(mensagem);
}