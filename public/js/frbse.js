   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
   import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
   apiKey: "AIzaSyBI10YRhBDa3cxk8elzF1VZQIiJkt_jkAQ",
   authDomain: "code-wave-india.firebaseapp.com",
   databaseURL: "https://code-wave-india-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "code-wave-india",
   storageBucket: "code-wave-india.appspot.com",
   messagingSenderId: "330462059806",
   appId: "1:330462059806:web:97d55ef809559d55a73d0f",
   measurementId: "G-MLJR31Q9HV"
   };

// Initialize Firebase
   const app = initializeApp(firebaseConfig);

//get ref to database services
    const db = getDatabase(app);

    document.getElementById("submit").addEventListener('click', function(e){
     e.preventDefault();
     set(ref(db, 'user/' + document.getElementById("username").value),
     {

       NAME: document.getElementById("username").value,
       EMAIL: document.getElementById("email").value,
       CONTACT: document.getElementById("phone").value,
       URL : document.getElementById("urlno").value,
       BUDGET : document.getElementById("budget").value,

     });
       alert("Thankyou! We will contact you soon...");
    })

    


    // <div class="form">
    // <h2>Login Form</h2>
    // <form  id="registrationform">
    //     <div class="inputbox">
    //         <input type="text" value="" id="username" required>
    //         <span>username</span>
    //     </div>
    //     <div class="inputbox">
    //         <input type="email" value="" id="email" required>
    //         <span>E-mail</span>
    //     </div>
    //     <div class="inputbox">
    //         <input type="text" value="" id="phone" required>
    //         <span>Phone Number</span>
    //     </div>
    //     <input type="submit" value="submit" class="sub" id="submit">
    // </form>