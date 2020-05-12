
firebase.initializeApp({
  apiKey: "AIzaSyBIdrFVt47TSbfMUXPgiD0vto37QAUVm6M",
  authDomain: "formulario-a8638.firebaseapp.com",
  projectId: "formulario-a8638",

  });

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

function guardar(){
  var nombre = document.getElementById('nombre').value;
  var mensaje = document.getElementById('mensaje').value;
  var email = document.getElementById('email').value;

    db.collection("form").add({
      nombre: nombre,
      mensaje: mensaje,
      email: email
    })
    .then(function(docRef) {
      console.log("Espero que me contraten :)")
      document.getElementById('nombre').value='',
      document.getElementById('mensaje').value='',
      document.getElementById('email').value=''
  
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    alert('Mensaje enviado')
  }


document.getElementById('guardar').onclick=guardar;
