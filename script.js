/*  ENCRIPTAR
   1- Crear la Fx de encriptacion
   2- Conectar la Fx al boton "Encriptar" en HTML
   3- Capturar el texto escrito en HTML
   4- Desarrollar la logica de la encripatacion
   5- Mostrar el msj encriptado*/

   /* Variables: 1- La que toma el texto introducido
                 2- La que tiene el texto encriptado y lo muestra
                 3-  */ 

const textarea = document.getElementById("textArea__encriptador");
const text = textarea.value;
var texto_encriptar = [];
texto_encriptar.push(text);

console.log(texto_encriptar);


//function encriptar(){
//   alert("anda");
//}

//var button = document.querySelector(".encriptador__boton-encriptar");
//button.onclick = encriptar; 