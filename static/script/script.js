function myOnload() {
alert("TEN MUCHA PRECAUCIÓN\nEL CONTENIDO DE LA WEB PUEDE CAUSAR BALANCES ENERGÉTICOS y ARMONÍA\nPRESIONAR EL BOTÓN ACEPTAR ES ARRIESGARSE A EXPLORAR UN CONTENIDO QUE TE ALEGRE Y MOTIVE MUCHO EN ESPECIAL LOS DÍAS DE QUILOMBOS\nO AL MENOS TE VAS A BURLAR SI TE PARECE UNA TONTERÍA LA WEB\n\n                          \uD83D\uDE00 🧘🧘🧘 \uD83D\uDE00");
 }


 const vibrateImg = () => {
   window.navigator.vibrate([500,100,1000,50,500,200,1000,50,500, 100, 1000, 200, 500, 100, 1000,50, 500]);
   //const backgr=document.querySelector("body");
   //backgr.style.backgroundColor="white";
   const text="HOLA SOY YOGIWEB, PODES ESCUCHARME SIN AURICULARES, NO SOY DE AMAZON, NI DE TESLA, PERO ESPERO SERVIRTE PARA ESTUDIAR, SONREIR, HACER YOGA, HOLGAZANEAR, ETC";
   const namaste=document.getElementsByClassName("namaste")[0];
   namaste.innerHTML=text;
   const nodeList = document.querySelectorAll("img");
   for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.boxShadow= "0px 0px 500px burlywood";
      }


   var msg = new SpeechSynthesisUtterance();
   var voices = window.speechSynthesis.getVoices();   
   //msg.voice = voices.filter(function(voice) { return voice.lang == 'es-ES' && voice.gender == 'female'; })[0];
   msg.text = text;
   msg.lang == 'es-ES';
   msg.voice=voices[5];
   msg.gender == 'female';
   msg.pitch = 0.2;
   msg.rate = 0.8;
   console.log(msg.text );
   speechSynthesis.speak(msg);
   }
   