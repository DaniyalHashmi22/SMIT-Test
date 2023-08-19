import{auth} from "./firebase.mjs"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


var btn=document.getElementById("btn1")
btn.addEventListener("submit",async (e)=>{
e.preventDefault()
// var name=document.getElementById("name").value
// var fname=document.getElementById("fname").value
var email=document.getElementById("email").value
var password=document.getElementById("password").value
var password=document.getElementById("password1").value
//var img=document.getElementById("img").file[0]




createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);

    // Swal.fire({
    //   position: 'top-center',
    //   icon: 'success',
    //   title: 'Sign Up Sucessfull ',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    alert("Sign Up Sucessfull")
    window.location.href="../html pages/home.html"
    // ...

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("Please Enter Email & Password")
    // ..
  });


})    