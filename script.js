var textarea = document.getElementById('texto');
textarea.focus();
//DISPOSITIVO
if(navigator.appVersion.indexOf("Android") != -1 || navigator.appVersion.indexOf("Ipad") != -1 || navigator.appVersion.indexOf("Iphone") != -1 || navigator.appVersion.indexOf("Ipod") != -1){
  //BOTONES
  //Encriptar
  let encboton = document.getElementById('Encriptar');
  encboton.onclick = botonencriptar;
  function botonencriptar (){
    encriptar(textarea.value);
  }
  //Desencriptar
  let desboton = document.getElementById('Desencriptar');
  desboton.onclick = botondesencriptar;
  function botondesencriptar (){
    desencriptar(textarea.value);
  }
}
else{
  //FUNCIÓN VALIDAR TEXTO
  function validartexto (event){
    let str = event.which || event.keyCode;
    console.log("Presionada: " + str);
    if(str>96 && str<123 || str==241 || str==32){
      console.log("Presionada: " + String.fromCharCode(str));
      //BOTONES
      //Encriptar
      let encboton = document.getElementById('Encriptar');
      encboton.onclick = botonencriptar;
      function botonencriptar (){
        encriptar(textarea.value);
      }
      //Desencriptar
      let desboton = document.getElementById('Desencriptar');
      desboton.onclick = botondesencriptar;
      function botondesencriptar (){
        desencriptar(textarea.value);
      }
    }
    else{
      alert("Escribe el texto a encriptar/desencriptar en minúsculas, sin acentos y sin caracteres especiales");
    }
  }
}

//BOTON COPIAR
let copboton = document.getElementById('copiar');
copboton.onclick = botoncopiar;
function botoncopiar (){
  copiartexto();
}
//FUNCIÓN COPIAR TEXTPO AL PORTAPAPELES
function copiartexto(){
  let coptext = document.getElementById('textoresultado');
  coptext.select();
  document.execCommand('copy');
  alert('Texto copiado');
}
//FUNCIÓN ENCRIPTAR
function encriptar (str){
  let arr = str.split('');  
  let arrenc = [];
  let flag = 0;
  for(let i=0; i<arr.length; i++){
    //Valida texto
    if(str.charCodeAt(i)>96 && str.charCodeAt(i)<123 || str.charCodeAt(i)==241 || str.charCodeAt(i)==32){
      flag = flag + 0;
    }
    else{
      flag++;
    }
    //Encripta texto
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
  if(flag === 0){
    let enc = arrenc.join('');
    alert('Texto encriptado');
    return document.getElementById('textoresultado').value = enc;  
  }
  else{
    alert("Escribe el texto a encriptar/desencriptar en minúsculas, sin acentos y sin caracteres especiales");
  }
}
//FUNCIÓN DESENCRIPTAR
function desencriptar(str){
  let arrdes = str.toLowerCase().split('');
  let flag = 0;
  for(let i = 0; i < arrdes.length; i++){
    //Valida texto
    if(str.charCodeAt(i)>96 && str.charCodeAt(i)<123 || str.charCodeAt(i)==241 || str.charCodeAt(i)==32){
      flag = flag + 0;
    }
    else{
      flag++;
    }
    //Desencripta Texto
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
  if(flag === 0){
    let mensaje = arrdes.join('');
    alert('Texto Desencriptado'); 
    return document.getElementById('textoresultado').value = mensaje;
  }
  else{
    alert("Escribe el texto a encriptar/desencriptar en minúsculas, sin acentos y sin caracteres especiales");
  }
}
