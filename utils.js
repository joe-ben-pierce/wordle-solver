const root = document.documentElement;

function assert(condition, message = "generic msg"){
    if(!condition){
        alert(`assertion failed: ${message}`);
    }
}

function getElemById(id){
    let result = document.getElementById(id);
    assert(result, `failed to get element with id '${id}'`);
    return result;
}

function getCustomWhitishHex(){
    let result = getComputedStyle(root).getPropertyValue('--custom-whitish');
    assert(result, 'could not find the --custom-whitish');
    return result;
}


function hexToRGB(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    }
    // 6 digits
    else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    return "rgb("+ +r + ", " + +g + ", " + +b + ")";
}

function getCustomWhitishRGB(){
    return hexToRGB(getCustomWhitishHex());
}

function lst_to_txt(lst){
    let parts = [];
    for(const item of lst){
        parts.push(`${item}, `);
    }
    return parts.join('');
}
