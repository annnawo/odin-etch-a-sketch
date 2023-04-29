const slider = document.querySelector('.slider');
let sliderValue = slider.value;

let gridContainer = document.querySelector('#gridContainer');
let gridHolding = document.createElement('div');
gridHolding.setAttribute('id', 'canvas');
gridHolding.className = 'canvasGridTotal';
let initial = 0;
let lastCycle = 0;

let r = document.querySelector(':root');

// const gridVar = window.getComputedStyle(document.querySelector('html'));
// let rowNum = parseInt(gridVar.getPropertyValue('--rowNum'));

gridCreation(sliderValue);

function gridCreation(sliderValue) {
    let gridTest = gridHolding.childElementCount;
    if (gridTest !== 0) {
        for (let j=0; j < gridTest; j++) {
            gridHolding.removeChild(gridHolding.childNodes[0]);
    }}
    r.style.setProperty('--colNum', sliderValue);
    lastCycle = sliderValue*sliderValue;
    for (let i=0; i < (sliderValue*sliderValue); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'blocks';
        gridDiv.setAttribute('id', i);
        gridDiv.addEventListener('mouseover', () => {    
                   gridDiv.style.cssText = 'background-color: yellow';  
        });
        gridDiv.style.cssText = 'border-style: solid; border-width: 1px; border-color: black';
        gridHolding.appendChild(gridDiv);
    } 
    gridContainer.appendChild(gridHolding);
}

slider.addEventListener('click', () => {
    let newSliderValue = slider.value;
    if (sliderValue !== newSliderValue) {
    gridCreation(newSliderValue);
    sliderValue = slider.value;    
    }
} );

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
    console.log('click');
    for (let j=0; j<lastCycle; j++) {
        let gridDivSelect = document.getElementById(j);
        gridDivSelect.style.cssText = 'background-color: pink';  
}
});

gridHolding.style.cssText = 'background-color: pink';

