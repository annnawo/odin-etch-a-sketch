const slider = document.querySelector('.slider');
let sliderValue = slider.value;

// const gridContainer = document.querySelector('#gridContainer');
// // const gridHolding = document.createElement('div');
// function gridCreation(sliderValue) {
//     const gridHolding = document.createElement('div');
//     for (let i=0; i < (sliderValue*sliderValue); i++) {
//         const gridDiv = document.createElement('div');
//         console.log(`here`);
//         gridDiv.style.cssText = 'border-style: solid; border-width: 1px; border-color: black';
//         gridHolding.appendChild(gridDiv);
//     } 
//     gridContainer.appendChild(gridHolding);
// }

let gridContainer = document.querySelector('#gridContainer');
let gridHolding = document.createElement('div');
gridHolding.setAttribute('id', 'canvas');
let initial = 0;

gridCreation(sliderValue);

function gridCreation(sliderValue) {
    //let gridDivs = gridHolding.querySelectorAll('blocks');
    let gridTest = gridHolding.childElementCount;
    if (gridTest !== 0) {
        console.log(gridTest);
        for (let j=0; j < gridTest; j++) {
            gridHolding.removeChild(gridHolding.childNodes[0]);
    }}
    for (let i=0; i < (sliderValue*sliderValue); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'blocks';
        gridDiv.style.cssText = 'border-style: solid; border-width: 1px; border-color: black';
        gridHolding.appendChild(gridDiv);
    } 
    gridContainer.appendChild(gridHolding);
}

// function gridDeletion(gridHolding) {
//     gridContainer
// }

slider.addEventListener('click', () => {
    let newSliderValue = slider.value;
    console.log(newSliderValue);
    // if (newSliderValue !== sliderValue) {
    //     gridContainer.removeChild(gridHolding);
    gridCreation(newSliderValue);
    sliderValue = slider.value;    
    //}
} );
