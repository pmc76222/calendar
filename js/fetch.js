
const url =`https://api.openweathermap.org/data/2.5/weather?id=1842025&appid=b85da51aa888a958d05b676821c70cfa&units=metric`;
const surl ='https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=QxgTSZRqU971shtYn63fok7jD2ZPnph%2F7wNxNIETgygZEzziSI7v%2FbOwcx9EW6LV7vssAhXjNU22KucPP54GCw%3D%3D&itmsNm=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90&resultType=json';

/*
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:last-child');
        const temp = document.querySelector('#weather #temp');
        const city = document.querySelector('#weather span:first-child');
        city.innerText = data.name;
        temp.innerText = data.main.temp;
        weather.innerText = data.weather[0].main;

    });

    */
async function getweather() {
    let response = await fetch(url);
    let data = await response.json();
    const weather = document.querySelector('#weather span:last-child');
    const temp = document.querySelector('#weather #temp');
    const city = document.querySelector('#weather span:first-child');
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    weather.innerText = data.weather[0].main;

}

async function getstock() {
    let response = await fetch(surl);
    let data = await response.json();           
    const price = document.querySelector('#stock span:last-child');     
    const basDt = document.querySelector('#stock #basDt');   
    const stockname = document.querySelector('#stock span:first-child');    
    stockname.innerText = data.response.body.items.item[0].itmsNm;
    basDt.innerText = data.response.body.items.item[0].basDt;
    price.innerText = data.response.body.items.item[0].mkp;
        
}


getweather();
getstock();