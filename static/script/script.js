function myOnload() {
alert("TEN MUCHA PRECAUCIÓN\nEL CONTENIDO DE LA WEB PUEDE CAUSAR BALANCES ENERGÉTICOS y ARMONÍA\nPRESIONAR EL BOTÓN ACEPTAR ES ARRIESGARSE A EXPLORAR UN CONTENIDO QUE TE ALEGRE Y MOTIVE MUCHO EN ESPECIAL LOS DÍAS DE QUILOMBOS\nO AL MENOS TE VAS A BURLAR SI TE PARECE UNA TONTERÍA LA WEB\n\n                          \uD83D\uDE00 🧘🧘🧘 \uD83D\uDE00");
 }


 const vibrateImg = () => {
   window.navigator.vibrate([500,100,1000,50,500,200,1000,50,500, 100, 1000, 200, 500, 100, 1000,50, 500]);
   //const backgr=document.querySelector("body");
   //backgr.style.backgroundColor="white";
   const text="HOLA SOY YOGIWEB, PODRÁS ESCUCHARME SIN AURICULARES, NO SOY DE AMAZON, NI DE TESLA, PERO ESPERO SERVIRTE PARA ESTUDIAR, SONREIR, HACER YOGA, HOLGAZANEAR, ETC.";
   const text2="EL METAHUMANO QUE ME HA CREADO NO SABE QUE ME DIÓ VIDA ARTIFICIAL. NO SE LO DIGAS. AHH, Y QUITA ESA CARA DE SORPRESA, SOY TAN NORMAL COMO CUALQUIERA, SÓLO QUE MUY GRACIOSA, JAJAJA";
   const text3=text+text2;
   const namaste=document.getElementsByClassName("namaste")[0];
   namaste.innerHTML=text;
   const nodeList = document.querySelectorAll("img");
   for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.boxShadow= "0px 0px 500px burlywood";
      }


  // var msg = new SpeechSynthesisUtterance();
   //var voices = speechSynthesis.getVoices();   


   const message = new SpeechSynthesisUtterance();
   message.text = text3; // Your text goes here
   message.lang = 'es-ES'; // Language code for Spanish
   message.gender == 'female';
   message.pitch = 0.2;
   message.rate = 0.8;

   speechSynthesis.speak(message);


   }
   