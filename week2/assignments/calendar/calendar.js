document.getElementById('go').addEventListener('click', printCalendar);
function printCalendar(){
    var selectedYear = document.getElementById('year');
    var selectedMonth = document.getElementById('month');
   
    selectedYear = parseInt(selectedYear.value);
   
    selectedMonth = parseInt(selectedMonth.value);

const today = new Date(`${selectedMonth + 1}/1/${selectedYear}`);

const month = today.getMonth();

let days;
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
};

let calendarDays = document.getElementById('calendarDays');
calendarDays.innerHTML = ' ';
let x;
const weekday = today.getDay()

for (x = 0; x < weekday; x++){
    calendarDays.innerHTML += "<div class='blankDay'>&nbsp;</div>";
};

let dt = 0;
do {
    dt++;
    calendarDays.innerHTML += `<div class='calendarCell'>${dt}</div`;
} while ( dt < days);

const monthName = today.toLocaleDateString('default', {month:'long'});
const year = today.getFullYear();
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`;
const remainder = (7 - ((x + dt) % 7));
let y = 0;
while ( y < remainder) {
    calendarDays.innerHTML += "<div class='blankDay'>&nbsp;</div>";
    y++;
}; 
};

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let select = document.getElementById('month');
for (let i = 0; i < months.length; i++){
    let newOptions = document.createElement('option');
    newOptions.innerHTML = months[i];
    newOptions.setAttribute('value', months.indexOf(months[i]));
    select.append(newOptions);
};
printCalendar();
