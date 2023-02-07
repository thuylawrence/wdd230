
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const townName = "Hanoi";
const apiKey = "d3dbafb2f2288266046409ab37fc5787"
const cnt = "3"
const url = `//api.openweathermap.org/data/2.5/forecast/daily?q=${townName}&cnt=${cnt}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))

async function apiFetch1() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayData(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayData(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc );
    weatherIcon.setAttribute('alt',desc );
    captionDesc.textContent = `${desc}`;
  }
  
  apiFetch1();