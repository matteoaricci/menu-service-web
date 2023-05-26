import { ErrorResponse, ResponseHandler } from "./fetchModels";

async function handleNotOk(response: Response): Promise<ErrorResponse | void> {
  const errorMessage = (await response.json()) as ErrorResponse;
  return Promise.reject(errorMessage);
}

function handleResponse(response: Response) {
  if (response.ok) {
    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");
    if (isJson) {
      return response.json();
    }
  } else {
    handleNotOk(response);
  }
}

function baseFetch<T>(
  method: string,
  url: string,
  responseHandler?: ResponseHandler
): Promise<T> {
  return fetch(url, {
    method: method,
  }).then(responseHandler || handleResponse);
}

export function get<T>(url: string): Promise<T> {
  return baseFetch<T>("GET", url);
}
