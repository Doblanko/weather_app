import view from './view';

const Controller = (() => {
  const formatData = (weatherData) => {
    const cityName = weatherData.name;
    const currTemp = Math.round(weatherData.main.temp - 273.15);
    const tempHigh = Math.round(weatherData.main.temp_max - 273.15);
    const tempLow = Math.round(weatherData.main.temp_min - 273.15);
    const wind = Math.round(weatherData.wind.speed * 3.6);
    const windDirOptions = [
      'N',
      'NE',
      'NE',
      'E',
      'E',
      'SE',
      'SE',
      'S',
      'S',
      'SW',
      'SW',
      'W',
      'W',
      'NW',
      'NW',
      'N',
    ];
    // convert the wind direction in degrees to a compass direction
    const windDir = windDirOptions[Math.floor(weatherData.wind.deg / 22.5)];
    // eslint-disable-next-line prefer-destructuring
    const condition = weatherData.weather[0].description;

    return { cityName, currTemp, tempHigh, tempLow, wind, windDir, condition };
  };

  const searchWeather = async (city) => {
    const apiKey = 'af005ed02e107d844f440f72136f435d';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    const weatherData = await response.json();
    view.weatherDataView(formatData(weatherData));
  };

  const initializeView = () => {
    // setup event handlers
    // for enter key on search box
    document
      .getElementById('search-box')
      .addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          searchWeather(document.forms['search-form']['search-box'].value);
        }
      });
    // for search button
    document.getElementById('submit-btn').addEventListener('click', () => {
      searchWeather(document.forms['search-form']['search-box'].value);
    });
  };

  return { initializeView, searchWeather };
})();

export default Controller;
