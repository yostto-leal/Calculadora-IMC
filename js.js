
const calcular = document.getElementById('calcular');

function imc (){
   const nome = document.getElementById('nome').value;
   const altura = document.getElementById('altura').value;
   const peso = document.getElementById('peso').value;
   const resultado = document.getElementById('resultado');

   if (nome !== ''  &&  altura !=='' && peso !==''){

     const valorIMC = (peso/ (altura * altura)).toFixed(1);

     let classificacao="";
       if (valorIMC < 18.5){
           classificacao='Abaixo do peso'
       }else if(valorIMC <25 ){
         classificacao='Com peso ideal. parabéns !!!'
       }else if(valorIMC < 30 ){
         classificacao= 'levemene acima do peso'
       }else if (valorIMC < 35){
         classificacao = 'obesidade moderada, grau I'
       }else if (valorIMC <40){
         classificacao = 'obesidade severa grau II '
       }else{
          classificacao = 'obesidade muita severa , cuidado!!'
       }
       resultado.textContent = `${nome}  seu imc e ${valorIMC} e voce esta ${classificacao}` ;
           
      } else{
         resultado.textContent = 'preencha os campos !!!!'
       }

       }  
      
      calcular.addEventListener('click', imc);






     

     