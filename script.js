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

function cirkel_area_site() {
    $("#include").load("beregnere/math/cirkel_area.html");
}

calculate = function()
{
    var resources = document.getElementById('a1').value;
    var minutes = document.getElementById('a2').value;
    document.getElementById('a3').value = parseFloat(resources)+parseFloat(minutes);
}

calculate_cirkel_area = function()
{
    var radius = document.getElementById('r').value;
    var Area = document.getElementById('Area').value;
    var pi = document.getElementById('pi').value;
if (!pi.match(/\S/))
    pi = 3.141592653589;

if (radius.match(/\S/)) {
    document.getElementById('Area').value = parseFloat(radius)*parseFloat(radius)*parseFloat(pi);
} else if (Area.match(/\S/)) {
    document.getElementById('r').value = Math.sqrt(parseFloat(Area)/parseFloat(pi));
}


}
