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
var username=localStorage.getItem("username_key")
var roomname=localStorage.getItem("roomname_key")
function send(){
    var message=document.getElementById("send_message").value;
    firebase.database().ref(roomname).push({name:username,message:message,likes:0});
}

function getData(){firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code

name = message_data['name'];
message = message_data['message'];
  like = message_data['likes'];


  name_with_tag = "<h4> "+ name +"</h4>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";


  
 like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

 row = name_with_tag + message_with_tag +like_button + span_with_tag;      
 document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  like_1 = document.getElementById(button_id).value;
  updated_likes = Number(like_1) + 1;
  console.log(updated_likes);

  firebase.database().ref(roomname).child(message_id).update({
    likes : updated_likes  
   });

  }