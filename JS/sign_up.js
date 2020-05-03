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

