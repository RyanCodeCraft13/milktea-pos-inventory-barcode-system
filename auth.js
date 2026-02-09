import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,setDoc,getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.signup = async function(){

let email=emailInput.value;
let pass=passInput.value;
let role=roleInput.value;
let pin=pinInput.value;

const userCred=await createUserWithEmailAndPassword(auth,email,pass);

await setDoc(doc(db,"users",userCred.user.uid),{
email,role,pin
});

alert("Account Created");
window.location="login.html";
}

window.loginEmail = async function(){

let email=emailInput.value;
let pass=passInput.value;

await signInWithEmailAndPassword(auth,email,pass);

localStorage.setItem("login","true");

window.location="pos.html";
}

window.loginPIN = async function(){

let pin=pinInput.value;

const snapshot=await getDoc(doc(db,"pins",pin));

if(snapshot.exists()){
localStorage.setItem("login","true");
window.location="pos.html";
}else{
alert("Invalid PIN");
}
}
