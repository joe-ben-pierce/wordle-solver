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
        // alert("called the func");
        for(let i = 0; i < radios.length; i++){
            if(radios[i] === selectedRadio){
                let btn_name = radios[i].id;
                if(btn_name === "green-radio-btn"){
                    return hexToRGB(get_css_color_var("--custom-green"));
                } else if(btn_name === "yellow-radio-btn"){
                    return hexToRGB(get_css_color_var("--custom-yellow"));
                } else if(btn_name === "grey-radio-btn"){
                    return hexToRGB(get_css_color_var("--custom-grey"));
                } else {
                    assert(false, `failed to find a match for the radio button with id: ${btn_name}`);
                }
            }
        }
        return getCustomWhitishRGB();
    }
};
