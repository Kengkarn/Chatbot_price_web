firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var user = firebase.auth().currentUser;
        if (user != null) {
            window.location.replace("home.html");
        }
    } 
  });

//กรณีใส่ค่าแล้วกด Enter//
var input = document.getElementById("InputEmail");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn_login").click();
       }
});
var input_pass = document.getElementById("InputPassword");
input_pass.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn_login").click();
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

