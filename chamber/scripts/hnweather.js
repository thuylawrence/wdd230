
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const townName = "Hanoi";
const apiKey = "d3dbafb2f2288266046409ab37fc5787"
const cnt = "3"
const url = `//api.openweathermap.org/data/2.5/forecast?q=${townName}&appid=${apiKey}&units=imperial`;

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
        listfivedays(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayData(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src',iconsrc );
    weatherIcon.setAttribute('alt',desc );
    captionDesc.textContent = `${desc}`;
  }
  function listfivedays(data) {
    const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const filter = data.list.filter(item => item.dt_txt.includes('00:00:00'))
    console.log(filter)
  filter.forEach ((forecast,index) => {
    
      index += 1;
      document.querySelector(`#day${index}temp`).innerHTML=`${forecast.main.temp}&deg;F`
      const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      
      const des = forecast.weather[0].description;

      
      document.querySelector(`#weather-icon${index}`).setAttribute('src',icon);
      
      document.querySelector(`#des${index}`).textContent=`${des}`
      document.querySelector(`#weather-icon${index}`).setAttribute('alt',des);
      
    });

  }
  apiFetch1();