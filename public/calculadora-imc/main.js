const pesoInp = document.querySelector(".peso");
const alturaInp = document.querySelector(".altura");
const btnCalcular = document.querySelector(".btn-calcular");
const resultado = document.querySelector(".resultado");
const fraseIMC = document.querySelector(".avaliacao-imc");

function calcularIMC(event){
    event.preventDefault();

    const peso = Number(pesoInp.value);
    const altura = Number(alturaInp.value);

    if(peso == "" || peso == 0){
        alert("Preencha os valores do PESO!")
    }

    if(altura == "" || altura == 0){
        alert("Preencha os valores da ALTURA!")
    }

    const IMC = peso / (altura * altura);

    if(IMC < 18.5){
        fraseIMC.textContent = "Abaixo do peso";
    } else if(IMC >= 18.5 && IMC <= 24.9){
        fraseIMC.textContent = "Peso ideal";
    } else {
        fraseIMC.textContent = "Acima do peso";
    }

    resultado.textContent = IMC;
}

btnCalcular.addEventListener("click",calcularIMC);