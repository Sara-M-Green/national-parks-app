'use strict';

// put your own value below!
const apiKey = 'CAnOeGL6kTbEdNxVW2AVsWPK828Yf4tlXtZZKLvp'; 
const searchURL = 'https://developer.nps.gov/api/v1/parks';


// function formatQueryParams(params) {
//   const queryItems = Object.keys(params)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//   return queryItems.join('&');
// }


// function getYouTubeVideos(query, maxResults=10) {
//   const params = {
//     key: apiKey,
//     q: query,
//     part: 'snippet',
//     maxResults
//   };
//   const queryString = formatQueryParams(params)
//   const url = searchURL + '?' + queryString;

//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(responseJson => console.log(JSON.stringify(responseJson)))
//     .catch(err => {
//       $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     });
// }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchState = $('#state-input').val();
    const maxResults = $('#js-max-results').val();
    // getYouTubeVideos(searchTerm, maxResults);
    console.log(searchState);
    console.log(maxResults);
  });
}

$(watchForm);