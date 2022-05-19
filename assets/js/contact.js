(function() {
 "use strict";
 
 const btn = document.getElementById('button');

 document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_kk33qae';

    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Enviar';
       alert('¡Su mensaje se ha enviado correctamente!');
     }, (err) => {
       btn.value = 'Enviar';
       alert(JSON.stringify(err));
     });
 });

})()
