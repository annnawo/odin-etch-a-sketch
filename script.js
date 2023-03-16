const slider = document.querySelector('.slider');
slider.addEventListener('click', () => {
    let sliderValue = slider.value;
    console.log(sliderValue);
    return sliderValue;
} );