const currentDate = document.querySelector('.current-month');
const prevNextIcons = document.querySelectorAll('.icons span');
const calendarDays = document.getElementById('days');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const renderCalender = () => {
    let monthname = months[currMonth];
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth+1, 0).getDate();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    let divTag = "";
    for (let i = firstDayOfMonth; i > 0; i--){
        divTag += `<div class = 'inactive'>${lastDateOfLastMonth - i + 1}</div>`;
    }
    for (day = 1; day <= lastDateOfMonth; day++){
        let isToday =  day == date.getDate() && currMonth == new Date().getMonth() 
            && currYear == new Date().getFullYear() ? "active" : "";
        divTag += `<div class = "${isToday}">${day}</div>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
        divTag += `<div class = 'inactive'>${i - lastDayOfMonth + 1}</div>`;
    }
    currentDate.textContent = `${monthname} ${currYear}`;
    calendarDays.innerHTML = divTag;

}

renderCalender();

// prevNextIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         currMonth = (icon.id == "prev" ? currMonth - 1 : currMonth + 1);
//         renderCalendar();
//     });
// });
prevNextIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log('Icon clicked:', icon.id);
        if (icon.id === "prev") {
            currMonth--;
            if (currMonth < 0) {
                currMonth = 11;
                currYear--;
            }
        } else if (icon.id === "next") {
            currMonth++;
            if (currMonth > 11) {
                currMonth = 0;
                currYear++;
            }
        }
        renderCalender();
    });
});