function Home() {
    $("#include").load("pages/Home.htm");
}

function About() {
    $("#include").load("pages/About.htm");
}

function randomnote() {
    $("#include").load("music/random-note.html");
}

function beregnere() {
    $("#include").load("beregnere/beregnere.html");
}

function addition_site() {
    $("#include").load("beregnere/math/addition.html");
}



calculate = function()
{
    var resources = document.getElementById('a1').value;
    var minutes = document.getElementById('a2').value;
    document.getElementById('a3').value = parseInt(resources)+parseInt(minutes);
}
