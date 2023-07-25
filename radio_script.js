// Get all the radio buttons
const radios = document.querySelectorAll('.color-radio');
let selectedRadio = null;

// Add a click event listener to each radio button
radios.forEach(radio => {
    radio.addEventListener('click', () => {
        if (radio === selectedRadio) {
            // If the clicked radio button is already selected, deselect it
            radio.checked = false;
            selectedRadio = null;
        } else {
            // If the clicked radio button is not selected, select it
            selectedRadio = radio;
        }
    });
});


let radio_ns = {
    options: radios,
    get_selected_color: function() {
        for(let i = 0; i < radios.length; i++){
            if(radios[i] === selectedRadio){
                return radios[i].id;
            }
        }
        return getCustomWhitishRGB();
    }
};
