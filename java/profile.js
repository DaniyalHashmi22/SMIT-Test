import{storage,db,auth} from "./firebase.mjs"
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {  ref, getDownloadURL,uploadBytes  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";


var btn=document.getElementById("btn")
btn.addEventListener("click",async()=>{

var name=document.getElementById("name").value    
var fname=document.getElementById("fname").value    
var gender=document.getElementById("gender").value    
var number=document.getElementById("number").value    
var img=document.getElementById("img").files[0]    


const storage = getStorage();
const storageRef = ref(storage, 'Smit');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');

  getDownloadURL(ref(storage, 'images/stars.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    var file = document.getElementById('img')
    const mountainsRef = ref(storage, `images/${file.files[0].name}`);
    uploadBytes(mountainsRef, file.files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  })
  .catch((error) => {
    // Handle any errors
  });

});





try {
  const docRef = await addDoc(collection(db, "users"), {
    name:name,
    FatherName:fname,
    gender:gender,
    number:number,
    
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


})