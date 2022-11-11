const apikey = `e90e71ded968818f52f8b5f2ed6d77c1`
const form = document.querySelector("form");
const search = document.querySelector('#search');

const img = document.querySelector('#img');

const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}&units=metric`
    const response = await fetch(url);
    const myJson = await response.json();
    return getData(myJson);


}
const getData = (myJson) => {

    img.innerHTML = `
<div>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn85VsPfgAk-rOTwgXJzSvPkJzXCj56XmQsdNZugzX&s">
</div>
   <div>
       <h2>${myJson.main.temp}°C</h2>
       <h3>Clear</h3>
   </div>
       `
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value);
        event.preventDefault();
    }
)





// const key = e90e71ded968818f52f8b5f2ed6d77c1;