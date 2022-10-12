function byid(){
    var demo = document.getElementById("ch");
    demo.style.color = "green";
}
function byclass(){
    const collection = document.getElementsByClassName("example color");
    collection[1].style.backgroundColor = "red";
}
function byname(){
    alert(document.getElementsByName("ga")[0].value);
}
function bytagname(){
    var doc = document.getElementsByTagName("h2");
    doc[0].style.background = "orange";
    doc[0].style.color = "white";
}
function queryselector() {
    var x = document.getElementById("one");
    x.querySelector("p").style.backgroundColor = "blue";
    x.querySelector("p").style.color = "white";
}
function queryselectorall(){
    var x = document.getElementById("all").querySelectorAll("p");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "green";
    x[i].style.color = "white";
    }
}
function append1() {
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
function eventsz(){
    var x=document.getElementById("myBtn").addEventListener("click", 
    function() {
        alert("Hello World!");
      });
}
function timeint() {
    alert('Hello Abhishek Singh');
}
function tablerow() {
    var table = document.getElementById("myTable1");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }
function changeContent(){
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable2').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}
function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}