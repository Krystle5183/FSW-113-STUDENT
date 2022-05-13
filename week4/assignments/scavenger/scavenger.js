document.getElementById('submit').addEventListener('click', combineLists);
function combineLists() {
    let scav0 = document.getElementById('scavenger-0').value;
    let scav0Array = [scav0];
    let scav1 = document.getElementById('scavenger-1').value;
    let scav1Array = [scav1];
    let scav2 = document.getElementById('scavenger-2').value;
    let scav2Array = [scav2];
    let scav3 = document.getElementById('scavenger-3').value;
    let scav3Array = [scav3];
    let combinedArrays = [...scav0Array, ...scav1Array, ...scav2Array, ...scav3Array];
    console.log(combinedArrays);
    combinedArrays.sort();
    let link = document.getElementById('AllItems');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = combinedArrays;
    link.append(newDiv);
};

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}