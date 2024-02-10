// const placeList = document.getElementById('places-list');
// const li = document.createElement('li');
// li.innerText = 'Norway';
// placeList.appendChild(li);

//where to add 
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'kala Vuna';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'haser mangsho';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);