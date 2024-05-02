const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const alura = document.getElementById('altura');
let textoImc = document.getElementById('textoImc');
const form = document.getElementById('frm')

// peso / altura * 2

if (nome.value == '') {
    nome.focus();
}

frm.addEventListener('submit', function (event) {
    event.preventDefault();
    calculaImc();
})

function calculaImc() {
    if (nome.value == '' || peso.value == '' || altura.value == ''){
        alert('Preencha todos os campos!');
        return;
    }
    if (isNaN(peso.value) || isNaN(altura.value)) { 
        alert('Peso e altura devem ser números');
        return;
    }
    const valorImc = peso.value / (altura.value * altura.value);
    let descricao = '';
    if (valorImc < 18.5) {
        descricao = 'Cuidado! Você está abaixo do peso'
    }
    else if (valorImc >= 18.5 && valorImc <= 24.9) {
        descricao = 'Parabéns! Você está no peso ideal'
    }
    else if (valorImc >= 25 && valorImc < 29.9) {
        descricao = 'Cuidado! Você está acima do peso'
    }
    else if (valorImc >= 30 && valorImc < 39.9) {
        descricao = 'Cuidado! Você está com obesidade grau II'
    }
    else {
        descricao = 'Cuidado! Você está com obesidade grau III'
    }
    textoImc.textContent = `${nome.value} seu IMC é ${valorImc.toFixed(2)}. ${descricao}`
    
}

