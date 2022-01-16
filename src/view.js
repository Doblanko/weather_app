// module pattern
const View = (() => {
  const initializeView = () => {
    /* - - - - - Setup the Basic Containers - - - - - */
    const mainContent = document.querySelector('.main-content');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    const title = document.createElement('h1');
    title.innerText = 'The Weather App';
    titleContainer.append(title);
    headerContainer.append(titleContainer);

    /* - - - - - Create search Form - - - - - */
    // container for the form
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    // the form itself
    const searchForm = document.createElement('form');
    searchForm.setAttribute('id', 'search-form');

    // create the label and hide it
    const searchBoxLabel = document.createElement('label');
    searchBoxLabel.setAttribute('for', 'search-box');
    searchBoxLabel.innerHTML = 'Search Box';
    searchBoxLabel.setAttribute('hidden', 'hidden');
    searchForm.append(searchBoxLabel);

    // the search box
    const searchBox = document.createElement('input');
    searchBox.setAttribute('id', 'search-box');
    searchBox.setAttribute('name', 'search-box');
    searchBox.setAttribute('type', 'search');
    searchBox.setAttribute('placeholder', 'Enter City');
    searchBox.setAttribute('autocomplete', 'off');
    searchForm.append(searchBox);

    // submit button
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit';
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('button');
    submitBtn.setAttribute('id', 'submit-btn');
    searchForm.append(submitBtn);

    formContainer.append(searchForm);

    headerContainer.append(formContainer);

    mainContent.append(headerContainer);

    /* - - - - - Weather Results - - - - - */
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weather-container');
    mainContent.append(weatherContainer);
  };

  const clearWeatherDataView = () => {
    document.querySelector('.weather-container').innerHTML = '';
  };

  const weatherDataView = (weatherData) => {
    clearWeatherDataView();

    const weatherContainer = document.querySelector(
      '.weather-container'
    );
    const cityNameTitle = document.createElement('h2');
    cityNameTitle.innerText = weatherData.cityName;
    weatherContainer.append(cityNameTitle);

    const weatherDataContainer = document.createElement('div')
    weatherDataContainer.classList.add('weather-data-container')

    const weatherDataContainerLeft = document.createElement('div')
    weatherDataContainerLeft.classList.add('weather-data-container-left')

    const weatherDataContainerRight = document.createElement('div')
    weatherDataContainerRight.classList.add('weather-data-container-right')

    const temperature = document.createElement('div')
    temperature.classList.add('weather-data')
    temperature.innerHTML = `<strong>Current:</strong> ${weatherData.currTemp} &#176C`
    weatherDataContainerLeft.append(temperature)

    const high = document.createElement('div')
    high.classList.add('weather-data')
    high.innerHTML = `<strong>High:</strong> ${weatherData.tempHigh} &#176C`
    weatherDataContainerLeft.append(high)

    const low = document.createElement('div')
    low.classList.add('weather-data')
    low.innerHTML = `<strong>Low:</strong> ${weatherData.tempLow} &#176C`
    weatherDataContainerLeft.append(low)

    const wind = document.createElement('div')
    wind.classList.add('weather-data')
    wind.innerHTML = `<strong>Wind:</strong> ${weatherData.wind} km/hr ${weatherData.windDir}`
    weatherDataContainerRight.append(wind)

    weatherDataContainer.append(weatherDataContainerLeft)
    weatherDataContainer.append(weatherDataContainerRight)
    weatherContainer.append(weatherDataContainer)


    
  };

  return { initializeView, weatherDataView };
})();

export default View;
