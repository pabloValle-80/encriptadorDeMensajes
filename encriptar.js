function encriptar() {
  var texto = document.querySelector("#encriptarArea").value;
  var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#encriptarArea").value;

  document.querySelector(".container__btnCop").style.display="block";
  
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar() {
  var texto = document.querySelector("#encriptarArea").value;
  var textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#encriptarArea").value;


  document.querySelector(".container__btnCop").style.display="block";;
}

var boton2 = document.querySelector("#btn-Desencriptar");
boton2.onclick = desencriptar;



function copy() {
  let copyText = document.getElementById ("msg");
  copyText.select();
  document.execCommand("copy");
}

document.getElementById("btnCopiar").addEventListener("click", copy);