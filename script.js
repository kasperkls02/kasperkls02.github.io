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

function circle_site() {
    $("#include").load("beregnere/math/circle.html");
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
    pi = Math.PI;

if (radius.match(/\S/)) {
    document.getElementById('Area').value = Math.Pow(parseFloat(radius),2)*parseFloat(pi);
} else if (Area.match(/\S/)) {
    document.getElementById('r').value = Math.sqrt(parseFloat(Area)/parseFloat(pi));
}


}

calculate_sphere_area = function(){

	var pi = document.getElementById('pi').value;
	if (!pi.match(/\S/))
		pi = Math.PI;

	Volume = (4/3)*pi*Math.Pow(document.getElementById('r').value,3);
	Circumference = 2*pi*radius;
	surArea = 4*pi*radius;

}





//javascript for /beregnere/math/circle.html

function circle_input_type_radius() {
  document.getElementById('input1').innerHTML = "Radius";
}
function circle_input_type_diameter() {
  document.getElementById('input1').innerHTML = "Diameter";
}
function circle_input_type_circumference() {
  document.getElementById('input1').innerHTML = "Circumference";
}
function circle_input_type_area() {
  document.getElementById('input1').innerHTML = "Area";
}
<!--
function circle_calculate() {
if (document.getElementById('rradius').checked) {
  var radius = document.getElementById('input_1').value;
  document.getElementById('circle_output').innerHTML = '<h2>Output</h2><p>Diameter</p><input id="circle_output_diameter"/><p>Circumference</p><input id="circle_output_circumference"/>';
  document.getElementById('circle_output_diameter').value = parseFloat(radius)*2;
  document.getElementById('circle_output_circumference').value = parseFloat(radius)*2*Math.PI;
} else if (document.getElementById('rdiameter').checked) {

} else if (document.getElementById('rcircum').checked) {

} else if (document.getElementById('rarea').checked) {

}

}
