/* Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de 
números, considere as premissas abaixo:
• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:
• A lista cadastrada, somente os pares, ou somente os impares. */
function principal5() {
    let numeros = [];
    
    let option = menudeNumeros();
    if (processarCadastro(option, numeros)) {
        return;
    }
    let exibicao = menudeExibicao();
    if (processarExibicao(exibicao, numeros)) {
        return;
    }
}

function menudeNumeros() {
    let opcao;
    let infoMenu = `Informe quantos números você deseja cadastrar:
1. Cinco números.
2. Quinze números.
3. Vinte e cinco números.
4. Cinquenta números.
5. Sair.`;

    do {
        opcao = prompt(infoMenu);
        if (!["1", "2", "3", "4", "5"].includes(opcao)) {
            alert("Opção inválida. Por favor, escolha um número entre 1 e 5.");
        }
    } while (!["1", "2", "3", "4", "5"].includes(opcao));

    return opcao;
}

function processarCadastro(option, numeros) {
    switch (option) {
        case "1":
            lerNumeros(5, numeros);
            break;
        case "2":
            lerNumeros(15, numeros);
            break;
        case "3":
            lerNumeros(25, numeros);
            break;
        case "4":
            lerNumeros(50, numeros);
            break;
        case "5":
            alert("Você escolheu sair do algoritmo.");
            return true;
        default:
            alert("Operação inválida. Por favor, escolha um número entre 1 e 5.");
            principal5();
    }
    return false;
}

function lerNumeros(quantidade, numeros) {
    for (let i = 0; i < quantidade; i++) {
        let numero;
        let entrada;
        do {
            entrada = prompt(`Leitura dos ${quantidade} números.\nInforme o ${i + 1}º número:`).trim();
            
            if (entrada === "") {
                alert("Espaço em branco. Por favor, digite um número.");
            } else {
                numero = parseFloat(entrada);
                if (isNaN(numero)) {
                    alert("Número inválido. Por favor, digite um número válido.");
                } else if (numero < 0) {
                    alert("O número não pode ser negativo. Por favor, digite um número positivo.");
                }
            }
        } while (entrada === "" || isNaN(numero) || numero < 0);
        
        numeros.push(numero);
    }
}

function menudeExibicao() {
    let exibicao;
    let infoMenu = `Informe o que você deseja exibir:
1. Todos os números digitados.
2. Somente os números Pares.
3. Somente os números Ímpares.
4. Mudei de ideia, não quero usar o algoritmo.`;

    do {
        exibicao = prompt(infoMenu);
        if (exibicao !== "1" &&
            exibicao !== "2" &&
            exibicao !== "3" &&
            exibicao !== "4") {
            alert("Opção inválida. Por favor, escolha um número entre 1 e 4.");
        }
    } while (exibicao !== "1" &&
        exibicao !== "2" &&
        exibicao !== "3" &&
        exibicao !== "4");

    return exibicao;
}

function processarExibicao(exibicao, numeros) {
    switch (exibicao) {
        case "1":
            exibirLista(numeros);
            break;
        case "2":
            exibirLista(numeros.filter(num => num % 2 === 0));  // Exibe apenas os pares
            break;
        case "3":
            exibirLista(numeros.filter(num => num % 2 !== 0));  // Exibe apenas os ímpares
            break;
        case "4":
            alert("Você escolheu sair do algoritmo.");
            return true;
        default:
            alert("Operação inválida. Por favor, escolha um número entre 1 e 4.");
            principal5();
    }
    return false;
}

function exibirLista(lista) {
    let mensagem = `Os números que você digitou foram: \n`;
    for (let i = 0; i < lista.length; i++) {
        mensagem += (i < lista.length - 1) ? `${lista[i]}, ` : `${lista[i]}.`;
    }
    alert(mensagem);
}