
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();

function renderCalender(today) {

year = today.getFullYear();
month = today.getMonth();
date = today.getDate();
day = today.getDay();

//전달 마지막 날짜,요일
const preMonthLastDate = new Date(year, month, 0);
const prevDate = preMonthLastDate.getDate(); //전달 마지막 날짜
const prevDay = preMonthLastDate.getDay();   //전달 마지막 요일

//이번달 날짜,요일
const thisMonthLastDate = new Date(year, month + 1, 0);
const thisDate = thisMonthLastDate.getDate();    //이번달 마지막 날짜
const thisDay = thisMonthLastDate.getDay();      //이번달 마지막 요일

const calendar = document.querySelector('.grid-dateBoard');
calendar.innerHTML = '';

//전달 날짜표시
for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
    calendar.innerHTML = calendar.innerHTML + `<div class="prev day" id="${year}.${month}.${i}">` + i + '</div>'
}
//이번달 날짜표시
for (let i = 1;  i <= thisDate; i++) {
    calendar.innerHTML = calendar.innerHTML + `<div class="this day" id="${year}.${month+1}.${i}">` + i + '</div>'
}
//다음달 날짜표시
for (let i = 1; i <= 7 - thisDay; i++) {
    calendar.innerHTML = calendar.innerHTML + `<div class="next day id="${year}.${month+2}.${i}"">` + i + '</div>'
}

const title = document.querySelector('.dateTitle');
title.innerText = `${year}년 ${month+1}월`;

}

renderCalender(today);

document.querySelector(`.prevDay`).onclick = () => {
    let thisMonth = new Date(year, month - 1, 1);    
    renderCalender(thisMonth);
    }

document.querySelector(`.nextDay`).onclick = () => {
    let thisMonth = new Date(year, month + 1, 1);    
    renderCalender(thisMonth);
    }

const theDay = document.querySelectorAll('.this');
theDay[date-1].classList.add('today');


const clicked = document.querySelectorAll('.day');
let log = document.querySelector('.log');  
log.innerHTML = `${year}.${month+1}.${date}`;
//날짜배열에foreach로 이벤트리스너 달기
clicked.forEach((x) => {x.addEventListener('click', () => {
    log.innerHTML = `${x.id}`;       
  })});

  
/*
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()  Get hour (0-23)
*/