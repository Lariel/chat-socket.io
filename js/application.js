firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDiXcyzs2EeXLfAsCbWkxhalxqrT-IXxG0",
  authDomain: "chat-socket-io.firebaseapp.com",
  databaseURL: "https://chat-socket-io.firebaseio.com",
  projectId: "chat-socket-io",
  storageBucket: "chat-socket-io.appspot.com",
  messagingSenderId: "391959127375"
};
