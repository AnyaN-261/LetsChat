
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCKo3GgYngkL_SR0nNhsTCqacUytyU3NYY",
      authDomain: "kwitter-12b40.firebaseapp.com",
      databaseURL: "https://kwitter-12b40-default-rtdb.firebaseio.com",
      projectId: "kwitter-12b40",
      storageBucket: "kwitter-12b40.appspot.com",
      messagingSenderId: "509490459487",
      appId: "1:509490459487:web:bc6b2663fc7db5437b7cea",
      measurementId: "G-MCXG892XGN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick = redirectToRoomName(this.id)'>#"+Room_names +"<div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
