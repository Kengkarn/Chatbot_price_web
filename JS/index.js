firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var user = firebase.auth().currentUser;
        if (user != null) {
            window.location.replace("home.html");
        }
    } 
  });

function auth(){
    email = document.getElementById("InputEmail").value
    password = document.getElementById("InputPassword").value
    localStorage.setItem("email", email);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
        // ...
      });
}

