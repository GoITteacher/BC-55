const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_kahhAvSvRRRRi9R0rqhbiEZ6Y65IsmKinK3VpsvDIKdijOYFZA9pkB12pZ1Yd0P2';

// function getCats() {
//   const END_POINT = '/breeds';

//   const params = new URLSearchParams({
//     api_key: API_KEY,
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   return fetch(url).then(res => res.json());
// }

function getCat(id) {
  const END_POINT = '/images/search';

  const params = new URLSearchParams({
    breed_ids: id,
    api_key: API_KEY,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => res.json());
}
