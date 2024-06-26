// fetch("https://jsonplaceholder.typicode.com/posts").
// then((response)=>response.json()).
// then((data)=>console.log(data)).
// catch((err)=>console.log("Error: ",err))


//defining variables needed
let inputvalue = document.querySelector(".search-box");
let button = document.querySelector(".button");
let temp = document.querySelector(".current .temp");
let area = document.querySelector(".location .city");
let lattitude = document.querySelector(".location .lat")
let longitude = document.querySelector(".location .long")

let description = document.querySelector(".current .weather");
let date = document.querySelector(".date");

//adding event listener for button click and enter key press
button.addEventListener("click", fetchdata );
inputvalue.addEventListener("keypress",function(e){
  if(e.key ==="Enter")
    {
      button.click();
    }
});

//fetchdata function to fetch value from weather api
function fetchdata()
{
  fetch(
    `https://weather-api99.p.rapidapi.com/weather?city=${inputvalue.value}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8673f75d34msh0d6ec9d695703fbp17de34jsn3e0f177def28",
        "X-RapidAPI-Host": "weather-api99.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => console.log("Error: ", err));
}

//display data function to edit the inner HTML for displaying values
const displayData = (weather) => {
  console.log(weather);
  area.innerHTML = `${weather.name}, ${weather.sys.country}  `;
  lattitude.innerHTML = `Lattitude: ${weather.coord.lat}`;
  longitude.innerHTML = `Longitude: ${weather.coord.lon}`;
  temp.innerHTML = `${ Math.round( (weather.main.temp - 273.15) * 100) / 100  } °C `;  
  description.innerHTML = `${weather.weather[0].description}`;

  let now = new Date();
  date.innerHTML = datebuilder(now);
};

//datebuilder function to build and display current date
function datebuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} , ${date} ${month} ${year}`;
}

//Session notes
//to get data : get
//change data

// const url = 'https://weather-api99.p.rapidapi.com/weather?city=%3CREQUIRED%3E';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8673f75d34msh0d6ec9d695703fbp17de34jsn3e0f177def28',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


//try adding loader
/// iframe
// unsplashapi
// pinterest 
// pexels
// 


