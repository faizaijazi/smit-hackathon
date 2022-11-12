import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGlqifgKvLXdRKkrKavQLtkUq2dn3eGiE",
  authDomain: "smit-attendance-portal.firebaseapp.com",
  projectId: "smit-attendance-portal",
  storageBucket: "smit-attendance-portal.appspot.com",
  messagingSenderId: "304052927396",
  appId: "1:304052927396:web:5516434973f907e9d55f31",
  measurementId: "G-86B1W16557",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

let login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", function (e) {
  e.preventDefault()
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log("user ==>", user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error ==>", error)
    });
});
