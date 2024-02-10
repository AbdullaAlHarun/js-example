// option 1 
//    <button onclick="console.log(4)">click me</button>
//  <!-- <button onclick="document.body.style.backgroundColor='red'" >Hey Hey</button> -->

//option: 2 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
document.body.style.backgroundColor = 'purple';
}

//option: 4 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option 4 another 
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

//option 5 final 

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
