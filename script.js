function compute()
{
    //Get the values entered by user
    var principal = document.getElementById("principal").value;

    if (principal == "" ) {
        alert("Enter a Positive Number for Principal Amount");
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Simple Interest Calculation
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    
}
    
function updateRate() 
{
    //to show the Rate value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

function checkdata() {
            
    //To Validate the principal amount value
    var principal = document.getElementById("principal");

    if (principal.value == "" ) {
        alert("Enter a Positive Number");
        principal.focus();
        return false;
    }

    if (principal.value <= 0 ) {
        alert("Enter a Positive Number");
        principal.focus();
        return false;
    }
    
    return true;
}
        