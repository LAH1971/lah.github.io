function showAbout() {
    var aboutHobbies = [
        "img/ai.png",
        "img/dev.png",
        "img/dev2.png",
        "img/dev3.png",
    ];

    var imgHobbies = document.getElementById("hobbiesImg");

    var k = 0;
    var numImg = aboutHobbies.length - 1;

    imgHobbies.src = "img/dev3.png";
    imgHobbies.style.width = "100%";
    imgHobbies.style.height = "100%";

    var timer = setInterval(counter, 4000);

    function counter() {
        if (k == numImg) {
            imgHobbies.src = ` ${aboutHobbies[k]}`;
            imgHobbies.style.width = "100%";
            imgHobbies.style.height = "100%";
            k = 0;
        } else {
            imgHobbies.src = ` ${aboutHobbies[k]}`;
            imgHobbies.style.width = "100%";
            imgHobbies.style.height = "100%";
            k += 1;
        }
    }
}

showAbout();