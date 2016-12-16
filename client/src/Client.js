function get(url, cb) {
  const request = new Request(url, {
    method: 'GET',
    headers: { 'Content-type': 'application/json'}
  })
  doFetch(request, cb)
}

function post(url, data, cb) {
  const request = new Request(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify(data)
  })
  doFetch(request, cb)
}

function doFetch(request, cb) {
  return fetch(request)
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { get, post };
export default Client;
