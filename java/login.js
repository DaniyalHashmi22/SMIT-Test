import{auth} from "./firebase.mjs"
import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

var btn=document.getElementById("btn")
btn.addEventListener("click",()=>{

//var name=document.getElementById("name").value
//var fname=document.getElementById("fname").value
var email=document.getElementById("email").value
var password=document.getElementById("password").value
//var img=document.getElementById("img").file[0]


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href="./html pages/home.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  });   