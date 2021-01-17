var button = document.createElement("button");
button.innerHTML = "Click Me! (if you can)";
button.id = "fast";
button.style.position = 'relative';
button.style.zIndex = 2;

var direction = ["top","bottom","left","right"]

main = () => {
    alert('Game: "Click the Mouse" - is an old style game where by the button you are supposed to click runs away from you. So... try to click the button.');
    document.getElementById('main').innerHTML = "<h1>Jared's JS site</h1> <div id='dynamic'> </div>";
    crazyButton();
}

crazyButton = () => {
    var innerdiv = document.getElementById('dynamic');
    innerdiv.appendChild(button);
}

button.addEventListener('mouseover', () => {
    const randomDir = direction[Math.floor(Math.random() * direction.length)];
     button.style[randomDir] = Math.floor(Math.random() * (window.innerWidth - 300)).toString() + "px";
});

button.addEventListener('click', () => {
    alert('Dang!');
});

window.onload = main;

