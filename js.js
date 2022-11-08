// align items on page

document.body.style.display = "flex";
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

// access container
const container = document.querySelector('.container');

//create boxes
function createBoxes(w) {
for (let i=0; i<w*w; i++){
    let div = document.createElement('div');
    div.style.cssText = `border: 1px solid rgb(53,51,51); height: ${640/w}px; width: ${640/w}px`;
    container.appendChild(div);
}
}
//create responsive boxes
function responsiveBoxes() {
const boxes = document.querySelectorAll('.container div');
boxes.forEach((y) => {
    y.addEventListener('mouseover', () => {
        y.style.backgroundColor = 'black';
    });
})
}
//create button
newDiv = document.createElement('button');
newDiv.textContent = "SHAKE IT UP!";
newDiv.style.margin = '40px';

function shakeIt(){
    w = prompt('How many boxes should each side have? Please enter a number less than 100.');
    if (w >= 100) {
        shakeIt();
    }
    else {
    container.replaceChildren();
    createBoxes(w);
    container.style.gridTemplateColumns = `repeat(${w}, ${640/w}px [col-start])`;
    responsiveBoxes();
    }

}

newDiv.onclick = function () { 
    shakeIt()
    };

document.body.insertBefore(newDiv, container);
