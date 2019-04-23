function load(localStorageKey) {
  const stringData = window.localStorage.getItem(localStorageKey);
  let data = null;

  try {
    data = JSON.parse(stringData);
  } catch (e) {}
  console.log( 'load', localStorageKey, data )
  return data;
}

function save(localStorageKey, data) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
  console.log('save', data)
}

export { load, save };
