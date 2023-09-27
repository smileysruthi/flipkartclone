let OTP
document.querySelector("#OTPpopup").style.visibility = "hidden"
document.querySelector("#successpayment").style.visibility = "hidden"
function mypayment(){
    OTP = Math.ceil(1000+ Math.random()*9000)
    alert ( "Your OTP is " + OTP)
    document.querySelector("#OTPpopup").style.visibility = "visible"

}
 
function verify(){
    let userOTP = document.querySelector("#OTPid").value 
     if (OTP == userOTP){
        
        document.querySelector("#OTPpopup").style.visibility = "hidden"
        document.querySelector("#successpayment").style.visibility = "visible"
        document.querySelector(".card").style.visibility = "hidden"
        setTimeout(() => {
         window.location.href = "index.html"
     }, 6000)
    

     }
     else{
        alert("wrong OTP")
     }
}
document.getElementById("totalpay").innerText=`Total Payment: ₹${localStorage.getItem( "totalpay") || "00"}` 