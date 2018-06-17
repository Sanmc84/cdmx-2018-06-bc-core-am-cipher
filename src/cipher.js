window.cipher = {

//Funcion cifrar
encode:()=> {
//Introduccion de variables llamadas desde index js
let mens= (text.value.toUpperCase());
let n= parseInt(desp.value);
//
for(let i=0; i<mens.length; i++) {
//
       let codCesar=((mens.charCodeAt(i) - 65 + n) % 26) + 65;
       console.log(codCesar);
//
      let mensajeCif= String.fromCharCode(codCesar);
             console.log(mensajeCif);
//Imprime la palabra cifrada (el += concatena el resultado)
      document.getElementById("resultado").innerHTML += mensajeCif;
      }
    },
//Funcion descifrar
decode:() => {
//Declaracion de variables
let mens= (text.value.toUpperCase());
let n= parseInt(desp.value);
//
for(let j=0; j< mens.length; j++) {

   let codCesar = (mens.charCodeAt(j) + 65 - n) % 26 +65;
   console.log(codCesar);
   let menDes= String.fromCharCode(codCesar);
   console.log(menDes);
//Imprime la palabra descifrada
  document.getElementById("resultado").innerHTML += menDes

}

},
borrar:() => {
  let mens= (text.value.toUpperCase());
 document.getElementById("resultado").innerHTML=" ";

},
};
