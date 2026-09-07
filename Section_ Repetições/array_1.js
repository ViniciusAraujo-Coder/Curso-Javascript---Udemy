const array = [10,20,30,40,50,60,70,80,90];

let soma = 0; // acumulador

for(i = 0 ; i < array.length; i+=1){
    soma += array[i];
    console.log(soma);
}