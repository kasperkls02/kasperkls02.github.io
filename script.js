
function Home() {
    $("#include").load("pages/Home.htm");
}
function About() {
    $("#include").load("pages/About.htm");
}
function randomnote() {
    document.getElementById('include').innerHTML = "Halløj";
    $("#include").load("music/random-note.html");
    document.getElementById('include').innerHTML = "Halløj";
}
