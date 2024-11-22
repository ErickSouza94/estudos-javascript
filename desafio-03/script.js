let userName = prompt("Insira seu nome: ")
let userAltura = parseFloat(prompt("Insira sua altura em cm: "))
let userPeso = parseFloat(prompt("Insira seu peso: "))

altura = (userAltura / 100).toFixed(2)

const imc = (userPeso / (altura * altura)).toFixed(1)


if (imc <= 16) {
    document.write("Seu imc é de: " + imc + ": Baixo peso muito grave");
} else if (imc > 16 && imc <= 16.99) {
    document.write("Seu imc é de: " + imc + ": Baixo peso grave");
} else if (imc >= 17 && imc <= 18.49) {
    document.write("Seu imc é de: " + imc + ": Baixo peso");
} else if (imc >= 18.5 && imc <= 24.99) {
    document.write("Seu imc é de: " + imc + ": Peso normal");
} else if (imc >= 25 && imc <= 29.99) {
    document.write("Seu imc é de: " + imc + ": Sobrepeso");
} else if (imc >= 30 && imc <= 34.99) {
    document.write("Seu imc é de: " + imc + ": Obesidade grau I");
} else if (imc >= 35 && imc <= 39.99) {
    document.write("Seu imc é de: " + imc + ": Obesidade grau II");
} else if (imc >= 40) {
    document.write("Seu imc é de: " + imc + ": Obesidade grau III");
} else {
    document.write("Não foi possível calcular.");
}

// let classificacao = ""

// if (imc <= 16) {
//     classificacao = "Baixo peso muito grave"
// } else if (imc > 16 && imc <= 16.99) {
//     classificacao = "Baixo peso grave";
// } else if (imc >= 17 && imc <= 18.49) {
//     classificacao =  "Baixo peso";
// } else if (imc >= 18.5 && imc <= 24.99) {
//     classificacao =  "Peso normal";
// } else if (imc >= 25 && imc <= 29.99) {
//     classificacao = "Sobrepeso";
// } else if (imc >= 30 && imc <= 34.99) {
//     classificacao =  "Obesidade grau I";
// } else if (imc >= 35 && imc <= 39.99) {
//     classificacao = "Obesidade grau II";
// } else if (imc >= 40) {
//     classificacao =  "Obesidade grau III";
// } else {
//     document.write("Não foi possível calcular.");
// }

// document.write(userName + " Possui índice de massa corporal igual a " + imc + ", sendo classificado como " + classificacao)