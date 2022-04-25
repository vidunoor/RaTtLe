let username="";
function press(){
    username=document.getElementById("usernameinput").value
    localStorage.setItem("username_key",username)
    window.location="kwitter_room.html";

}
