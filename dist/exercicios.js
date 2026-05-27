"use strict";
/******************************************************************************
 * Curso:      Tecnologia em Análise e Desenvolvimento de Sistemas
 * Disciplina: Programação Front-End
 * Professor:  José Carlos Flores
 * Turma:      ADS3A
 * Componentes:
 *   Vanessa Cristina de Souza         - 5356515-2
 *   Eduardo Cicaida Antunes Francisco - 24062217-2
 *   Leonardo Luca Lopes               - 25000009-2
 *   Luan Hauer Silva                  - 25029143-2
 *   Bruno dos Santos Rodrigues        - 24297616-2
 *   Kaio Eduardo                      - 25127228-2
 *   Gabriel Saras Pereira             - 25058772-2
 *   Stefany Mario Moreira             - 25270134-2
 * Data entrega:26  de Maio de 2026
 * Descritivo: Arquivo principal com menu solicitado pelo prof e os 18 exercícios de
 *  TypeScript.
 ******************************************************************************/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * COMO ESTE PROGRAMA FUNCIONA (resumo simples):
 * ─────────────────────────────────────────────
 * 1. O programa mostra um menu no terminal com 18 opções.
 * 2. O usuário digita um número e o exercício correspondente é executado.
 * 3. Ao terminar, o programa pergunta se quer continuar ou sair.
 * 4. Todos os exercícios estão dentro de uma única classe chamada "Exercicios".
 *
 * Para rodar:
 *   npx ts-node src/exercicios.ts
 * ─────────────────────────────────────────────
 */
const readline = __importStar(require("readline"));
// ─── Configuração da leitura do terminal ──────────────────────────────────────
// Cria a interface que permite ler o que o usuário digita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/**
 * Faz uma pergunta no terminal e espera o usuário responder.
 * O "await" pausa o programa até o Enter ser pressionado.
 */
function perguntar(mensagem) {
    return new Promise((resolve) => rl.question(mensagem, resolve));
}
/**
 * Faz a mesma coisa que "perguntar", mas converte a resposta para número.
 * Fica repetindo a pergunta enquanto o usuário não digitar um número válido.
 */
async function lerNumero(mensagem) {
    while (true) {
        const entrada = await perguntar(mensagem);
        const valor = parseFloat(entrada);
        if (!isNaN(valor))
            return valor;
        console.log("  ⚠  Valor inválido! Por favor, digite um número.");
    }
}
/**
 * Pausa o programa e mostra "Pressione Enter para voltar ao menu..."
 * Só continua quando o usuário pressionar Enter.
 */
async function pausar() {
    await perguntar("\nPressione Enter para voltar ao menu...");
}
// ─── Classe com todos os exercícios ──────────────────────────────────────────
/**
 * Classe "Exercicios" — cada método aqui dentro é um exercício (conversado com o prof dessa maneira seria mais simples de chamar cada exercício).
 * Usamos "static" para não precisar criar um objeto da classe para chamar.
 * Basta escrever: Exercicios.ex01()
 */
