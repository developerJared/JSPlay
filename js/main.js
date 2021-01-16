var button = document.createElement("button");
button.innerHTML = "Click Me! (if you can)";
button.id = "fast";
button.style.position = 'relative';
button.style.zIndex = 2;


main = () => {
    alert('Game: "Click the Mouse" - is an old style game where by the button you are supposed to click runs away from you. So... try to click the button.');
    document.getElementById('main').innerHTML = "<h1>Jared's JS site</h1> <div id='dynamic'> </div>";
    crazyButton();
}

crazyButton = () => {
    var innerdiv = document.getElementById('dynamic');
    innerdiv.appendChild(button);
}

button.addEventListener('mouseenter', () => {
    //var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    //var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    //console.log([randX, randY]);
    //var btn = document.getElementById("button5");
    if (!button.style.left) {
        // Default to 500 to start
        button.style.left = "500px";
    } else {
        var posLeft = parseInt(button.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            button.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            button.style.left = (posLeft + 150) + "px";
        }
    }
});

button.addEventListener('click', () => {
    alert('Dang!');
});

window.onload = main;

