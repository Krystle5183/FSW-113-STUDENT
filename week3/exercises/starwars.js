let queryType, itemID;

function fetchData() {

    queryType = document.querySelector("#queryType").value;
    itemID = document.querySelector("#itemID").value;
    getFromSWAPI(queryType, itemID);
}

function getFromSWAPI() {
  
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
        .then(response => response.json())
        .then(data => updateInfo(data))
        .catch(err => console.warn(err));
}

function updateInfo(data) {

    const keys = Object.keys(data);
    document.querySelector("#dataLabel1").textContent = keys[0];
    document.querySelector("#dataLabel2").innerText = keys[5];
    document.querySelector("#dataValue1").innerText = data[keys[0]];
    document.querySelector("#dataValue2").innerText = data[keys[5]];
    checkQueryType()
}

function checkQueryType() {
    
    if (queryType == "people") return true;

    else return false
}