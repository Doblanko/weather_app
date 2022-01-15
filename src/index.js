import View from './view';

const apiKey = 'af005ed02e107d844f440f72136f435d';

const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  );
  const weatherData = await response.json();
};

const App = (() => {
  const initializeApp = () => {
    const body = document.querySelector('body');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    body.append(mainContent);

    View.initializeView();
  };

  return { initializeApp };
})();

App.initializeApp();

getWeather('edmonton');
