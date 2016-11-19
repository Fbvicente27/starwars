$('.mostrarPerson').on('click', function() {
	var person = document.querySelector("#personagens");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/' + person.value ,
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura: " + data.height + "<br/>Ano Nasc.: " + data.birth_year +
 "<br/>Genero: " + data.gender + "<br/>";
}});
});

$('.mostrarPlanet').on('click', function() {
	var planeta = document.querySelector("#planetas");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/' + planeta.value ,
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPlanet");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Rotação: " + data.rotation_period + "<br/>Orbital.: " + data.orbital_period +
 "<br/>População: " + data.population + "<br/>";
}});
});

$('.mostrarNave').on('click', function() {
	var nave = document.querySelector("#naves");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/starships/' + nave.value ,
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contNave");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Modelo: " + data.model + "<br/>Fabricante: " + data.manufacturer +
 "<br/>Custo em créditos: " + data.cost_in_credits + "<br/>";
}});
});