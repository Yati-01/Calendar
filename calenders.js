// document.addEventListener('DOMContentLoaded', () => {
//     const currentDate = document.querySelector('.current-month');
//     const prevNextIcons = document.querySelectorAll('.icons span');
//     const calendarDays = document.getElementById('days');



// let date = new Date();
// let currYear = date.getFullYear();
// let currMonth = date.getMonth();

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const renderCalender = () => {
//     let monthname = months[currMonth];
//     let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
//     let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
//     let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
//     let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
//     let divTag = "";
//     for (let i = firstDayOfMonth; i > 0; i--) {
//         divTag += `<div class = 'inactive'>${lastDateOfLastMonth - i + 1}</div>`;
//     }

//     for (day = 1; day <= lastDateOfMonth; day++) {
//         let isToday = day == date.getDate() && currMonth == new Date().getMonth() && currYear == new Date().getFullYear() ? "active" : "";
//         divTag += `<div class = "${isToday}">${day}</div>`;
// divTag.addEventListener('click', () => openPopup(day));
//     }

//     for (let i = lastDayOfMonth; i < 6; i++) {
//         divTag += `<div class = 'inactive'>${i - lastDayOfMonth + 1}</div>`;
//     }
//     currentDate.textContent = `${monthname} ${currYear}`;
//     calendarDays.innerHTML = divTag;

// }



// const openPopup = (day) => {
//     selectedDate = day;
//     eventDateInput.value = `${currYear}-${currMonth}-${day < 10 ? '0' + day : day}`;
//     eventPopup.style.display = 'flex';
// };

// const closePopupHandler = () => {
//     eventPopup.style.display = 'none';
// };

// const handleEventFormSubmit = (e) => {
//     e.preventDefault();
//     const eventName = eventNameInput.value.trim();
//     if (eventName) {
//         const eventDateFormatted = `${months[currMonth]} ${selectedDate}, ${currYear}`;
//         eventList.innerHTML += `<div><strong>${eventDateFormatted}:</strong> ${eventName}</div>`;
//         eventNameInput.value = '';
//         closePopupHandler();
//     }
// };

// closePopup.addEventListener('click', closePopupHandler);
// eventForm.addEventListener('submit', handleEventFormSubmit);


//     prevNextIcons.forEach(icon => {
//         icon.addEventListener("click", () => {
//             console.log('Icon clicked:', icon.id);
//             if (icon.id === "prev") {
//                 currMonth--;
//                 if (currMonth < 0) {
//                     currMonth = 11;
//                     currYear--;
//                 }
//             } else if (icon.id === "next") {
//                 currMonth++;
//                 if (currMonth > 11) {
//                     currMonth = 0;
//                     currYear++;
//                 }
//             }
//             renderCalender();
//         });
//     });

//     renderCalender();
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const currentDate = document.querySelector('.current-month');
//     const prevNextIcons = document.querySelectorAll('.icons span');
//     const calendarDays = document.getElementById('days');

//     const eventList = document.getElementById('eventList');
//     const eventPopup = document.getElementById('eventPopup');
//     const closePopup = document.querySelector('.popup .close');
//     const eventForm = document.getElementById('eventForm');
//     const eventNameInput = document.getElementById('eventName');
//     const eventDateInput = document.getElementById('eventDate');

//     let date = new Date();
//     let currYear = date.getFullYear();
//     let currMonth = date.getMonth();

//     const months = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//     ];

//     const renderCalender = () => {
//         let monthname = months[currMonth];
//         let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
//         let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
//         let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
//         let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
//         let divTag = "";

//         for (let i = firstDayOfMonth; i > 0; i--) {
//             divTag += <div class='inactive'>${lastDateOfLastMonth - i + 1}</div>;
//         }

//         for (let day = 1; day <= lastDateOfMonth; day++) {
//             let isToday = day == date.getDate() && currMonth == new Date().getMonth() && currYear == new Date().getFullYear() ? "active" : "";
//             divTag += <div class="${isToday}">${day}</div>;
//             divTag.addEventListener('click', () => openPopup(day));
//         }

//         for (let i = lastDayOfMonth; i < 6; i++) {
//             divTag += <div class='inactive'>${i - lastDayOfMonth + 1}</div>;
//         }

//         currentDate.textContent = `${ monthname } ${ currYear }`;
//         calendarDays.innerHTML = divTag;
//     };


//     //Popup code
//     const openPopup = (day) => {
//         selectedDate = day;
//         eventDateInput.value = `${ currYear } -${ currMonth } -${ day < 10 ? '0' + day : day }`;
//         eventPopup.style.display = 'flex';
//     };

//     const closePopupHandler = () => {
//         eventPopup.style.display = 'none';
//     };

//     const handleEventFormSubmit = (e) => {
//         e.preventDefault();
//         const eventName = eventNameInput.value.trim();
//         if (eventName) {
//             const eventDateFormatted = `${ months[currMonth]} ${ selectedDate }, ${ currYear }`;
//             eventList.innerHTML += <div><strong>${eventDateFormatted}:</strong> ${eventName}</div>;
//             eventNameInput.value = '';
//             closePopupHandler();
//         }
//     };


//     closePopup.addEventListener('click', closePopupHandler);
//     eventForm.addEventListener('submit', handleEventFormSubmit);



//     prevNextIcons.forEach(icon => {
//         icon.addEventListener("click", () => {
//             console.log('Icon clicked:', icon.id);

//             if (icon.id === "prev") {
//                 currMonth--;
//                 if (currMonth < 0) {
//                     currMonth = 11;
//                     currYear--;
//                 }
//             } else if (icon.id === "next") {
//                 currMonth++;
//                 if (currMonth > 11) {
//                     currMonth = 0;
//                     currYear++;
//                 }
//             }
//             renderCalender();
//         });
//     });

//     renderCalender();
// });


//DOMContentLoaded ensure that the HTML has fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', () => {
    const currentDate = document.querySelector('.current-month');
    const prevNextIcons = document.querySelectorAll('.icons span');
    const calendarDays = document.getElementById('days');


    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth(); //extracts the current month (0-11, where 0 is January).

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const renderCalender = () => {
        let monthname = months[currMonth];
        let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
        let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        let divTag = "";

        for (let i = firstDayOfMonth; i > 0; i--) {
            divTag += `<div class='inactive'>${lastDateOfLastMonth - i + 1}</div>`;
        }//This loop generates the "inactive" days from the previous month that fill the first row of the calendar

        for (let day = 1; day <= lastDateOfMonth; day++) {
            let isToday = day == date.getDate() && currMonth == new Date().getMonth() && currYear == new Date().getFullYear() ? "active" : "";
            divTag += `<div class="${isToday} " id = "${day}">${day}</div>`;
        }//It checks if the current day is today; if so, it assigns the class "active" to that day.
        
        for (let i = lastDayOfMonth; i < 6; i++) {
            divTag += `<div class='inactive'>${i - lastDayOfMonth + 1}</div>`;
        }//generates "inactive" days for the next month that fill out the last row of the calendar.
        
        currentDate.textContent = `${ monthname } ${ currYear }`;//text content of current date displays month and year
        calendarDays.innerHTML = divTag;
    };

    prevNextIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            console.log('Icon clicked:', icon.id);

            if (icon.id === "prev") {
                currMonth--;
                if (currMonth < 0) {//checks if currMonth has gone below 0 (i.e., the previous month was December of the previous year):
                    currMonth = 11;
                    currYear--;
                }
            } else if (icon.id === "next") {
                currMonth++;
                if (currMonth > 11) {//checks if currMonth has gone above 11 (i.e., the next month is January of the next year):
                    currMonth = 0;
                    currYear++;
                }
            }
            renderCalender();
        });
    });

    renderCalender();
});