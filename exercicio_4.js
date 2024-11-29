function principal4() {
    let nomes = [];
    let salarios = [];
    let continuar = true;

    while (continuar && nomes.length < 50) {
        cadastrarPessoa(nomes, salarios);
        continuar = confirm("Deseja continuar o cadastro? (OK para sim, Cancelar para não)");
    }
    exibirCadastro(nomes, salarios);
}

function cadastrarPessoa(nomes, salarios) {
    let nome = '';
    let salario = 0;

    // Validação do nome
    while (!nome || !/^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)+$/.test(nome)) {
        nome = prompt(`Informe o nome e sobrenome da ${nomes.length + 1}ª pessoa:`).trim();
        if (!nome || !/^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)+$/.test(nome)) {
            alert("Nome inválido. Deve conter pelo menos nome e sobrenome. Use apenas letras e espaços.");
        }
    }
    nome = formatarNome(nome); // Padroniza o nome para "Primeira Letra Maiúscula".

    // Validação do salário sem ponto ou vírgula
    let entrada;
    while (true) {
        entrada = prompt(`Informe o salário da ${nomes.length + 1}ª pessoa:`).trim();
        if (/^\d+(\.\d{1,2})?$/.test(entrada)) {
            salario = parseFloat(entrada);
            if (salario > 0) break; // Salário válido
        }
        alert("Salário inválido. Informe apenas números positivos, sem ponto ou vírgula. Tente novamente.");
    }

    nomes.push(nome);
    salarios.push(salario);
}

function formatarNome(nome) {
    return nome
        .toLowerCase() // Transforma tudo em minúsculas
        .split(" ") // Divide as palavras
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // Primeira letra maiúscula
        .join(" "); // Junta novamente as palavras
}

function exibirCadastro(nomes, salarios) {
    let mensagem = '';
    const descontoINSS = 0.10;
    for (let i = 0; i < nomes.length; i++) {
        let salarioBruto = salarios[i];
        let salarioLiquido = salarioBruto - (salarioBruto * descontoINSS);

        // Formatação para o padrão de moeda R$ (Brasil)
        let salarioBrutoFormatado = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        let salarioLiquidoFormatado = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        mensagem += `<b>Nome</b>: ${nomes[i]}<br>`;
        mensagem += `<b>Salário bruto</b>: ${salarioBrutoFormatado}<br>`;
        mensagem += `<b>Salário líquido</b>: ${salarioLiquidoFormatado}<br><br>`;
    }

    document.write(mensagem);
}

/* Explicação das expressões regulares:
1. /^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)+$/ - Valida nomes:
   - [a-zA-ZÀ-ÿ]: Permite letras com ou sem acento, maiúsculas ou minúsculas.
   - \s: Permite espaços entre palavras (ex.: "João Silva").
   - ^ e $: Garantem que a string completa siga o padrão definido.
   - (\s[a-zA-ZÀ-ÿ]+)+: Exige pelo menos uma palavra adicional após o nome (sobrenome obrigatório).

2. /^\d+(\.\d{1,2})?$/ - Valida salários:
   - \d+: Aceita um ou mais dígitos.
   - (\.\d{1,2})?: Aceita um ponto seguido de até dois dígitos decimais (ex.: "1000.50").
   - ^ e $: Garantem que a string completa siga o padrão definido. */