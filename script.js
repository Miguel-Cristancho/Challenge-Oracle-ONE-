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

//COPIAR PORTAPAPELES


//ENCRIPTAR
function encriptar (str){
  let arr = str.split('');
  let arrenc = [];
  for(var i=0; i<arr.length; i++){
    switch (arr[i]){
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
function desencriptar (str){
  let arrdes = str.split('');
  let arrdesf = [];

  for(var i=0; i<arrdes.length; i++){
    //enter -> e
    if(arrdes[i]=='e' && arrdes[i+1]=='n' && arrdes[i+2]=='t' && arrdes[i+3]=='e' && arrdes[i+4]=='r'){
      arrdesf[i]='e';
      i=i+5;
    }
    else{
      arrdesf[i]=arrdes[i];
    }

    //imes -> i
    if(arrdes[i]=='i' && arrdes[i+1]=='m' && arrdes[i+2]=='e' && arrdes[i+3]=='s'){
      arrdesf[i]='i';
      i=i+4;
    }
    else{
      arrdesf[i]=arrdes[i];
    }

    //ober -> o
    if(arrdes[i]=='o' && arrdes[i+1]=='b' && arrdes[i+2]=='e' && arrdes[i+3]=='r'){
      arrdesf[i]='o';
      i=i+4;
    }
    else{
      arrdesf[i]=arrdes[i];
    }

    //ufat -> u
    if(arrdes[i]=='u' && arrdes[i+1]=='f' && arrdes[i+2]=='a' && arrdes[i+3]=='t'){
      arrdesf[i]='u';
      i=i+3;
    }
    else{
      arrdesf[i]=arrdes[i];
    }
  }

  let mensaje = arrdesf.filter(Boolean).join('');
  return document.getElementById('textoresultado').value = mensaje;
}