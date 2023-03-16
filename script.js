const slider = document.querySelector('.slider');
let sliderValue = slider.value;

const gridContainer = document.querySelector('#gridContainer');
// const gridHolding = document.createElement('div');
function gridCreation(sliderValue) {
    const gridHolding = document.createElement('div');
    for (let i=0; i < (sliderValue*sliderValue); i++) {
        const gridDiv = document.createElement('div');
        console.log(`here`);
        gridDiv.style.cssText = 'border-style: dotted; border-width: 10px; border-color: black';
        gridHolding.appendChild(gridDiv);
    } 
    gridContainer.appendChild(gridHolding);
}

gridCreation(sliderValue);

slider.addEventListener('click', () => {
    newSliderValue = slider.value;
    console.log(sliderValue);
    if (newSliderValue !== sliderValue) {
        gridContainer.removeChild(gridHolding);
        gridCreation(sliderValue);
        return sliderValue;
    }
} );
