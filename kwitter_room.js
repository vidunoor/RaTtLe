
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA9QvbN6u5mb0eWSjq52hOSk7J4rbTz6VU",
      authDomain: "rattle-48f9f.firebaseapp.com",
      databaseURL: "https://rattle-48f9f-default-rtdb.firebaseio.com",
      projectId: "rattle-48f9f",
      storageBucket: "rattle-48f9f.appspot.com",
      messagingSenderId: "966312569795",
      appId: "1:966312569795:web:0c9bcd621513fd63a2ab76"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      var welcome_user=localStorage.getItem("username_key")
      document.getElementById("welcome").innerHTML = "Welcome "+welcome_user+"!"

   function addroom(){
         var roomname=document.getElementById("myroom").value;
         firebase.database().ref('/').child(roomname).update({purpose:"addroom"})
         localStorage.setItem("roomname_key",roomname)
         window.location="message.html";
         
   }   
   function logout(){
         localStorage.removeItem("username_key")
         localStorage.removeItem("roomname_key")
         window.location="index.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='roomname'id='"+Room_names+"'onclick='changeroomname(this.id)'>"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function changeroomname(name){
      localStorage.setItem("roomname_key",name)
      window.location="message.html";
}
