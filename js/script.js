
    let exibir = document.getElementById('numberList');
    let resultado = [];
    function imparOuPar (parametro){
        let resto = parametro % 2 ;
        if (resto == 0){
            resultado.push(parametro)
        }
        else{
            return
        }
}
   
    document.querySelector('button').addEventListener('click', ()=>{
    resultado =[''];
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
        
    exibir.innerHTML=resultado.join(',')
    
}
})