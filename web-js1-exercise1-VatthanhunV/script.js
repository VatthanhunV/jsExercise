function ChangeName (){
    name = prompt('What is your name?');   //ประกาศตัวแปร name เก็บค่าจากคำสั่ง prompt
    document.getElementById("inputName").innerHTML = "Hello " + name;
}