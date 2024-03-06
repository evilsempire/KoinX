import { useEffect, useState } from "react";


const useTrendingCoins = () => {

    const [trendingCoins, setTrendingCoins] = useState([]);

    const API_OPTIONS = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-api-key": "CG-fsPajWfwSjUmFUcSrn7gSDkD",
        },
      };
    
      const getTrendingCoins = async () => {
        // const response = await fetch(
        //       "https://api.coingecko.com/api/v3/search/trending",
        //       API_OPTIONS
        //     );
        const response = await fetch(
          "https://mocki.io/v1/a1ed1de7-b584-4106-8dca-8e08f0d9e4e9"
        );
        const details = await response.json();
        console.log(details);
        setTrendingCoins(details?.coins);
      };
    
      useEffect(() => {
        getTrendingCoins();
      }, []);

    return trendingCoins;

}


export default useTrendingCoins;