function logout(){
  localStorage.removeItem("email");
  firebase.auth().signOut().then(function() {
      window.location.replace("index.html");
    });
}