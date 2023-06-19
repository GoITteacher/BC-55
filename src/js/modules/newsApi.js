const BASE_URL = 'https://free-news.p.rapidapi.com/v1';

export class NewsAPI {
  page = 1;
  page_size = 20;
  query = null;

  getArticles() {
    const END_POINT = '/search';

    const PARAMS = new URLSearchParams({
      q: this.query,
      page: this.page,
      page_size: this.page_size,
    });

    const OPTIONS = {
      headers: {
        'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      },
    };

    const URL = `${BASE_URL}${END_POINT}?${PARAMS}`;
    this.page++;

    if (!this.query) {
      // return Promise.resolve({
      //   page: 1,
      //   total_pages: 1,
      //   articles: [],
      // });

      const error = new Error('Error query!');
      return Promise.reject(error);
    }
    return fetch(URL, OPTIONS).then(res => {
      return res.json();
    });
  }
}
