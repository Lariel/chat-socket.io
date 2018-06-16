firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // já estava logado

    document.getElementById("conversa").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("sigup_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // não logado
    document.getElementById("login_div").style.display = "block";
    document.getElementById("conversa").style.display = "none";
    document.getElementById("sigup_div").style.display = "none";

  }
});


function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });

}

function gosignup(){ //somente para ligação da tela de login com a de registro de usuário
  document.getElementById("signup_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";
}

function signup(){
  var novoUserNick = document.getElementById("new_nick_field").value;
  var novoUserEmail = document.getElementById("new_email_field").value;
  var novoUserPass = document.getElementById("new_password_field").value;

  firebase.auth().createUserWithEmailAndPassword(novoUserEmail, novoUserPass, )
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});

/*
admin.auth().createUser({
  email: novoUserEmail,
  emailVerified: false,
  password: novoUserPass,
  displayName: novoUserNick,
  disabled: false
})
  .then(function(userRecord) {
    window.alert("Sucesso, usuário "+novoUserNick+" criado!"+userRecord.uid+" - "+userRecord.displayName);
  })
  .catch(function(error) {
    window.alert("Erro ao criar usuário: ", error);
  });

  */

  document.getElementById("login_div").style.display = "block";
  document.getElementById("signup_div").style.display = "none";
}

function logout(){
  firebase.auth().signOut();
}
