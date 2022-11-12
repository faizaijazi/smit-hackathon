  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firebase.js"; 


  const firebaseConfig = {
    apiKey: "AIzaSyAGlqifgKvLXdRKkrKavQLtkUq2dn3eGiE",
    authDomain: "smit-attendance-portal.firebaseapp.com",
    projectId: "smit-attendance-portal",
    storageBucket: "smit-attendance-portal.appspot.com",
    messagingSenderId: "304052927396",
    appId: "1:304052927396:web:5516434973f907e9d55f31",
    measurementId: "G-86B1W16557"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  let submitData = document.getElementById("submitData");

  submitData.addEventListener("click", async function(){
    let classes_timing = document.getElementById("classes_timing");
    let classes_schedule = document.getElementById("classes_schedule");
    let teachers_name = document.getElementById("teachers_name");
    let section_name = document.getElementById("section_name");
    let course_Name = document.getElementById("course_Name");
    let batch_number = document.getElementById("batch_number");

    const docRef = await addDoc(collection(db, "allclasses"), {
        name: "Tokyo",
        country: "Japan"
      });
      console.log("Document written with ID: ", docRef.id);
  })