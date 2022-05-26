import {nightMode} from "./getDayight.js";
import {localTemp} from "./convertTemp.js";

const temp = document.querySelector("#tempData");
const humidity = document.querySelector("#humidData");
const conditions = document.querySelector("#conditionsData");

document.querySelector('#goBttn').addEventListener('click', () => {
    queryAPI(document.getElementById('city').value);
});

function queryAPI(city) {
    fetchData(city)
        .then(function (data) {
            toLocal(data);
        })
        .catch(function (err) {
            console.warn(err);
        })
}

const fetchData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e7ff02e0b19be8d4ecbbd8a892a19b3`);
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

function toLocal(data) {
    temp.innerText = localTemp(data.main.temp, data.sys.country);
    humidity.innerText = `${data.main.humidity}%`;
    conditions.innerText = data.weather[0].main;
    document.querySelector(".weatherWrapper").style.backgroundColor = nightMode(data);
}