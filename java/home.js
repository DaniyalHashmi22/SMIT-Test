import{db,auth}from "./firebase.mjs"
import { getFirestore,collection, addDoc ,getDocs,deleteDoc,doc ,updateDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { signOut,getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

var btn=document.getElementById("btn")
btn.addEventListener("click",async()=>{

  var title=document.getElementById("title").value
  var para=document.getElementById("para").value
  

try {
  const docRef = await addDoc(collection(db, "blogs"), {
    title:title,
    para:para
    
  })

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}




})

async function showpro(){ 
  let card = document.getElementById("card")
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  card.innerHTML += `
  <div class="shadow  w-100 m-auto p-5 my-2"><h1>${doc.data().title}</h1>
  
  <span id="dateTimeContainer"></span>
  </p>
  <p>${doc.data().para}</p>
  
  <button class="btn btn-primary" onclick="add('${doc.id}')">Add</button>
  <button class="btn btn-primary" onclick="delet('${doc.id}')">Delete</button>
  </div>    
  `
});

}

showpro();

async function delet(id){
  await deleteDoc(doc(db, "blogs",id));

  Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'your post has deleted ',
      showConfirmButton: false,
      timer: 1500
    })
  // alert("your post has deleted")
  window.location.href="./home.html"

}
window.delet=delet

async function add(){
  var arr=prompt("Enter Title")
  var bar=prompt("Enter Value")
const washingtonRef = doc(db, "blogs", id);

// Set the "capital" field of the city 'DC'
await addDoc(washingtonRef, {
  title: arr,
  para: bar
});
}





var out=document.getElementById("logout")
out.addEventListener("click",()=>{

  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.href='../index.html'
  }).catch((error) => {
    // An error happened.
  });
})
