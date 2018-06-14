window.cipher = {
//Funcion cifra
encode:(mens,n)=> {
let mens= (text.value.toUpperCase());
let n= parseInt(desp.value);

for(let i=0; i<mens.length; i++) {

       let codCesar=((mens.charCodeAt(i) - 65 + n) % 26) + 65;
       console.log(codCesar);
      let mensajeCif= String.fromCharCode(codCesar);
             console.log(mensajeCif);

      document.getElementById("resultado").innerHTML += mensajeCif;
      }
    },
//Funcion descifra
decode:(mens,n) => {
let mens= (text.value.toUpperCase());
let n= parseInt(desp.value);
for(let j=0; j< mens.length; j++) {

   let codCesar = (mens.charCodeAt(j) + 65 - n) % 26 +65;
   console.log(codCesar);
   let menDes= String.fromCharCode(codCesar);
   console.log(menDes);
  document.getElementById("resultado").innerHTML += menDes

}

},
borrar:(mens) => {
  let mens= (text.value.toUpperCase());
 document.getElementById("resultado").innerHTML=" ";
 document.getElementById("tex").innerHTML=" ";
},
};
