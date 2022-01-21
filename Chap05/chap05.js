var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter the first thing");
    item2 = prompt("Enter the Second thing");
    item3 = prompt("Enter the third thing");
    item4 = prompt("Enter the Fourth thing");
    item5 = prompt("Enter the Fifth thing");
    item6 = prompt("Enter the Sixth thing");
    updateList();
}
function updateList() {
    document.getElementById("a").innerHTML = item1;
    document.getElementById("b").innerHTML = item2;
    document.getElementById("c").innerHTML = item3;
    document.getElementById("d").innerHTML = item4;
    document.getElementById("e").innerHTML = item5;
    document.getElementById("f").innerHTML = item6;
}