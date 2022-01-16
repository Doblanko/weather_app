import './styles.css';
import View from './view';
import Controller from './controller';



const App = (() => {
  const initializeApp = () => {
    const body = document.querySelector('body');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    body.append(mainContent);

    View.initializeView();
    Controller.initializeView();

    // default search
    Controller.searchWeather('Edmonton')

  };

  return { initializeApp };
})();

App.initializeApp();
