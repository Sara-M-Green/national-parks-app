'use strict';

const apiKey = 'CAnOeGL6kTbEdNxVW2AVsWPK828Yf4tlXtZZKLvp'; 
const searchURL = 'https://developer.nps.gov/api/v1/parks';


function formatQueryParams(params) { 
  const queryItems = Object.keys(params) 
    .map(key => `${key}=${params[key]}`) 
  return queryItems.join('&'); 
}

function findNatlParks(searchState, maxResults) {
    console.log(searchState)
  const params = {
    stateCode: searchState,
    limit: maxResults,
    api_key: apiKey
  }

  const queryString = formatQueryParams(params)
  
  const url = searchURL + '?' + queryString;
    console.log(url)
    console.dir(params)
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
    // if there are previous results, remove them
    console.log(responseJson);
    $('#js-results-list').empty();
    // // iterate through the items array
    for (let i = 0; i < responseJson.data.length; i++){
    // for each object in the data 
    //array, add a list item to the results 
    //list with the full name, description,
    //and website URL
    $('#js-results-list').append(
        `<li><h3><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h3>
        <p>${responseJson.data[i].description}</p>
        </li>`
      )};
    //display the results section  
    $('#js-results').removeClass('hidden');
};

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchState = $('#state-input').val();
    const state = searchState.join(",");
    const maxResults = $('#js-max-results').val();
    findNatlParks(state, maxResults);
  });
}

$(watchForm);