console.log("Connected");

function SubmitForm(form){

    console.log(form.nameN.value);
    console.log(form.phoneN.value);
    console.log(form.motorN.value);

    if(!validateName(form.nameN.value)){
        return false;
    }

    if(!validatePhone(form.phoneN.value)){
        return false;
    }

    if(!validateMotor(form.motorN.value)){
        return false;
    }
    
    if(!validateQuantity(form.quantityN.value)){
        return false;
    }

    return true;

}



function validateName(data){
    if(data == ""){
        alert("Input your Name")
        return false;
    }
    return true;
}

function validatePhone(data){
    if(data == ""){
        alert("Input Number")
        return false
    }else{
        
        return true;
    }
}

function validateMotor(data){
    if(data == "Choose Your Varian"){
        alert("Please choose your motorcycle.")
        return false;
    }
    return true;

}

function validateQuantity(data)
{

    var z = /^[0-9]+$/;
    if(data.match(z))
        {
            return true
        
        }else{
            alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)")
            return false
        }
}