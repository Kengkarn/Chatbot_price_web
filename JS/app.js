var db = firebase.firestore();
var email = localStorage.getItem("email");
var head_wel = document.getElementById("head_wel");
var d = new Date();
document.getElementById("date").innerHTML = d;
db.collection('User').get().then((snapshot) => {
    snapshot.forEach(doc => {
        if (email === doc.data().email) {
            th_province = doc.data().province;
            if (th_province == "เพชรบูรณ์") {
                localStorage.setItem("province", "Petchaboon");
                localStorage.setItem("th_province", "เพชรบูรณ์");
            }
            else if (th_province == "น่าน") {
                localStorage.setItem("province", "Narn");
                localStorage.setItem("th_province", "น่าน");
            }
            else if (th_province == "พิษณุโลก") {
                localStorage.setItem("province", "Pitsanuloak");
                localStorage.setItem("th_province", "พิษณุโลก");
            }
            else if (th_province == "กรุงเทพ" || th_province == "กรุงเทพมหานคร" || th_province == "กรุงเทพฯ") {
                localStorage.setItem("province", "Bangkok");
                localStorage.setItem("th_province", "กรุงเทพมหานคร");
            }
            else if (th_province == "ลำพูน") {
                localStorage.setItem("province", "Lumpoon");
                localStorage.setItem("th_province", "ลำพูน");
            }
            else if (th_province == "ลำปาง") {
                localStorage.setItem("province", "Lumpang");
                localStorage.setItem("th_province", "ลำปาง");
            }
            else if (th_province == "นครราชศรีมา") {
                localStorage.setItem("province", "Koraj");
                localStorage.setItem("th_province", "นครราชศรีมา");
            }
            else if (th_province == "แพร่") {
                localStorage.setItem("province", "Phrae");
                localStorage.setItem("th_province", "แพร่");
            }
            else if (th_province == "เชียงราย") {
                localStorage.setItem("province", "Chianrai");
                localStorage.setItem("th_province", "เชียงราย");
            }
            else if (th_province == "นครสวรรค์") {
                localStorage.setItem("province", "Nakhonsawan");
                localStorage.setItem("th_province", "นครสวรรค์");
            }
            console.log(localStorage.getItem("province"));
            localStorage.setItem("doc_id", doc.id);
            console.log(localStorage.getItem("doc_id"));
            console.log(doc.data().name);
            head_wel.innerHTML = "สวัสดีคุณ, " + doc.data().name;
            document.getElementById("name").value = doc.data().name;
            document.getElementById("surname").value = doc.data().surname;
            document.getElementById("sub_district").value = doc.data().sub_district;
            document.getElementById("district").value = doc.data().district;
            document.getElementById("province").value = doc.data().province;
            document.getElementById("phone_num").value = doc.data().phone;
            var corn_type_div = document.querySelector('#corn_type_div');
            var btn_send_price_div = document.querySelector('#btn_send_price_div');
            let output_corn_type = '';
            let count = 1;
            if (doc.data().check_first == 1) {
                localStorage.setItem("selling_place_len", doc.data().selling_place.length);
                localStorage.setItem("corn_type_len", doc.data().corn_type.length);
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
                        btn_send_price_div.innerHTML = `<button onclick="send_price()" type="submit" class="btn btn-success">ส่งราคา</button>`;
                        corn_type_div.innerHTML += output_corn_type;
                    }
                }
            }
            else if (doc.data().check_first == 0) {
                console.log("ยังไม่ได้เพิ่มร้าน");
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
            array_price.push(value_corn1_num);
        }
    }
    console.log(array_price);
    update_status.update({
        status: 1,
        each_price: array_price,
        date_update: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }).then(function () {
        console.log("Document successfully updated!");
        alert("การเพิ่มข้อมูลสำเร็จ!");
        window.location.replace("home.html");
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
        console.log("corn_type_1: " + sum_value1 / selling_place_num)
        //กรณีที่เป็นข้าวโพดเลี้ยงสัตว์
        db.collection("Price").doc(localStorage.getItem("province").toString()).update({
            price_data: { maize_corn: (sum_value1 / selling_place_num) }
        })

        // alert("การเพิ่มข้อมูลสำเร็จ!");
        // window.location.replace("home.html");
    }

}

function add_store_2db(name) {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "none";
    }
    var db = firebase.firestore();
    var user_doc_id = db.collection('User').doc(localStorage.getItem("doc_id").toString());
    var name_selling = document.getElementById("selling_name").value;
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    let check_1 = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    console.log(values);
    user_doc_id.get().then((snapshot) => {
        if (snapshot.data().check_first == 0) {
            check_1.push(0)
        }
    }).then(function () {
        if (check_1[0] == 0) {
            db.collection("Price").doc(localStorage.getItem("province").toString()).set({
                arr_selling: [],
                price_data: { maize_corn: 0, sweet_corn: 0, baby_corn: 0 },
                province: localStorage.getItem("th_province")
            }).then(function () {
                console.log("Document successfully written!");
            })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }

    }).then(function () {
        user_doc_id.update({
            check_first: 1,
            date_update: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
        }).then(function () {
            console.log("Document successfully updated!");
            console.log(localStorage.getItem("province"));
            db.collection("Price").doc(localStorage.getItem("province").toString()).update({
                arr_selling: arrayUnion(name_selling),
                corn_type: values
            }).then(function () {
                console.log("Document successfully updated!");
                user_doc_id.update({
                    selling_place: arrayUnion(name_selling),
                    corn_type: values
                }).then(function () {
                    alert("การเพิ่มร้านสำเร็จ!");
                    window.location.replace("home.html");
                })
            }).catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    })



}
