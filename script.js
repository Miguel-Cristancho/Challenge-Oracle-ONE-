let str = document.getElementById('texto');
str.focus();

let encboton = document.getElementById('Encriptar');
encboton.onclick = botonencriptar;
function botonencriptar (){
  encriptar(str.value);
}

let desboton = document.getElementById('Desencriptar');
desboton.onclick = botondesencriptar;
function botondesencriptar (){
  desencriptar(str.value);
}

let copboton = document.getElementById('copiar');
copboton.onclick = botoncopiar;
function botoncopiar (){
  copiartexto();
}


//COPIAR AL PORTAPAPELES
function copiartexto(){
    var coptext = document.getElementById('textoresultado');
    coptext.select();
    document.execCommand("copy");
}


//ENCRIPTAR
function encriptar (str){
  let arr = str.split('');
  let arrenc = [];
  for(var i=0; i<arr.length; i++){
    switch (arr[i]){
      case 'a':
        arr[i]='ai';
        break;
      case 'e':
        arr[i]='enter';
        break;
      case 'i':
        arr[i]='imes';
        break;
      case 'o':
        arr[i]='ober';
        break;
      case 'u':
        arr[i]='ufat';
        break;
    }
    arrenc[i] = arr[i];
  }
  let enc = arrenc.join('');
  return document.getElementById('textoresultado').value = enc;
}


//DESENCRIPTAR
function desencriptar(str){
  arrdes = str.toLowerCase().split('');
  for(var i = 0; i < arrdes.length; i++){
    if((arrdes[i]+arrdes[i+1]) == "ai"){
      arrdes.splice(i, 2, "a");
    } 
    else if((arrdes[i]+arrdes[i+1]+arrdes[i+2]+arrdes[i+3]+arrdes[i+4]) == "enter"){
      arrdes.splice(i, 5, "e");
    } 
    else if((arrdes[i]+arrdes[i+1]+arrdes[i+2]+arrdes[i+3]) == "imes"){
      arrdes.splice(i, 4, "i");
    } 
    else if((arrdes[i]+arrdes[i+1]+arrdes[i+2]+arrdes[i+3]) == "ober"){
      arrdes.splice(i, 4, "o");
    } 
    else if((arrdes[i]+arrdes[i+1]+arrdes[i+2]+arrdes[i+3]) == "ufat"){
      arrdes.splice(i, 4, "u");
    }
  }
  let mensaje = arrdes.join('');
  return document.getElementById('textoresultado').value = mensaje;
}