class Exercicios {
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 01 — Soma de dois números
    // Responsável: Vanessa Cristina de Souza
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Recebe dois números digitados pelo usuário e mostra a soma.
     * Usa uma classe interna "SomaNumeros" com um método calcularSoma().
     */
    static async ex01() {
        console.log("\n=== EXERCÍCIO 01 — Soma de dois números ===\n");
        // Classe responsável por guardar os números e calcular a soma
        class SomaNumeros {
            constructor(numero1, numero2) {
                this.numero1 = numero1;
                this.numero2 = numero2;
            }
            // Método que faz a soma e mostra o resultado
            calcularSoma() {
                let soma = this.numero1 + this.numero2;
                console.log("\n--- Resultado ---");
                console.log(`A soma de ${this.numero1} + ${this.numero2} é: ${soma}`);
            }
        }
        const n1 = await lerNumero("Digite o primeiro número: ");
        const n2 = await lerNumero("Digite o segundo número: ");
        const operacao = new SomaNumeros(n1, n2);
        operacao.calcularSoma();
        /*
         * REFLEXÃO (Vanessa):
         * Foi bem tranquilo! A parte mais nova foi entender como o TypeScript
         * exige que a gente declare o tipo das variáveis (number, string, etc).
         * No começo parece chato, mas depois faz sentido — evita muitos erros.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 02 — Par ou Ímpar
    // Responsável: Gabriel
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Lê um número inteiro e verifica se é par ou ímpar.
     * O operador % retorna o resto da divisão.
     * Se o resto de dividir por 2 for 0, o número é par.
     */
    static async ex02() {
        console.log("\n=== EXERCÍCIO 02 — Par ou Ímpar ===\n");
        const numero = await lerNumero("Digite um número inteiro: ");
        // % é o operador de módulo (resto da divisão)
        if (numero % 2 === 0) {
            console.log(`\nO número ${numero} é PAR.`);
        }
        else {
            console.log(`\nO número ${numero} é ÍMPAR.`);
        }
        /*
         * REFLEXÃO (Gabriel):
         * Bem simples! O operador % foi a parte chave. O mais difícil foi
         * adaptar o código para funcionar dentro do menu sem usar readline
         * separado — mas com a função lerNumero() ficou fácil.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 03 — Média de três notas
    // Responsável: Stefani
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Pede três notas, calcula a média e mostra se o aluno foi
     * aprovado, está em recuperação ou reprovado.
     */
    static async ex03() {
        console.log("\n=== EXERCÍCIO 03 — Média de três notas ===\n");
        const n1 = await lerNumero("Digite a nota 1: ");
        const n2 = await lerNumero("Digite a nota 2: ");
        const n3 = await lerNumero("Digite a nota 3: ");
        // Fórmula da média simples: soma dividida pela quantidade
        const media = (n1 + n2 + n3) / 3;
        // Define a situação do aluno com base na média
        let situacao = "";
        if (media >= 7) {
            situacao = "✔ Aprovado";
        }
        else if (media >= 5) {
            situacao = "⚠ Recuperação";
        }
        else {
            situacao = "✘ Reprovado";
        }
        console.log(`\nMédia final: ${media.toFixed(2)}`);
        console.log(`Situação: ${situacao}`);
        /*
         * REFLEXÃO (Stefani):
         * Fácil de entender! A parte do toFixed(2) foi novidade — serve para
         * mostrar só 2 casas decimais no resultado. Sem isso o número ficava
         * com muitas casas, tipo 6.666666666.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 04 — Celsius para Fahrenheit
    // Responsável: Leonardo Luca Lopes
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Converte uma temperatura de Celsius para Fahrenheit.
     * Fórmula: F = (C × 9/5) + 32
     */
    static async ex04() {
        console.log("\n=== EXERCÍCIO 04 — Celsius para Fahrenheit ===\n");
        const celsius = await lerNumero("Digite a temperatura em Celsius: ");
        // Aplica a fórmula de conversão
        const fahrenheit = (celsius * 9) / 5 + 32;
        console.log(`\n${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
        /*
         * REFLEXÃO (Leonardo):
         * Bem direto ao ponto. A fórmula já estava dada no enunciado,
         * então foi só aplicar. O desafio foi encaixar o readline dentro
         * do sistema de menu sem criar conflito com o rl global.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 05 — Números pares de 1 a 20
    // Responsável: Eduardo Cicaida Antunes Francisco
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Exibe apenas os números pares entre 1 e 20.
     * Usa um laço for e o operador % para verificar se o número é par.
     */
    static async ex05() {
        console.log("\n=== EXERCÍCIO 05 — Números pares de 1 a 20 ===\n");
        // Constante com o limite — fácil de alterar no futuro
        const LIMITE = 20;
        console.log("====================================");
        console.log("      NÚMEROS PARES DE 1 A 20");
        console.log("====================================\n");
        // Percorre de 1 até LIMITE e exibe somente os pares
        for (let numero = 1; numero <= LIMITE; numero++) {
            // Se o resto da divisão por 2 for 0, é par
            if (numero % 2 === 0) {
                console.log(`-> ${numero}`);
            }
        }
        console.log("\n====================================");
        console.log("          FIM DO PROGRAMA");
        console.log("====================================");
        /*
         * REFLEXÃO (Eduardo):
         * Simples e rápido! O laço for com o operador % resolve em poucas
         * linhas. Usar uma constante LIMITE em vez de escrever 20 direto
         * é uma boa prática — fica mais fácil de mudar o valor depois.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 06 — Ler 5 números e armazenar em array
    // Responsável: Luan Hauer Silva
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Lê 5 números do usuário, guarda em um array e exibe todos.
     * Array é como uma lista que pode guardar vários valores.
     */
    static async ex06() {
        console.log("\n=== EXERCÍCIO 06 — Array com 5 números ===\n");
        // Declara um array vazio do tipo number[]
        const numeros = [];
        // Laço que repete 5 vezes para pedir cada número
        for (let i = 1; i <= 5; i++) {
            const n = await lerNumero(`Digite o ${i}º número: `);
            numeros.push(n); // push() adiciona o número ao final do array
        }
        console.log(`\nNúmeros armazenados: [${numeros.join(", ")}]`);
        /*
         * REFLEXÃO (Luan):
         * Foi bem interessante aprender sobre arrays! O .push() para adicionar
         * elementos e o .join() para mostrar tudo separado por vírgula foram
         * os métodos mais úteis aqui.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 07 — Maior número em um array
    // Responsável: Kaio Eduardo
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Lê 5 números, guarda em array e encontra o maior deles.
     * Percorre o array comparando cada elemento com o maior encontrado até agora.
     */
    static async ex07() {
        console.log("\n=== EXERCÍCIO 07 — Maior número no array ===\n");
        const numeros = [];
        for (let i = 1; i <= 5; i++) {
            const n = await lerNumero(`Digite o ${i}º número: `);
            numeros.push(n);
        }
        // Valida se o array não está vazio (boa prática)
        if (numeros.length === 0) {
            console.log("O array está vazio.");
            return;
        }
        // Começa assumindo que o primeiro é o maior
        let maior = numeros[0];
        // Percorre a partir do segundo elemento (índice 1)
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i]; // Atualiza o maior se encontrar um número maior
            }
        }
        console.log(`\nArray: [${numeros.join(", ")}]`);
        console.log(`O maior número é: ${maior}`);
        /*
         * REFLEXÃO (Kaio):
         * O mais interessante foi entender a lógica de comparar o elemento
         * atual com o "maior até agora". No começo parece confuso, mas faz
         * sentido: você começa com o primeiro e vai trocando quando achar
         * algo maior. TypeScript obrigou a usar o "!" para confirmar que o
         * valor não era undefined — aprendi sobre isso aqui.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 08 — Contar vogais em uma string
    // Responsável: Bruno dos Santos Rodrigues
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Lê um texto do usuário e conta quantas vogais existem nele.
     * Percorre cada letra e verifica se está na lista de vogais.
     */
    static async ex08() {
        console.log("\n=== EXERCÍCIO 08 — Contar vogais ===\n");
        const texto = await perguntar("Digite uma frase ou palavra: ");
        let quantidadeVogais = 0;
        // String com todas as vogais (maiúsculas e minúsculas)
        const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕàèìòùÀÈÌÒÙ";
        // Percorre cada letra do texto
        for (let i = 0; i < texto.length; i++) {
            // Verifica se a letra está dentro da string de vogais
            if (vogais.includes(texto[i])) {
                quantidadeVogais++;
            }
        }
        console.log(`\nTexto: "${texto}"`);
        console.log(`Quantidade de vogais: ${quantidadeVogais}`);
        /*
         * REFLEXÃO (Bruno):
         * Foi simples! A sacada foi usar o .includes() para checar se a letra
         * está na lista de vogais. Incluí as vogais com acento também porque
         * em português elas aparecem muito e seria estranho não contar.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 09 — Calculadora simples
    // Responsável: Stefani
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Calculadora com as 4 operações: +, -, *, /
     * Lê dois números e o operador, depois calcula o resultado.
     * Trata erros como divisão por zero e operação inválida.
     */
    static async ex09() {
        console.log("\n=== EXERCÍCIO 09 — Calculadora simples ===\n");
        const a = await lerNumero("Digite o número A: ");
        // Lê o operador e remove espaços em branco com trim()
        const op = (await perguntar("Digite a operação (+, -, *, /): ")).trim();
        const b = await lerNumero("Digite o número B: ");
        // Verifica se a operação digitada é uma das válidas
        if (!["+", "-", "*", "/"].includes(op)) {
            console.log("\nErro: operação inválida. Use +, -, * ou /");
            return;
        }
        // Trata divisão por zero antes de calcular
        if (op === "/" && b === 0) {
            console.log("\nErro: não é possível dividir por zero.");
            return;
        }
        // Objeto que guarda o resultado de cada operação possível
        const resultados = {
            "+": a + b,
            "-": a - b,
            "*": a * b,
            "/": a / b,
        };
        console.log(`\nResultado: ${a} ${op} ${b} = ${resultados[op]}`);
        /*
         * REFLEXÃO (Stefani):
         * A parte mais interessante foi usar o Record<string, number> para
         * guardar os resultados das 4 operações de uma vez. Parece mais
         * organizado do que um switch gigante. A validação de divisão por
         * zero foi importante — sem ela o programa daria "Infinity".
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 10 — Ordenar array em ordem crescente
    // Responsável: Luan Hauer Silva
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Lê 5 números, guarda em array e os ordena do menor para o maior.
     * O método .sort() com a função (a, b) => a - b ordena numericamente.
     */
    static async ex10() {
        console.log("\n=== EXERCÍCIO 10 — Ordenar array em ordem crescente ===\n");
        const numeros = [];
        for (let i = 1; i <= 5; i++) {
            const n = await lerNumero(`Digite o ${i}º número: `);
            numeros.push(n);
        }
        // Cria uma cópia do array original para não alterá-lo
        // [...numeros] é o spread operator — copia todos os elementos
        const ordenado = [...numeros].sort((a, b) => a - b);
        console.log(`\nArray original:  [${numeros.join(", ")}]`);
        console.log(`Array ordenado:  [${ordenado.join(", ")}]`);
        /*
         * REFLEXÃO (Luan):
         * Aprendi que o .sort() padrão do JavaScript não funciona bem com
         * números — ele ordena como texto! Por isso precisa passar a função
         * (a, b) => a - b. Isso foi uma surpresa. O spread operator [...array]
         * para copiar sem alterar o original também foi novo pra mim.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 11 — Classe Pessoa
    // Responsável: Gabriel
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Define uma classe Pessoa com atributos nome e idade
     * e um método para exibir esses dados.
     */
    static async ex11() {
        console.log("\n=== EXERCÍCIO 11 — Classe Pessoa ===\n");
        // Definição da classe Pessoa
        class Pessoa {
            // Construtor: executado quando criamos um objeto com "new Pessoa(...)"
            constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
            }
            // Método que exibe os dados da pessoa no console
            exibirDados() {
                console.log(`\nNome:  ${this.nome}`);
                console.log(`Idade: ${this.idade} anos`);
            }
        }
        const nome = await perguntar("Digite o nome: ");
        const idade = await lerNumero("Digite a idade: ");
        // Instancia (cria) um objeto da classe Pessoa
        const pessoa = new Pessoa(nome, idade);
        pessoa.exibirDados();
        /*
         * REFLEXÃO (Gabriel):
         * Classes são o coração da Orientação a Objetos. A parte mais
         * confusa no começo foi o "this" — ele se refere ao objeto que
         * está sendo criado. Depois que entendi, ficou natural.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 12 — Classe Aluno (herança de Pessoa)
    // Responsável: Bruno dos Santos Rodrigues
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Demonstra herança: Aluno herda tudo de Pessoa e adiciona matrícula.
     * "extends" = herança. "super()" = chama o construtor da classe pai.
     */
    static async ex12() {
        console.log("\n=== EXERCÍCIO 12 — Classe Aluno (herança de Pessoa) ===\n");
        // Classe base (pai)
        class Pessoa {
            constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
            }
            exibirDados() {
                console.log(`Nome:  ${this.nome}`);
                console.log(`Idade: ${this.idade} anos`);
            }
        }
        // Classe filha — herda tudo de Pessoa e adiciona a matrícula
        class Aluno extends Pessoa {
            constructor(nome, idade, matricula) {
                super(nome, idade); // Obrigatório: chama o construtor da classe Pessoa
                this.matricula = matricula;
            }
            // Método que exibe todos os dados, inclusive a matrícula
            exibirAluno() {
                this.exibirDados(); // Reusa o método da classe pai
                console.log(`Matrícula: ${this.matricula}`);
            }
        }
        const nome = await perguntar("Nome do aluno: ");
        const idade = await lerNumero("Idade: ");
        const matricula = await perguntar("Matrícula: ");
        const aluno = new Aluno(nome, idade, matricula);
        console.log("\n--- Dados do Aluno ---");
        aluno.exibirAluno();
        /*
         * REFLEXÃO (Bruno):
         * Herança é poderoso! Não precisei reescrever os atributos nome e
         * idade — eles vieram de graça da classe Pessoa. O "super()" foi
         * a parte mais importante: sem ele o TypeScript nem deixa compilar.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 13 — Interface Veiculo / Classe Carro
    // Responsável: Kaio Eduardo
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Define uma interface Veiculo como "contrato" e a implementa na classe Carro.
     * Interface define QUAIS métodos devem existir, mas não COMO eles funcionam.
     * A classe Carro é obrigada a implementar acelerar() e frear().
     */
    static async ex13() {
        console.log("\n=== EXERCÍCIO 13 — Interface Veículo / Classe Carro ===\n");
        // Classe Carro implementa a interface Veiculo
        class Carro {
            constructor(modelo) {
                this.modelo = modelo;
                this.velocidadeAtual = 0; // Todo carro começa parado
            }
            // Método obrigatório pela interface
            acelerar() {
                this.velocidadeAtual += 20;
                console.log(`[Acelerar] ${this.modelo} → velocidade: ${this.velocidadeAtual} km/h`);
            }
            // Método obrigatório pela interface
            frear() {
                this.velocidadeAtual -= 15;
                if (this.velocidadeAtual < 0)
                    this.velocidadeAtual = 0; // Não pode ser negativo
                console.log(`[Frear]    ${this.modelo} → velocidade: ${this.velocidadeAtual} km/h`);
            }
            // Getter: forma segura de ler um atributo privado
            getModelo() {
                return this.modelo;
            }
        }
        const modelo = await perguntar("Modelo do carro: ");
        const carro = new Carro(modelo);
        console.log(`\nCarro criado: ${carro.getModelo()}`);
        console.log("Simulação:\n");
        carro.acelerar();
        carro.acelerar();
        carro.frear();
        carro.acelerar();
        carro.frear();
        /*
         * REFLEXÃO (Kaio):
         * A diferença entre interface e classe ficou mais clara aqui.
         * A interface é como um contrato: ela diz "quem me implementar TEM que
         * ter esses métodos". O "private" também foi legal — impede que o código
         * de fora mexa na velocidade diretamente, o que faz sentido no mundo real.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 14 — Tabuada
    // Responsável: Vanessa Cristina de Souza
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Solicita um número e exibe sua tabuada de 1 a 10.
     * Usa um laço for para multiplicar de 1 até 10.
     */
    static async ex14() {
        console.log("\n=== EXERCÍCIO 14 — Tabuada ===\n");
        // Classe para organizar a lógica da tabuada
        class Tabuada {
            constructor(numero) {
                this.numero = numero;
            }
            // Método que exibe a tabuada completa
            calcularTabuada() {
                console.log(`\n--- Tabuada do ${this.numero} ---`);
                for (let i = 1; i <= 10; i++) {
                    let resultado = this.numero * i;
                    console.log(`${this.numero} x ${i} = ${resultado}`);
                }
            }
        }
        const num = await lerNumero("Digite um número para ver a tabuada: ");
        const tabuada = new Tabuada(num);
        tabuada.calcularTabuada();
        /*
         * REFLEXÃO (Vanessa):
         * Simples e satisfatório! Ver a tabuada aparecer bonitinho no terminal
         * foi legal. Colocar a lógica dentro de uma classe deixou o código mais
         * organizado, mesmo sendo um exercício simples.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 15 — Calculadora de IMC
    // Responsável: Stefani
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Calcula o IMC (Índice de Massa Corporal) e mostra a classificação.
     * Fórmula: IMC = peso / (altura × altura)
     * Usa um array de faixas para encontrar a classificação correta.
     */
    static async ex15() {
        console.log("\n=== EXERCÍCIO 15 — Calculadora de IMC ===\n");
        // Lista com as faixas de classificação do IMC (padrão OMS)
        const faixas = [
            { max: 18.5, label: "Abaixo do peso" },
            { max: 25.0, label: "Peso normal" },
            { max: 30.0, label: "Sobrepeso" },
            { max: 35.0, label: "Obesidade grau I" },
            { max: 40.0, label: "Obesidade grau II" },
            { max: Infinity, label: "Obesidade grau III" },
        ];
        const peso = await lerNumero("Peso (kg): ");
        const altura = await lerNumero("Altura (m): ");
        // Valida se os valores fazem sentido
        if (peso <= 0 || altura <= 0) {
            console.log("\nErro: peso e altura precisam ser maiores que zero.");
            return;
        }
        // Calcula o IMC com a fórmula
        const imc = peso / (altura * altura);
        // Procura a primeira faixa em que o IMC é menor que o máximo
        const resultado = faixas.find((faixa) => imc < faixa.max);
        console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
        console.log(`Classificação: ${resultado?.label ?? "Não encontrada"}`);
        /*
         * REFLEXÃO (Stefani):
         * Usar o .find() com um array de faixas foi mais elegante do que
         * um monte de if/else. O "?." (optional chaining) foi necessário
         * porque o TypeScript não sabia se o find() ia retornar algo ou
         * undefined — é um detalhe pequeno, mas mostra como a linguagem
         * nos força a pensar nos casos extremos.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 16 — Validar senha
    // Responsável: Eduardo Cicaida Antunes Francisco
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Valida uma senha com base em 4 critérios de segurança.
     * Usa expressões regulares (RegExp) para verificar cada regra.
     * Fica pedindo nova senha enquanto ela for inválida.
     */
    static async ex16() {
        console.log("\n=== EXERCÍCIO 16 — Validar senha ===\n");
        let senhaValida = false;
        // Loop que repete até o usuário digitar uma senha válida
        while (!senhaValida) {
            const senha = await perguntar("Digite uma senha: ");
            // Começa assumindo que é válida e vai checando cada regra
            senhaValida = true;
            // Regra 1: mínimo 8 caracteres
            if (senha.length < 8) {
                console.log("  ✘ A senha deve ter no mínimo 8 caracteres.");
                senhaValida = false;
            }
            // Regra 2: pelo menos uma letra maiúscula
            // /[A-Z]/ é uma expressão regular que procura letras de A a Z maiúsculas
            if (!/[A-Z]/.test(senha)) {
                console.log("  ✘ A senha deve ter pelo menos uma letra maiúscula.");
                senhaValida = false;
            }
            // Regra 3: pelo menos uma letra minúscula
            if (!/[a-z]/.test(senha)) {
                console.log("  ✘ A senha deve ter pelo menos uma letra minúscula.");
                senhaValida = false;
            }
            // Regra 4: pelo menos um número
            if (!/[0-9]/.test(senha)) {
                console.log("  ✘ A senha deve ter pelo menos um número.");
                senhaValida = false;
            }
            if (senhaValida) {
                console.log("\n  ✔ Senha válida!");
            }
            else {
                console.log("\n  Senha inválida! Tente novamente.\n");
            }
        }
        /*
         * REFLEXÃO (Eduardo):
         * Expressões regulares (regex) pareciam mágica no começo, mas depois
         * de entender que /[A-Z]/ significa "qualquer letra entre A e Z", ficou
         * mais claro. O loop while também foi importante — faz o programa ficar
         * pedindo a senha até que esteja correta, como acontece em apps reais.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 17 — Jogo de adivinhação
    // Responsável: Bruno dos Santos Rodrigues
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * O computador sorteia um número de 1 a 100.
     * O usuário tenta adivinhar e recebe dicas "maior" ou "menor".
     * O jogo continua até o usuário acertar.
     */
    static async ex17() {
        console.log("\n=== EXERCÍCIO 17 — Jogo de Adivinhação ===\n");
        // Math.random() gera número entre 0 e 1
        // Multiplicamos por 100 e arredondamos para ter de 1 a 100
        const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;
        console.log("Adivinhe o número entre 1 e 100!\n");
        // Loop infinito — só sai quando o usuário acertar
        while (true) {
            const palpite = await lerNumero("Seu palpite: ");
            tentativas++;
            if (palpite < numeroSecreto) {
                console.log("  ↑ O número é MAIOR!\n");
            }
            else if (palpite > numeroSecreto) {
                console.log("  ↓ O número é MENOR!\n");
            }
            else {
                console.log(`\n🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
                console.log(`O número era: ${numeroSecreto}`);
                break; // Encerra o loop quando acertar
            }
        }
        /*
         * REFLEXÃO (Bruno):
         * Esse foi o exercício mais divertido! O Math.random() para sortear
         * o número foi interessante de entender — ele gera um decimal entre
         * 0 e 1, então precisamos multiplicar e arredondar. O "break" para
         * sair do loop quando o usuário acerta foi a chave do exercício.
         */
    }
    // ══════════════════════════════════════════════════════════════════════════
    // EXERCÍCIO 18 — Contar palavras em uma string
    // Responsável: Leonardo Luca Lopes
    // ══════════════════════════════════════════════════════════════════════════
    /**
     * Lê uma frase e conta quantas palavras existem nela.
     * Usa .split() para dividir a frase nos espaços e conta os pedaços.
     * O /\s+/ trata espaços duplos ou múltiplos como um só separador.
     */
    static async ex18() {
        console.log("\n=== EXERCÍCIO 18 — Contar palavras ===\n");
        const texto = await perguntar("Digite uma frase ou texto: ");
        // Verifica se o texto não está vazio
        if (texto.trim().length === 0) {
            console.log("Erro: por favor, insira um texto válido.");
            return;
        }
        // .trim() remove espaços no início e fim
        // .split(/\s+/) divide onde houver um ou mais espaços
        // .filter() remove partes vazias que possam sobrar
        const palavras = texto.trim().split(/\s+/).filter((p) => p.length > 0);
        console.log(`\nTexto: "${texto}"`);
        console.log(`Total de palavras: ${palavras.length}`);
        console.log(`Palavras: ${palavras.join(", ")}`);
        /*
         * REFLEXÃO (Leonardo):
         * O split() com regex (/\s+/) foi a parte mais nova. Sem o regex,
         * se o usuário digitasse dois espaços entre palavras, o programa
         * contaria um "espaço" como palavra. O trim() + filter() garante
         * que não haverá contagem errada mesmo com textos mal formatados.
         */
    }
} // fim da classe Exercicios
// ─── Menu principal ───────────────────────────────────────────────────────────
/**
 * Exibe o menu com as 18 opções no terminal.
 * Igual ao modelo pedido pelo professor.
 */
function exibirMenu() {
    console.log(`
=== MENU DE EXERCÍCIOS ===
 1  - Soma de dois números
 2  - Verificar par ou ímpar
 3  - Calcular média de três notas
 4  - Converter Celsius para Fahrenheit
 5  - Exibir números pares de 1 a 20
 6  - Ler 5 números e armazenar em array
 7  - Encontrar maior número em um array
 8  - Contar vogais em uma string
 9  - Calculadora simples
 10 - Ordenar array em ordem crescente
 11 - Classe Pessoa
 12 - Classe Aluno
 13 - Classe Carro
 14 - Tabuada
 15 - Calculadora de IMC
 16 - Validar senha
 17 - Jogo de adivinhação
 18 - Contar palavras em uma string
  0 - Sair`);
}
/**
 * Função principal — controla o loop do menu.
 * Fica repetindo até o usuário digitar 0.
 */
async function main() {
    // Mapa que liga cada número ao método do exercício correspondente
    const opcoes = {
        1: Exercicios.ex01,
        2: Exercicios.ex02,
        3: Exercicios.ex03,
        4: Exercicios.ex04,
        5: Exercicios.ex05,
        6: Exercicios.ex06,
        7: Exercicios.ex07,
        8: Exercicios.ex08,
        9: Exercicios.ex09,
        10: Exercicios.ex10,
        11: Exercicios.ex11,
        12: Exercicios.ex12,
        13: Exercicios.ex13,
        14: Exercicios.ex14,
        15: Exercicios.ex15,
        16: Exercicios.ex16,
        17: Exercicios.ex17,
        18: Exercicios.ex18,
    };
    // Loop principal — só sai quando o usuário digitar 0
    while (true) {
        exibirMenu();
        const entrada = await perguntar("\nEscolha uma opção (0-18): ");
        const opcao = parseInt(entrada, 10);
        // Opção 0 encerra o programa
        if (opcao === 0) {
            console.log("\nEncerrando o programa. Até logo! 👋\n");
            rl.close();
            break;
        }
        // Verifica se a opção existe no mapa e executa o exercício
        if (opcoes[opcao]) {
            await opcoes[opcao]();
            await pausar(); // Aguarda Enter antes de voltar ao menu
        }
        else {
            console.log("\n  ⚠  Opção inválida. Digite um número entre 0 e 18.");
            await pausar();
        }
    }
}
// Inicia o programa
main();
//# sourceMappingURL=exercicios.js.map