
function confirmbox() {
    var a=confirm("Do you like our website");
    if(a){
        alert("Thank You");
    }
    else{
    alert("Sorry! we will try to improve");
    }
}
function promptbox() {
    let name = prompt("Please enter your name:", "Abhishek Singh");
    if (name == null || name == "") {
        alert("User cancelled the prompt"); 
    } else {
        alert("Hello " + name + "! How are you today?");
    }
  }
