const container = document.querySelector('.container');

for (let i=0;i<256;i++){
    let div = document.createElement('div');
    div.style.cssText = "border: 1px solid rgb(53,51,51); height: 40px; width: 40px";
    container.appendChild(div);
}

const boxes = document.querySelectorAll('.container div');
boxes.forEach((y) => {
    console.log(y)
    y.addEventListener('mouseover', () => {
        y.style.backgroundColor = 'black';
    });
})

newDiv = document.createElement('button');
newDiv.textContent = "SHAKE IT UP!";
newDiv.style.margin = '40px';
document.body.style.display = "flex";
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.insertBefore(newDiv, container);