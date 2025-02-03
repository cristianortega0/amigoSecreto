// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Deficion de variables
let posicionDeAmigoSecreto =-1;
let arrayAmigos = [];
let amigoSecreto = '';
let seleccion = false;
let amigoSorteado ='';

//Funcion para generar un numero aleatorio para la posicion del amigo secreto

function generarPosicionAmigoSecreto(arrayAmigos) {
  posicionDeAmigoSecreto = Math.floor(Math.random() * arrayAmigos.length);
  return posicionDeAmigoSecreto;
}

// Imprimir lista amigos

function imprimirAmigos() {
  document.getElementById('listaAmigos').innerHTML = [];
  let index = 0;
  while(index < arrayAmigos.length){
    document.getElementById('listaAmigos').innerHTML += `<li>${arrayAmigos[index]}</li>`;
    index++;    
  }
}
//funcion para agregar amigos al array
function agregarAmigo() {
    console.log(amigoSecreto);
    amigoSecreto=document.getElementById('amigo').value;
    console.log(amigoSecreto);
  if (amigoSecreto == ''){
    alert('Por favor ingrese un nombre de amigo');
    return;
  }
  else{
    arrayAmigos.push(amigoSecreto);
    console.log(arrayAmigos);
    imprimirAmigos();
    document.getElementById('amigo').value='';
    document.getElementById('resultado').innerHTML = '';
  };
}


//Funcion para sortear un amigo

function sortearAmigo() {
  if (arrayAmigos.length == 0) {
    alert('No hay amigos agregados. Agregue al menos un amigo para poder sortear.');
    return;
  }
  seleccion = true;
  posicionDeAmigoSecreto = generarPosicionAmigoSecreto(arrayAmigos);
  amigoSorteado = arrayAmigos[posicionDeAmigoSecreto];
  document.getElementById('listaAmigos').innerHTML = [];
  document.getElementById('resultado').innerHTML = 'El amigo secreto soretado es: '+ amigoSorteado;
  
}



