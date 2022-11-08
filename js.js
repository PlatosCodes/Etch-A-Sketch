const container = document.querySelector(".container");

for (let i=0; i < 256; i++){
const div = document.createElement("div");
container.appendChild(div);}

boxes = document.querySelectorAll('div');
boxes.forEach((x) => {
    x.addEventListener('mouseover', () => {
        x.style.backgroundColor = 'red';
    })
})