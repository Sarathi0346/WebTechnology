document.addEventListener('DOMContentLoaded', function () {
    const registerLink = document.getElementById('register');
    const dropdown = document.getElementById('dropdown');
    const popup = document.getElementById('popup');
    const loginLink = document.getElementById('login');
    const closeBtn = document.getElementById('close');


    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        dropdown.classList.toggle('show');
    });


    window.addEventListener('click', function (event) {
        if (!registerLink.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });


    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        dropdown.classList.remove('show');
        popup.style.display = 'flex';
    });


    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

let res = document.getElementById("register")
var dropdown = document.getElementById("dropdown")
dropdown.style.display = 'none';
console.log(dropdown)

res.addEventListener("click", (event) => {
    // let register = event.target;

    // drop.style.display='none';
    // // let dropstatus = drop.display='none';
    // if (drop.style.display == 'none') {
    //     drop.style.display='block';
    // }
    // else if(drop.style.display == 'block') {
    //     drop.style.display ='none';
    // }

    if (dropdown.style.display == 'none') {
        dropdown.style.display = 'block';
    }
    else if (dropdown.style.display == 'block') {
        dropdown.style.display = 'none';
    }

})


let out=document.getElementById("outer")

out.addEventListener("click",()=>{
    // if (dropdown.style.display == 'none') {
    //     dropdown.style.display = 'block';
    // }
   if (dropdown.style.display == 'block') {
        dropdown.style.display = 'none';
    }
})

// console.log(drop.display);
// let body=document.getElementById('body');
// body.addEventListener('click',(event)=>{
//     drop.style.display='none';
// })




