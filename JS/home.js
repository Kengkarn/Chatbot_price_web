function logout(){
  localStorage.clear();
  firebase.auth().signOut().then(function() {
      window.location.replace("index.html");
    });
}