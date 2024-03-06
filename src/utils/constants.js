const API_URL = "https://api.coingecko.com/api/v3/";

const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-api-key": process.env.API_KEY,
    },
  };


export {
    API_URL,
    API_OPTIONS
}