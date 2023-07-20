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

function getCustomeWhitish(){
    let result = getComputedStyle(root).getPropertyValue('--custom-whitish');
    assert(result, 'could not find the --custom-whitish');
    return result;
}

