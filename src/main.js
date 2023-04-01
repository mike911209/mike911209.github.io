import "./main.css";
import "./navbar.css";
import "./second.css";
import "./start.css";
import "./friend.css"

var body = document.querySelector("body")
var navbar = document.querySelector("#navbar");
var navcomponant = navbar.querySelectorAll(".navcomponent");
var start = document.querySelector("#start");

for (let el of navcomponant) {
    el.addEventListener("click", jump.bind(el));
} 
// navcomponant[1].addEventListener("click", jump.bind(this));

function jump() {
    // console.log(this);
    // console.log(this.textContent);
    let text = this.querySelector(".navcomponent-title").textContent;
    console.log(text);
    // window.location = window.location.hostname + "#" + this.textcontent;
    if (text === 'Friend') {
        window.location = window.location.hostname + "#" + 'friend-row-text-container';
    }
    else {
        window.location = window.location.hostname + "#" + text;
    }
}

// navcomponant[1].addEventListener("click", function() {
//     console.log()
//     window.location = window.location.hostname + "#" + navcomponent[1].textcontent;
//     // window.location = window.location.hostname + '#start';
// })