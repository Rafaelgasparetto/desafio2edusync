//                                                   //VARIAVEIS DO PERFIL\\
var nome = "";
var ultraConservador = 0; var conservador = 0; var dinamico = 0; var arrojado = 0; var ultraConservador2 = 0; var conservador2 = 0; var dinamico2 = 0; var arrojado2 = 0;
//                                                  //VARIAVEIS DO INVESTIMENTO\\
var respostaPerfil = ""; var investidor =""; var jurosSimplesBruto = 0; var jurosSimples = 0; var jurosCompostoBruto = 0; var jurosComposto = 0; var rendimentoPorcentagem;

const simuladorDeInvestimento = 
    {
        nome: "",
        sexo: '',
        idade: 0,
        rendaMensal: 0,
        perfilDeInvestidor: '',
        sugestaoDeInvestimento: 0,
    }
const simulacao_de_investimento = 
    {
        lucroPossivel_simples: 0,
        lucroPossivel_composto: 0,
    }
//                                                  //FUNCTION DE CADASTRO\\
const cadastro = () => {
    simuladorDeInvestimento.nome = validarNome();
    simuladorDeInvestimento.sexo = atribuirSexo();
    simuladorDeInvestimento.idade = validarIdade();
    simuladorDeInvestimento.rendaMensal = validarRendaMensal();
    selecionarPerfil();
    simuladorDeInvestimento.sugestaoDeInvestimento = investir();
    simuladorDeInvestimento.perfilDeInvestidor = respostaPerfil;
    simulacao_de_investimento.lucroPossivel_simples = jurosSimplesBruto;
    simulacao_de_investimento.lucroPossivel_composto = jurosCompostoBruto;
}
//                                                 //VALIDAÇÃO DO NOME\\ 
const validarNome = () => {
    for (let a = 1; a <= 1; a++) {
        nome = (prompt("digite o teu nome"));
        if (nome == "" || nome == Number(nome) || nome == null) {
            window.alert("Digite um nome valido");
            a--;
        } else nome = nome;
    }  
    return nome;
}
//                                                //ATRIBUIÇÃO DO SEXO\\ 
        const atribuirSexo = () => {
            var sexo = (prompt("Qual é seu sexo?"));
            switch (sexo) {
                case 'm': case 'masculino': sexo = 'Masculino'; break;
                case 'f': case 'feminino': sexo = 'Feminino';  break;
                default: sexo = ""; window.alert("Opção invalida, Digite novamente! Masculino ou Feminino"); break;
            } // Validação do sexo \/
            if (sexo == "") { window.alert("Digite Masculino ou Feminino"); atribuirSexo(sexo);}
            return sexo;
        }
//                                               //VALIDAÇÃO DA IDADE!\\
                const validarIdade = () => {
                    for (let c = 1; c <= 1; c++) {
                        var idade = Number(prompt("Qual é a Tua idade?"));
                        if (isNaN(idade) || idade < 16) { window.alert("Digite uma idade Valida!"); c--; } else idade = idade;
                    }
                    return idade;
                }
//                                               //VALIDAÇÃO DA RENDA MENSAL\\
        const validarRendaMensal = () => {
            for (let i = 1; i <= 1; i++) {
                var rendaMensal = Number(prompt("Qual é a tua renda mensal?"));
                if (isNaN(rendaMensal) || rendaMensal <= 0) {
                    window.alert("Digite uma Renda Mensal Valida")
                    i--;
                } else rendaMensal = rendaMensal;
            }
            return rendaMensal;
        }
