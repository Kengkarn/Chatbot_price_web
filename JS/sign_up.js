function backTologin() {
    window.location.replace("index.html");
}

function selling_select() {
    var selling_val = document.getElementById("sell_place_num").value;
    var output_option = '';
    var selling_div = document.querySelector('#selling_input');
    if (selling_val == 1) {
        output_option = `
        <label for="corn_type_name">ร้านที่1 : </label> 
        <input type="text" id="selling_1" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        `;
        selling_div.innerHTML = output_option;
    }
    else if (selling_val == 2) {
        output_option = `
        <label for="corn_type_name">ร้านที่1 : </label> 
        <input type="text" id="selling_1" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่2 : </label> 
        <input type="text" id="selling_2" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        `;
        selling_div.innerHTML = output_option;
    }
    else if (selling_val == 3) {
        output_option = `
        <label for="corn_type_name">ร้านที่1 : </label> 
        <input type="text" id="selling_1" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่2 : </label> 
        <input type="text" id="selling_2" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่3 : </label> 
        <input type="text" id="selling_3" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        `;
        selling_div.innerHTML = output_option;
    }
    else if (selling_val == 4) {
        output_option = `
        <label for="corn_type_name">ร้านที่1 : </label> 
        <input type="text" id="selling_1" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่2 : </label> 
        <input type="text" id="selling_2" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่3 : </label> 
        <input type="text" id="selling_3" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่4 : </label> 
        <input type="text" id="selling_4" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        `;
        selling_div.innerHTML = output_option;
    }
    else if (selling_val == 5) {
        output_option = `
        <label for="corn_type_name">ร้านที่1 : </label> 
        <input type="text" id="selling_1" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่2 : </label> 
        <input type="text" id="selling_2" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่3 : </label> 
        <input type="text" id="selling_3" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่4 : </label> 
        <input type="text" id="selling_4" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        <label for="corn_type_name">ร้านที่5 : </label> 
        <input type="text" id="selling_5" placeholder="กรุณากรอกชื่อร้าน" class="form-control"><br>
        `;
        selling_div.innerHTML = output_option;
    }
}

function handleSignUp() {
    var db = firebase.firestore();
    var email = document.getElementById('InputEmail_regist').value;
    var password = document.getElementById('InputPassword_regist').value;
    var name = document.getElementById("name_regist").value;
    var surname = document.getElementById("surname_regist").value;
    var sub_district = document.getElementById("sub_district_regist").value;
    var district = document.getElementById("district_regist").value;
    var province = document.getElementById("province_regist").value;
    var phone = document.getElementById("phone_num_regist").value;
    // var selling_val = document.getElementById("sell_place_num").value;
    if (email.length < 4) {
        alert('กรุณากรอกอีเมล');
        return;
    }
    if (password.length < 4) {
        alert('กรุณากรอกรหัสผ่าน');
        return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('รหัสผ่านอ่อนแอเกินไป ต้องมีอย่างน้อย 6 ตัวอักษร');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
    console.log(name);
    console.log(sub_district);
    localStorage.setItem("email", email);
    db.collection("User").add({
        email: `${email}`,
        name: `${name}`,
        surname: `${surname}`,
        sub_district: `${sub_district}`,
        district: `${district}`,
        province: `${province}`,
        phone: `${phone}`,
        status: 0,
        check_first: 0
    }).then(function () {
        console.log("Document successfully written!");
        alert('การสมัครสำเร็จ!');
    }).then(function () {
        window.location.replace("index.html");
    })
}

