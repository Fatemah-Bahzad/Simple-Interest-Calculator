// function updateRate(){
//     var rateval=document.getElementById("rate").value;
//     // Modify the <span id="rate_val"> value to display the value of the rateval variable created above.
//     document.getElementById("rate_val").innerText = rateval;
// }

// function compute()
// {
//     var principal=document.getElementById("principal").value;
//     var rate =document.getElementById("rate").value;
//     var years=document.getElementById("years").value;
//     var interest = principal * num_years * rate / 100;
//     var amount = parseInt(principal) + parseFloat(interest);
//     var result = document.getElementById("result");

//     p = document.getElementById("principal").value;
    
//     // new data gets the current year then add the numbers of years given to get a year in the future
//     var year = new Date().getFullYear() + parseInt(years);
//     // make sure a right number is entered for a year 
//     if (principal <= 0) {
//         alert("Please enter a positive number!");
//         document.getElementById("principal").focus();
//     }
//     // Note that when writing < or > within quotation marks, you must instead type \< or \>
//     // use mark to highlight the numbers
//     else {
//         result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
//     }
// }
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}