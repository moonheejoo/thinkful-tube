const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi (search, callback) {
  const query = {
    q: `${search} in:name`,
    per_page: 5
  }
  $.getJSON(GITHUB_SEARCH_URL, query, callback);search
}

function renderResult(result) {
  return `
    <div>
      <h2>
      <a class="js-result-name" href="${result.html_url}" target="_blank">$result.name}</a> by <a class="js-user-name" href="${result.owner.html.url}" target="_blank">${result.owner.login}</a></h2>
      `;

      function displayYouTubeSearchData(data) {
        const results = data.items.map((item, index) => renderResult(item));
        $('.js-search-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        getDataFromApi(query,displayYouTubeSearchData);
      });
  }

  $(watchSubmit);
