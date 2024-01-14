const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ead788bde7msh0be1a0efd37ea9cp1b0c68jsnb6fdab435df4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Vancouver',options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        humidity3.innerHTML = response.humidity
        max_temp3.innerHTML = response.max_temp
        min_temp3.innerHTML = response.max_temp
        temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London',options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        humidity4.innerHTML = response.humidity
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.max_temp
        temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo',options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        humidity5.innerHTML = response.humidity
        max_temp5.innerHTML = response.max_temp
        min_temp5.innerHTML = response.max_temp
        temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
    })
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New Delhi',options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        humidity6.innerHTML = response.humidity
        max_temp6.innerHTML = response.max_temp
        min_temp6.innerHTML = response.max_temp
        temp6.innerHTML = response.max_temp
        wind_speed6.innerHTML = response.wind_speed
    })


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("New York")