//                                                   //SELEÇÃO DO PERFIL\\
    const selecionarPerfil = (resp1, resp2) => {
        var resp1 = Number(prompt(`Responda algumas perguntas para sabermos o seu perfil financeiro:
        Você tem formação na area financeira?
        1: Sim! porem sem experiência!
        2: Sim! e com experiência!
        3: Não! mas tenho experiência!
        4: Não! mas tenho pouca experiência!
        5: Não! e não tenho experiência! `));
//                                               //SWITCH CASE DA PRIMEIRA PERGUNTA\\
        switch (resp1) {
            case 1: conservador = 0.10; dinamico = 0.90; break;
                case 2: dinamico = 0.35; arrojado = 0.65; break;
                    case 3: dinamico = 0.77; arrojado = 0.23; break;
                        case 4: conservador = 0.64; dinamico = 0.36; break;
                            case 5: ultraConservador = 0.75; conservador = 0.25; break;
            default:
                window.alert("Escolha a alternativa que mais te representa de 1 a 5");
                selecionarPerfil();
                break;
        }
        var resp2 = Number(prompt(`Agora responda qual produto mais voce conheçe:
        1: Poupança e deposito a prazo!
        2: Tesouro direto e Renda variavel!
        3: Produtos 1 e 2!
        4: Eu nunca investi, mas conheço alguns produtos!
        5: Eu nunca investi e não conheço nenhum produto!`));
//                                             //SWITCH CASE DA SEGUNDA PERGUNTA\\
    switch (resp2) {
        case 1: ultraConservador2 = 0.60; conservador2 = 0.40; break;
            case 2: dinamico2 = 0.40; arrojado2 = 0.60; break;
                case 3: dinamico2 = 0.22; arrojado2 = 0.78; break;
                    case 4: conservador2 = 0.73; dinamico2 = 0.27; break;
                        case 5: ultraConservador2 = 0.60; conservador2 = 0.40; break;
        default:
            window.alert("Escolha a alternativa que mais te representa de 1 a 5");
            selecionarPerfil();
        break;
    }
        atribuirValorPerfil();
    }
//                                                 //ATRIBUIÇÃO DOS VALORES DO PERFIL\\
const atribuirValorPerfil = () => {
    ultraConservador = ultraConservador + ultraConservador2;
        conservador = conservador + conservador2;
            dinamico = dinamico + dinamico2;
                arrojado = arrojado + arrojado2;
    tirarMediaPerfil();
}
//                                                  //TIRAR A MEDIA DO PERFIL\\
const tirarMediaPerfil = () => {
    ultraConservador = ((ultraConservador / 2) * 100).toFixed(2);
        conservador = ((conservador / 2) * 100).toFixed(2);
            dinamico = ((dinamico / 2) * 100).toFixed(2);
             arrojado = ((arrojado / 2) * 100).toFixed(2);
//                                                //COMPARAR PARA ENCONTRAR O PERFIL DE INVESTIDOR\\
        if (ultraConservador > conservador && ultraConservador > dinamico && ultraConservador > arrojado)
            respostaPerfil = "Ultraconservador";
            else if (conservador > ultraConservador && conservador > dinamico && conservador > arrojado)
                respostaPerfil = "Conservador";
                else if (dinamico > ultraConservador && dinamico > conservador && dinamico > arrojado)
                    respostaPerfil = "Dinamico";
                    else if (arrojado > ultraConservador && arrojado > conservador && arrojado > dinamico)
                        respostaPerfil = "Arrojado";
        else console.log("erro tirar media");
}
//                                              //INVESTIMENTO DE ACORDO COM O PERFIL DO USUARIO\\
    const investir = () => {
//  //VARIAVEIS LOCAL      
    let capital;
    let tempoInvestido;
    let i = 0;
    if ((respostaPerfil == "Ultraconservador") || (respostaPerfil == "Conservador")) {
        i = 0.02; //INFLAÇÃO
        iAtual = 0.01; //INFLAÇÃO ATUAL
        window.alert(`Sugerimos a você Renda fixa`);
        investidor = "Renda Fixa";
//                                                //VALIDAR CAPITAL TESTADO\\
            for (let i = 1; i <= 1; i++) {
                capital = Number(prompt(`Qual é o valor do capital que gostaria de investir?`));
                if (isNaN(capital) || capital <= 0) { window.alert("Digite um capital valido"); i--;} else capital = capital;
            }
//                                                  //VALIDAR MESES TESTADO\\
                    for (let index = 1; index <= 1; index++) {
                        tempoInvestido = parseInt(prompt(`Quantos meses pretende deixar o valor de: ${capital} investido?`));
                        if (isNaN(tempoInvestido) || tempoInvestido <= 0) {
                            window.alert("Erro, Digite a quantidade de meses! ");
                            index--;
                        } else tempoInvestido = tempoInvestido;
                    }
//                                                //CALCULO PARA JUROS SIMPLES\\
        jurosSimplesBruto = capital * i * tempoInvestido;
        jurosSimples = Number(jurosSimplesBruto / capital).toFixed(2); 
        jurosSimples = Number((1+jurosSimples)/(1+iAtual)-1).toFixed(2); // transformando o rendimento bruto para liquido.
//                                                //CALCULO PARA JUROS COMPOSTO\\
        jurosCompostoBruto = (capital * (1 + i)**tempoInvestido).toFixed(2);
        jurosComposto = Number(jurosCompostoBruto / capital).toFixed(2);  
        jurosComposto = Number((1+jurosComposto)/(1+iAtual)-1).toFixed(2); // transformando o rendimento bruto para liquido.
        } else if ((respostaPerfil == "Dinamico") || (respostaPerfil == "Arrojado")) {
//  //VARIAVEIS DE BLOCO \/
        let precoAtual;
        let precoAnterior;
        let quantidadeAcoes;
            window.alert(`Sugerimos a você Renda variavel`);
            investidor = "Renda Variavel";
//                                             //VALIDAÇAO DA VARIAVEL (precoAtual)\\
            for (let index = 1; index <= 1; index++) {
                precoAtual = Number(prompt("Informe o valor da ação!"));
                if (isNaN(precoAtual) || precoAtual <= 0) {
                    window.alert("Erro, Informe um valor valido da ação!");
                    index--;
                } else precoAtual = precoAtual;
            }
//                                           //VALIDAÇÃO DA VARIAVEL (precoAnterior)\\
                    for (let index = 1; index <= 1; index++) {
                        precoAnterior = Number(prompt("Informe o valor que pagou na ação"));
                        if (isNaN(precoAnterior) || precoAnterior <= 0) {
                            window.alert("Erro, Informe um valor valido da ação!");
                            index--;
                        } else precoAnterior = precoAnterior;
                    }
//                                           //VALIDAÇÃO DA VARIAVEL (quantidadeAcoes)\\
                            for (let index = 1; index <= 1; index++) {
                                quantidadeAcoes = Number(prompt("Informe a quantidade de açoes que comprou ou que pretende comprar"));
                            if (isNaN(quantidadeAcoes) || quantidadeAcoes <= 0) {
                            window.alert("Erro, Informe uma quantidade valida de açoes");
                            index--;
                            } else quantidadeAcoes = quantidadeAcoes;
                            }

                    rendimentoPorcentagem = Number((precoAtual / precoAnterior) * 100 - 100).toFixed(2); // Transformando em %
                    lucroPossivel = Number((precoAnterior / precoAtual)*quantidadeAcoes).toFixed(2);

        } else console.log("erro investir");
    }
