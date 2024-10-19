//table

let table = document.querySelector('table')

let inputVal = document.getElementById("input").value

// let getval=inputVal.value;

console.log(inputVal)

function submit() {
    let inputVal = document.getElementById("input").value
    // console.log(inputVal)

    let tr = document.createElement('tr');

    //td1
    let td1 = document.createElement('td')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'ck');
    td1.appendChild(checkbox)
    tr.appendChild(td1)

    //td2
    let td2 = document.createElement('td')
    let text = document.createElement('h3')
    text.textContent = inputVal
    td2.appendChild(text)
    tr.appendChild(td2)


    //td3
    let td3 = document.createElement('td')

    let dlt = document.createElement('button')
    dlt.textContent = 'delete'
    dlt.className = 'btn'
    td3.appendChild(dlt)
    tr.appendChild(td3)
    //tr append totable
    table.append(tr)

    //strike
}


table.addEventListener('click', (e) => {
    let el = e.target
    // console.log(el.value);
    // console.log(el.parentElement.nextElementSibling.firstElementChild);
    // let txtdec = el.parentElement.nextElementSibling.firstElementChild.style.textDecoration;

    if (el.className == 'ck') {
        if (el.parentElement.nextElementSibling.firstElementChild.style.textDecoration == '') {
            el.parentElement.nextElementSibling.firstElementChild.style.textDecoration = 'line-through'
            console.log("hi");

        }
        else if (el.parentElement.nextElementSibling.firstElementChild.style.textDecoration == "line-through") {
            el.parentElement.nextElementSibling.firstElementChild.style.textDecoration = '';
            console.log("hi2");
        }
    }

    if (el.className == "btn") {
        el.parentElement.parentElement.remove();
    }

    console.log(el.parentElement.parentElement);


})

let submit1 = document.getElementById('input')

submit1.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        if(submit1.value !="") {
            submit();
            submit1.value ='';
        }
    }
})