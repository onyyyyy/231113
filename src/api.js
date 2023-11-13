const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-kr";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwMGUyZTZhZTI1NjcxNmIzM2JmMGU5NzZjN2U3MiIsInN1YiI6IjY1NGIzYjNiMjg2NmZhMDBmZTAxNzNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eyrBSq1n6-zAMkPkgpWhL7ZF_xN7rGMsDt8YFQlK0DI",
  },
};

export const nowPlayingList = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());
