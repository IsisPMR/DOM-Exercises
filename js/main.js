//dom1.html
//1 Ejercicio
var links = document.getElementsByTagName('a').length;
// Enviar html
var element1 = document.createElement('li');
var li1 = document.createTextNode(links);
element1.appendChild(li1);
document.getElementById('list').appendChild(element1);


//2 Ejercicio
var lastlinks = document.getElementsByTagName('a')[6];
// Enviar html
var element1 = document.createElement('li');
var li2 = document.createTextNode(lastlinks);
element1.appendChild(li2);
document.getElementById('list').appendChild(element1);

//3 Ejercicio
var secondLast = document.getElementsByTagName('a')[5];
// Enviar html
var element1 = document.createElement('li');
var li3 = document.createTextNode(secondLast);
element1.appendChild(li3);
document.getElementById('list').appendChild(element1);

//4 Ejercicio
var wLinks = document.querySelectorAll('a[href="https://wemanconnect.com"]').length;
// Enviar html
var element1 = document.createElement('li');
var li4 = document.createTextNode(wLinks);
element1.appendChild(li4);
document.getElementById('list').appendChild(element1);

//5 Ejercicio
var p2links = document.getElementsByTagName('p')[2];
var p2links2 = p2links.getElementsByTagName('a').length;
// Enviar html
var element1 = document.createElement('li');
var li5 = document.createTextNode(p2links2);
element1.appendChild(li5);
document.getElementById('list').appendChild(element1);

//dom2.html
