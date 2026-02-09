import { auth } from "./firebase.js";
import { 
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.signup = async function(){
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

await createUserWithEmailAndPassword(auth,email,pass);
alert("Account Created");
window.location="login.html";
}

window.login = async function(){
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

await signInWithEmailAndPassword(auth,email,pass);
window.location="pos.html";
}
