
const input = document.getElementsByClassName("operants");



const values = Array.from(input).map(element => element.textContent);

console.log(values)


// function clicknum(){

// for(let i=0;i<=values.length;i++){

// }
var val1 = 0   
let final = document.getElementById("result").innerHTML = val1

function num(we) {

    var innertxt = document.getElementsByClassName('operants')[we].innerText;
    console.log(innertxt)
    val1 = val1 + innertxt
    let dis = document.getElementById("result").innerHTML = val1
    // // dis.innerHTML=val
    // console.log("val", val)
}

function cal() {
    let final = document.getElementById("result").innerHTML = eval(val1)
    console.log(final)
    val1 = final
}

function clear1() {
    val1 = 0
    let final = document.getElementById("result").innerHTML = val1
    console.log(final)
}

let c = document.getElementById("noC1")
c.style.backgroundColor = "#fb5607";
c.style.color = "white"

let n0 = document.getElementById("no0")
n0.style.backgroundColor = "black";
n0.style.color = "white";

let nplus = document.getElementById("no=")
nplus.style.backgroundColor = "black";
nplus.style.color = "white";

let nslash = document.getElementById("no/")
nslash.style.backgroundColor = "black";
nslash.style.color = "white";

let nmul = document.getElementById("no*")
nmul.style.backgroundColor = "black";
nmul.style.color = "white";


let nmin = document.getElementById("no-")
nmin.style.backgroundColor = "black";
nmin.style.color = "white";



let npls = document.getElementById("no+")
npls.style.backgroundColor = "black";
npls.style.color = "white";

