
    let exibir = document.getElementById('numberList');
    let resultadoImpar = [];
    let resultadoPar = [];
    function imparOuPar (parametro){
        let resto = parametro % 2 ;
        if (resto == 0){
            resultadoPar.push(parametro)
        }
        else{
            resultadoImpar.push(parametro)
        }
}
   
    document.querySelector('#filterButtonPares').addEventListener('click', ()=>{
    resultadoPar =[];
    let texto = document.querySelector('input').value;
    texto = texto.trim();
    if(texto.includes(' ')){
        alert('invalido! não pode conter espaços.')
        return
    }
    else{
    let partes = texto.split(',');
    for (let index = 0; index < partes.length; index++) {
        let numero = parseInt(partes[index], 10); // Converte para número
        if (isNaN(numero)) {
            alert(`${partes[index]} não é um número válido.`);
            return;
        }
        imparOuPar(numero);
    }
        
    exibir.innerHTML=resultadoPar.join(',')
    
}
})

document.querySelector('#filterButtonImpares').addEventListener('click', ()=>{
    resultadoImpar =[];
    let texto = document.querySelector('input').value;
    texto = texto.trim();
    if(texto.includes(' ')){
        alert('invalido! não pode conter espaços.')
        return
    }
    else{
    let partes = texto.split(',');
    for (let index = 0; index < partes.length; index++) {
        let numero = parseInt(partes[index], 10); // Converte para número
        if (isNaN(numero)) {
            alert(`${partes[index]} não é um número válido.`);
            return;
        }
        imparOuPar(numero);
    }
        
    exibir.innerHTML=resultadoImpar.join(',')
    
}
})