const API_KEY = "226fa56d1fcf43524a1f74a5f6febd23";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    /**
     * 1. fetech : 비동기로 API 호출
     * 2. then : 비동기로 API 호출이 끝나면
     * 3. json : json 형태로 데이터를 호출해라
     * 4. then : json 형태로 데이터 호출 완료되면
     * 5. data : data 값을 읽는다
     */
    fetch(url)
        .then((response) => response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// navigator.geolocation.getCurrentPosition(success, error);