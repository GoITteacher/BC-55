export function getUsersPosts(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts?';
  const PARAMS = new URLSearchParams({
    userId: userId,
    limit: 5,
    page: 2,
    name: '&*^',
  });

  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url, {
    headers: {
      test: 123,
      tetawdw: 2345,
      srgs: 345,
    },
  }).then(res => {
    return res.json();
  });
}
