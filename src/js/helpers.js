export function saveToLS(key, value) {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

export function loadFromLS(key) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data;
  } catch {
    return jsonData;
  }
}
