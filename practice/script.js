console.log("Hello World!!!!");
document.querySelector(".main");
const main = document.querySelector("h1")
main.innerHTML = "<h3> 20 rupy done toh ek kaam ki baat btaunga</h3>"
main.style.color = "Red"
// background-color: "black";
main.addEventListener( "click", abc)
function abc(){
    main.style.color = "red";
    main.innerHTML = "HA HA HA HA HA HA HA";
}


