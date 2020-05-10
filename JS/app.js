var db = firebase.firestore();
var email = localStorage.getItem("email");
var head_wel = document.getElementById("head_wel");
var d = new Date();
document.getElementById("date").innerHTML = d;
db.collection('User').get().then((snapshot) => {
    snapshot.forEach(doc => {
        if (email === doc.data().email) {
            localStorage.setItem("doc_id", doc.id);
            console.log(localStorage.getItem("doc_id"));
            // localStorage.setItem("selling_place_len", doc.data().selling_place.length);
            // localStorage.setItem("corn_type_len", doc.data().corn_type.length);
            console.log(doc.data().name);
            head_wel.innerHTML = "สวัสดีคุณ, " + doc.data().name;
            document.getElementById("name").value = doc.data().name;
            document.getElementById("surname").value = doc.data().surname;
            document.getElementById("sub_district").value = doc.data().sub_district;
            document.getElementById("district").value = doc.data().district;
            document.getElementById("province").value = doc.data().province;
            document.getElementById("phone_num").value = doc.data().phone;
            var corn_type_div = document.querySelector('#corn_type_div');
            let output_corn_type = '';
            let count = 1;
            for (var i = 0; i < doc.data().selling_place.length; i++) {
                for (var j = 0; j < doc.data().corn_type.length; j++) {
                    //กรณีที่มีประเภทข้าวโพด 3 ประเภท
                    if (doc.data().corn_type.length === 3) {
                        if (j === 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1`+ count + `" placeholder="กรุณากรอกราคา">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                        `;
                            count++;
                        }
                        else if (j === 1) {
                            output_corn_type = `
                            <label for="corn_type_name">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_2`+ count + `" placeholder="กรุณากรอกราคา">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                        `;
                            count++
                        }
                        else if (j === 2) {
                            output_corn_type = `
                            <label for="corn_type_name">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_3`+ count + `" placeholder="กรุณากรอกราคา">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                        `;
                            count++
                        }
                    }
                    //กรณีที่มีประเภทข้าวโพด 2 ประเภท
                    else if (doc.data().corn_type.length === 2) {
                        if (j === 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1`+ count + `" placeholder="กรุณากรอกราคา">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                        `;
                            count++;
                        }
                        else if (j === 1) {
                            output_corn_type = `
                            <label for="corn_type_name">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_2`+ count + `" placeholder="กรุณากรอกราคา">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                        `;
                            count++;
                        }
                    }
                    //กรณีที่มีประเภทข้าวโพด 1 ประเภท
                    else if (doc.data().corn_type.length === 1) {
                        if (j === 0 && doc.data().status === 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1`+ count + `" placeholder="กรุณากรอกราคา">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                        `;
                            count++;
                        }
                        else if (j === 0 && doc.data().status !== 0) {
                            output_corn_type = `
                            <label for="selling_place"><b>${doc.data().selling_place[i]}</b></label><br>
                            <label for="corn_type">${doc.data().corn_type[j]}:</label> 
                            <input type="number" id="corn_type_1`+ count + `" placeholder="กรุณากรอกราคา" value="` + doc.data().each_price[i] + `">
                            <label for="unit">บาท/กิโลกรัม</label><br>
                            `;
                            if (doc.data().selling_place.length - 1 === i) {
                                output_corn_type += `
                                <label for="show_date">วันที่อัปเดตล่าสุด: ${doc.data().date_update}</label><br>
                                `;
                            }
                            count++;
                        }
                    }
                    corn_type_div.innerHTML += output_corn_type;
                }
            }
        }
    });
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn_add_store");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function send_price() {
    var db = firebase.firestore();
    var update_status = db.collection('User').doc(localStorage.getItem("doc_id").toString());
    var len_selling = localStorage.getItem("selling_place_len");
    var len_corn_type = localStorage.getItem("corn_type_len");
    var count = 1;
    var sum_value1 = 0;
    var sum_value2 = 0;
    var sum_value3 = 0;
    console.log(typeof localStorage.getItem("doc_id").toString());
    var array_price = new Array();
    for (var i = 0; i < len_selling; i++) {
        if (len_corn_type == 3) {
            var keep_param1 = "corn_type_1" + count;
            count++;
            var keep_param2 = "corn_type_2" + count;
            count++;
            var keep_param3 = "corn_type_3" + count;
            count++;
            var value_corn1 = document.getElementById(keep_param1).value;
            var value_corn2 = document.getElementById(keep_param2).value;
            var value_corn3 = document.getElementById(keep_param3).value;
            var value_corn1_num = parseFloat(value_corn1);
            var value_corn2_num = parseFloat(value_corn2);
            var value_corn3_num = parseFloat(value_corn3);
            sum_value1 += value_corn1_num;
            sum_value2 += value_corn2_num;
            sum_value3 += value_corn3_num;
        }
        else if (len_corn_type == 2) {
            var keep_param1 = "corn_type_1" + count;
            count++;
            var keep_param2 = "corn_type_2" + count;
            count++;
            var value_corn1 = document.getElementById(keep_param1).value;
            var value_corn2 = document.getElementById(keep_param2).value;
            var value_corn1_num = parseFloat(value_corn1);
            var value_corn2_num = parseFloat(value_corn2);
            sum_value1 += value_corn1_num;
            sum_value2 += value_corn2_num;
        }
        else if (len_corn_type == 1) {
            var keep_param1 = "corn_type_1" + count;
            count++;
            var value_corn1 = document.getElementById(keep_param1).value;
            var value_corn1_num = parseFloat(value_corn1);
            sum_value1 += value_corn1_num;
            if (len_selling == 2) {
                array_price.push(value_corn1_num);
            }
        }
    }
    console.log(array_price);
    update_status.update({
        status: 1,
        each_price: [array_price[0], array_price[1]],
        date_update: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }).then(function () {
        console.log("Document successfully updated!");
        // alert("การเพิ่มข้อมูลสำเร็จ!");
        // window.location.replace("home.html");
    })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    var selling_place_num = parseFloat(len_selling);
    if (len_corn_type == 3) {
        console.log("Date update: " + `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
        console.log("corn_type_1: " + sum_value1 / selling_place_num);
        console.log("corn_type_2: " + sum_value2 / selling_place_num);
        console.log("corn_type_3: " + sum_value3 / selling_place_num);
        alert("การเพิ่มข้อมูลสำเร็จ!");
        window.location.replace("home.html");
    }
    else if (len_corn_type == 2) {
        console.log("Date update: " + `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
        console.log("corn_type_1: " + sum_value1 / selling_place_num);
        console.log("corn_type_2: " + sum_value2 / selling_place_num);
        alert("การเพิ่มข้อมูลสำเร็จ!");
        window.location.replace("home.html");
    }
    else if (len_corn_type == 1) {
        console.log("Date update: " + `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
        console.log("corn_type_1: " + sum_value1 / selling_place_num);
        // alert("การเพิ่มข้อมูลสำเร็จ!");
        // window.location.replace("home.html");
    }
}

function checkbox_corn_type() {
    var checkBox_maize = document.getElementById("maize_corn");
    var checkBox_sweet = document.getElementById("sweet_corn");
    var checkBox_baby = document.getElementById("baby_corn");
    var checked_box = 0;
    localStorage.setItem("checked_box", checked_box);
    console.log(localStorage.getItem("checked_box"));
    console.log("checkBox_maize "+ checkBox_maize.checked);
    console.log("check_sweet "+ checkBox_sweet.checked);
    console.log("check_baby "+ checkBox_baby.checked);
    if (checkBox_maize.checked == true) {
        console.log("check_maize");
        localStorage.setItem("maize", "ข้าวโพดเลี้ยงสัตว์");
        checked_box = parseInt(localStorage.getItem("checked_box")) + 1;
        console.log("เข้าเงื่อนไขข้าวโพดเลี้ยงสัตว์: "+ checked_box);
        localStorage.setItem("checked_box", checked_box);
    }
    if (checkBox_sweet.checked == true) {
        console.log("check_sweet");
        localStorage.setItem("sweet", "ข้าวโพดหวาน");
        checked_box = localStorage.getItem("checked_box") + 1;
        localStorage.setItem("checked_box", checked_box);
    }
    if (checkBox_baby.checked == true) {
        console.log("check_baby");
        localStorage.setItem("baby", "ข้าวโพดฝักอ่อน");
        checked_box = localStorage.getItem("checked_box") + 1;
        localStorage.setItem("checked_box", checked_box++);
    }
}

function send_test() {
    var selling1 = document.getElementById("selling_1").value;
    var db = firebase.firestore();
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
    db.collection("User").doc(localStorage.getItem("doc_id").toString()).update({
        selling_place: arrayUnion(selling1)
    }).then(function () {
        console.log("Document successfully written!");
        alert('การสมัครสำเร็จ!');
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}