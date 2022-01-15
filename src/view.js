// module pattern
const View = (() => {
  const initializeView = () => {
    /* - - - - - Setup the Basic Containers - - - - - */
    const mainContent = document.querySelector('.main-content');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    titleContainer.innerText = 'The Weather App';
    mainContent.append(titleContainer);

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
    searchBox.setAttribute('placeholder', 'Enter City');
    searchBox.setAttribute('autocomplete', 'off');
    searchForm.append(searchBox);

    // submit button
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit';
    submitBtn.setAttribute('type', 'submit')
    submitBtn.classList.add('button');
    submitBtn.setAttribute('id', 'submit-btn');
    searchForm.append(submitBtn);

    formContainer.append(searchForm);

    mainContent.append(formContainer);

    /* - - - - - Weather Results - - - - - */
    const weatherResultsContainer = document.createElement('div')
    weatherResultsContainer.classList.add('weather-results-container')
    mainContent.append(weatherResultsContainer)
  };
  return { initializeView };
})();

export default View;
