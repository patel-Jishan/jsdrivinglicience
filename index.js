function check(){
    let age=Number(prompt("Enter your age"));
    let message="";
    if(age<=16){
        message="❌ Not eligible for driving license.";
    }
    else if(age>=16&&age<=18){
        message="🚗 Eligible with guardian's consent. ";
    }
    else if(age>=18){
        message="🚗  Fully Eligible For Driving License.";
    }
    else{
        message="Invalid input.Please enter a valid age.";
    }
    document.getElementById("result").innerHTML=message;
}