// CHAMADA DA FUNCTION CADASTRO \\   
cadastro();
//                  //FOI USADO UM ELSE IF NA CAHAMADA PARA SABER QUAL CONSOLE.LOG CHAMAR DEPENDENDO DO PERFIL DE INVESTIDOR\\ 
if(investidor == "Renda Fixa"){
console.log(`Nome: ${simuladorDeInvestimento.nome}
Sexo: ${simuladorDeInvestimento.sexo}
Idade: ${simuladorDeInvestimento.idade}
Renda Mensal: ${simuladorDeInvestimento.rendaMensal}
Perfil do Investidor: ${respostaPerfil}
Sugestão de investimento: ${investidor}

------------Simulação de Investimento-------------

            Com juros Simples:
Lucro Possível (Bruto) : ${jurosSimplesBruto}
Rendimento Possivel (liquido): ${jurosSimples}%

            Com Juros Composto:
Lucro Possível (Bruto): ${jurosCompostoBruto} 
Rendimento Possivel (liquido): ${jurosComposto}%  `);
//                  //CHAMADA PARA O PERFIL DE RENDA VARIAVEL
    }else if(investidor == "Renda Variavel"){
console.log(`Nome: ${simuladorDeInvestimento.nome}
Sexo: ${simuladorDeInvestimento.sexo}
Idade: ${simuladorDeInvestimento.idade}
Renda Mensal: ${simuladorDeInvestimento.rendaMensal}
Perfil do Investidor: ${respostaPerfil}
Sugestão de investimento: ${investidor}
        
------------Simulação de Investimento-------------
        
Você teve um rendimento de: ${rendimentoPorcentagem}%
Lucro Possivel: ${lucroPossivel}`);
}