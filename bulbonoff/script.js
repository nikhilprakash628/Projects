const bulb = document.getElementById("bulb")
const button = document.getElementById("toggleBtn")
let flag = false;
button.addEventListener("click", () =>{
    if(flag === false){
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        button.innerHTML = "Turn Off";
        flag = true;
    }else{
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        button.innerHTML = "Turn On";
        flag = false;
    }
})