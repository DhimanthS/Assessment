function validateForm(){
    let name = document.forms["myForm"]["fullNm"].value;
    let addr1 = document.forms["myForm"]["addr1"].value;
    let city = document.forms["myForm"]["city"].value;
    let province = document.forms["myForm"]["state"].value;
    let zip = document.forms["myForm"]["zip"].value;
    let email = document.forms["myForm"]["email"].value;
    let phNum = document.forms["myForm"]["phNum"].value
    if(name == ""){
        alert("Please fill the name")
        return false;
    }
    if(addr1 == ""){
        alert("Please fill the address field")
        return false;
    }
    if(city == ""){
        alert("Please fill the city field")
        return false;
    }
    if(province == ""){
        alert("Please fill the state field")
        return false;
    }
    if(zip == ""){
        alert("Please fill the postal code field")
        return false;
    }
    if(email == ""){
        alert("Please fill the email field")
        return false;
    }
    if(phNum == ""){
        alert("Please fill the phone number field")
        return false;
    }
    alert("Thank you for submiting the form");
}