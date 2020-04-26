## วิธีการอัปโค้ดขึ้น Github
1. เปิด Folder Project ขึ้นมา คลิกที่ Path แล้วพิมพ์ cmd และกด enter
![ภาพตัวอย่าง](https://i.ibb.co/fnVtsLk/Untitled.png)
   > ภาพตัวอย่าง
2. พิมพ์คำสั่ง git add .
> เป็นการเพิ่ม file ที่มีการแก้ไขทั้งหมด(add หลายไฟล์)ลงใน staged
   ### add ไฟล์เดียว
      git add <file_name>

   ### add หลายไฟล์
      git add .

   ### add หลายไฟล์ระบุนามสกุล
      git add *.html

3. พิมพ์คำสั่ง git commit -m "ข้อความอธิบายการเปลี่ยนแปลง"
> เป็นการ commit file ที่อยู่ใน staged ลงในเครื่อง local
4. พิมพ์คำสั่ง git push origin master
> เป็นการ push โค้ดขึ้นไปบน Remote Repository ลงใน branch master
### \*** จำไว้ว่าทุกครั้งที่จะแก้ไขโค้ดให้ Pull จาก Remote Repository ลงมาก่อน \***
> อาจสำรองโค้ดเดิมไว้ก่อนก็ได้ เผื่อบึ้ม!!
* โดยการ
   * พิมพ์คำสั่ง  git pull origin master
   
#### ศึกษาเพิ่มเติม: [คำสั่ง Git ที่ใช้งานบ่อย](https://www.memo8.com/git-basic-command/)


