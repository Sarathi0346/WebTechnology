

function cmToin(){
    let value = document.getElementById("val").value;

    let toinch= value/2.54;

    let todisplay=document.getElementById("result");

    
    todisplay.innerHTML=toinch.toFixed(2);

}