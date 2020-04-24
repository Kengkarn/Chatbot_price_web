var db = firebase.firestore();
// var nav_name = document.getElementById("nav_name");
var email = localStorage.getItem("email");
var head_wel = document.getElementById("head_wel");
db.collection('User').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        console.log(doc.data().email);
        if (email === doc.data().email){
            // nav_name.innerHTML = doc.data().name;
            head_wel.innerHTML = "สวัสดีคุณ, " + doc.data().name;
        }
        
    });
})