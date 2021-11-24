import baseUrl from "../BaseUrlConfig";
export default function postAPI(url, payload) {
  fetch(`${baseUrl}${url}`, {
    method: payload.method,
    data: payload,
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      } else {
        return response.json();
      }
    })
    .then((data) => {})
    .catch((err) => {});
}
