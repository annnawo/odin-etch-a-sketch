const slider = document.querySelector('.slider');
let sliderValue = slider.value;

let gridContainer = document.querySelector('#gridContainer');
let gridHolding = document.createElement('div');
gridHolding.setAttribute('id', 'canvas');
gridHolding.className = 'canvasGridTotal';
let initial = 0;
let lastCycle = 0;

let r = document.querySelector(':root');

let inkColor = '#000000';

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
    for (let i=0; i < lastCycle; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'blocks';
        gridDiv.setAttribute('id', `${i}`);
        gridDiv.addEventListener('mouseover', () => {    
            gridDiv.style.cssText = `background-color: ${inkColor}`;  
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
    for (let j=0; j<lastCycle; j++) {
        let gridDivSelect = document.getElementById(j);
        gridDivSelect.style.cssText = 'background-color: #f6f6f6';     
    }
});

let blackInk = document.querySelector('#blackOptionI').addEventListener('click',  () => {
    inkColor = '#000000';
    for (let j=0; j<lastCycle; j++) {
    setInk(inkColor, j);
}});

let gradientInk = document.querySelector('#gradientOptionI').addEventListener('click',  () => {
    for (let j=0; j<lastCycle; j++) {
        if (j%9 === 0) {
            inkColor = '#e2d5df';
        } 
        else if (j%9 === 1) {
            inkColor = '#e5adca';
        } 
        else if (j%9 === 2) {
            inkColor = '#e9d5d8';
        } 
        else if (j%9 === 3) {
            inkColor = '#e7c7d0';
        } 
        else if (j%9 === 4) {
            inkColor = '#d5c4e4';
        } 
        else if (j%9 === 5) {
            inkColor = '#ebabb3';
        } 
        else if (j%9 === 6) {
            inkColor = '#d7b2dc';
        } 
        else if (j%9 === 7) {
            inkColor = '#e59bcc';
        } 
        else if (j%9 === 8) {
            inkColor = '#ccb4db';
        } 
        else if (j%9 === 8) {
            inkColor = '#f4bac1';
        } 
        setInk(inkColor, j);
}})  

let randomInk = document.querySelector('#randomOptionI').addEventListener('click',  () => {
    for (let j=0; j<lastCycle; j++) {
        let newColor ='#';
        for (let m=0; m<6; m++) {
           newColor += Math.floor(Math.random()*10);
        }
        inkColor = newColor;
        newColor = '#';
        setInk(inkColor, j);
}});

// function setInkColor(tile, colorI) {
//     let gridSelect = document.getElementById(tile);
//     gridSelect.style.cssText = 'background-color: pink';
// }

// function setInk(colorI) {
//     for (let j=0; j<lastCycle; j++) {
//         let gridDivSelect = document.getElementById(j);
//         gridDivSelect.addEventListener('mouseover', function() {
//             gridDivSelect.style.cssText = `background-color: ${colorI}`;
//         });  
// }}

function setInk(colorI, k) {
        let gridDivSelect = document.getElementById(k);
        gridDivSelect.addEventListener('mouseover', function() {
        gridDivSelect.style.cssText = `background-color: ${colorI}`;
});  
}