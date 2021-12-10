
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA6F-Lo0S_Zsg8T1wZIWA7rMbT2xeRMj7Q",
      authDomain: "kwiter-8da40.firebaseapp.com",
      databaseURL: "https://kwiter-8da40-default-rtdb.firebaseio.com",
      projectId: "kwiter-8da40",
      storageBucket: "kwiter-8da40.appspot.com",
      messagingSenderId: "613263819018",
      appId: "1:613263819018:web:dac97c1b2f46f7cfb4baf3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name  =  localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "WELCOME "+ user_name+"!";

   function addRoom() 
   {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> # "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomName(name) 
{

console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";


}

function logout() 
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}

