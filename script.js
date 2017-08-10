(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

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
  var places = document.getElementById('input_pi').value;
  var round_pi = Math.round10(Math.PI, -places);
  document.getElementById('test123').innerHTML = round_pi;
if (document.getElementById('rradius').checked) {
  var radius = document.getElementById('input_1').value;
  document.getElementById('circle_output').innerHTML = '<h2>Output</h2><p>Diameter</p><input id="circle_output_diameter"/><p>Circumference</p><input id="circle_output_circumference"/><p>Area</p><input id="circle_output_area"/>';
  document.getElementById('circle_output_diameter').value = parseFloat(radius)*2;
  document.getElementById('circle_output_circumference').value = parseFloat(radius)*2*parseFloat(round_pi);
  document.getElementById('circle_output_area').value = parseFloat(radius)*parseFloat(radius)*parseFloat(round_pi);
} else if (document.getElementById('rdiameter').checked) {
  var diameter = document.getElementById('input_1').value;
  document.getElementById('circle_output').innerHTML = '<h2>Output</h2><p>Radius</p><input id="circle_output_radius"/><p>Circumference</p><input id="circle_output_circumference"/><p>Area</p><input id="circle_output_area"/>';
  document.getElementById('circle_output_radius').value = parseFloat(diameter)/2;
  document.getElementById('circle_output_circumference').value = parseFloat(diameter)*parseFloat(round_pi);
  document.getElementById('circle_output_area').value = parseFloat(diameter)/2*parseFloat(diameter)/2*parseFloat(round_pi);
} else if (document.getElementById('rcircum').checked) {
  var circumference = document.getElementById('input_1').value;
  document.getElementById('circle_output').innerHTML = '<h2>Output</h2><p>Radius</p><input id="circle_output_radius"/><p>Diameter</p><input id="circle_output_diameter"/><p>Area</p><input id="circle_output_area"/>';
  document.getElementById('circle_output_radius').value = parseFloat(circumference)/2/parseFloat(round_pi);
  document.getElementById('circle_output_diameter').value = parseFloat(circumference)/parseFloat(round_pi);
  document.getElementById('circle_output_area').value = (parseFloat(circumference)/2/parseFloat(round_pi)*parseFloat(circumference)/2/parseFloat(round_pi))*parseFloat(round_pi);
} else if (document.getElementById('rarea').checked) {
  var area = document.getElementById('input_1').value;
  document.getElementById('circle_output').innerHTML = '<h2>Output</h2><p>Radius</p><input id="circle_output_radius"/><p>Diameter</p><input id="circle_output_diameter"/><p>Circumference</p><input id="circle_output_circumference"/>';
  document.getElementById('circle_output_radius').value = Math.sqrt(parseFloat(area)/parseFloat(round_pi));
  document.getElementById('circle_output_diameter').value = Math.sqrt(parseFloat(area)/parseFloat(round_pi))*2;
  document.getElementById('circle_output_circumference').value = Math.sqrt(parseFloat(area)/parseFloat(round_pi))*2*parseFloat(round_pi);

}

}
