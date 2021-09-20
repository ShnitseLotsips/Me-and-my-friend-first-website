
function getInputValue(){
    var getInputValue = document.getElementById("number").value;

    document.getElementById("output").value = getInputValue*5;
}
function getInputValue1(){
    var getInputValue1 = document.getElementById("number1").value;

    document.getElementById("output1").value = getInputValue1/7;
}

function getInputValue2(){
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var contryname = document.getElementById("cname").value;
    var sub = document.getElementById("sname").value;


    if (firstname == "ShaMit" && contryname == "Israel" && sub == "admin"){
        alert("Hello Admin!")
    } else {
        alert( "FirstName:     "+firstname+"     LastName:     "+lastname+"     Contry:     "+contryname+"     Subject:     "+sub)
    }
}



function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
function showDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() +1;
    var yyyy = today.getFullYear();
    
    

    today2 = dd + '/' + mm + '/' + yyyy;

    document.getElementById("date").innerHTML = today2;

}
setInterval(showTime, 1000);
setInterval(showDate, 1000);




