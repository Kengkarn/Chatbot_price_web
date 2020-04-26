var db = firebase.firestore();
var email = localStorage.getItem("email");
var head_wel = document.getElementById("head_wel");
var d = new Date();
document.getElementById("date").innerHTML = d;
db.collection('User').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        console.log(doc.data());
        if (email === doc.data().email){
            head_wel.innerHTML = "สวัสดีคุณ, " + doc.data().name;
            document.getElementById("name").value = doc.data().name;
            document.getElementById("surname").value = doc.data().surname;
            document.getElementById("sub_district").value = doc.data().sub_district;
            document.getElementById("district").value = doc.data().district;
            document.getElementById("province").value = doc.data().province;
            document.getElementById("phone_num").value = doc.data().phone;
            var corn_type_div = document.querySelector('#corn_type_div');
            let output_corn_type = '';
            for (var i = 0; i < doc.data().selling_place.length; i++) {
                for (var j = 0; j < doc.data().corn_type.length; j++) {
                    //กรณีที่มีประเภทข้าวโพด 3 ประเภท
                    if (doc.data().corn_type.length === 3) {
                        if (j === 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1" placeholder="กรุณากรอกราคา"><br>
                        `;
                        }
                        else if (j === 1) {
                            output_corn_type = `
                            <label for="corn_type_name">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_2" placeholder="กรุณากรอกราคา"><br>
                        `;
                        }
                        else if (j === 2) {
                            output_corn_type = `
                            <label for="corn_type_name">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_3" placeholder="กรุณากรอกราคา"><br>
                        `;
                        }
                    }
                    //กรณีที่มีประเภทข้าวโพด 2 ประเภท
                    else if (doc.data().corn_type.length === 2) {
                        if (j === 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1" placeholder="กรุณากรอกราคา"><br>
                        `;
                        }
                        else if (j === 1) {
                            output_corn_type = `
                            <label for="corn_type_name">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_2" placeholder="กรุณากรอกราคา"><br>
                        `;
                        }
                    }
                    //กรณีที่มีประเภทข้าวโพด 1 ประเภท
                    else if (doc.data().corn_type.length === 1) {
                        if (j === 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1" placeholder="กรุณากรอกราคา"><br>
                        `;
                        }
                    }           
                    corn_type_div.innerHTML += output_corn_type;
                }
            }
            
        }      
    });
})