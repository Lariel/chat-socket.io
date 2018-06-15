firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("conversa").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("sigup_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";
    document.getElementById("conversa").style.display = "none";
    document.getElementById("sigup_div").style.display = "none";

  }
});


function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function gosignup(){
  document.getElementById("signup_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";
}

function signup(){
  var novoUserNick = document.getElementById("new_nick_field").value;
  var novoUserEmail = document.getElementById("new_email_field").value;
  var novoUserPass = document.getElementById("new_password_field").value;
  
  window.alert("bem vindo, "+novoUserNick+" e-mail: "+novoUserEmail);

  document.getElementById("login_div").style.display = "block";
  document.getElementById("signup_div").style.display = "none";
}

function logout(){
  firebase.auth().signOut();
}
