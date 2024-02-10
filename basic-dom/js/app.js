const allHeading = document.getElementsByTagName('h1')// console.log(bodyElement.);

for (const h1 of allHeading) {

    // console.log(h1.innerText);
    
}

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}

// const fruitTitle =  document.getElementById('fruits-title');
//  fruitTitle.innerText = 'Fruits change by JS'
//  console.log(fruitTitle)

const fruitTitle = document.querySelector('#fruits-title')

fruitTitle.getAttribute('class');
console.log(fruitTitle)

document.getElementById('Places').style.color='green';

const fullList = document.getElementsByClassName('fruits-container')[0].innerHTML
console.log(fullList);

const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border ='2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray'; 
}