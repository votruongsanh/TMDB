import { API_KEY, BASE_URL, BASE_URL_SEARCH } from "./constant";

export const baseUrl = (type, page) => {
  return `${BASE_URL}${type}?api_key=${API_KEY}&language=en-US&page=${page}`;
};

export const urlSearch = (search, page) => {
  return `${BASE_URL_SEARCH}?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}`;
};

export const urlMovieDetail = (id) => {
  return `${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`;
};
