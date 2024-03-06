import { useEffect, useState } from "react";
import { API_OPTIONS, API_URL } from "./constants";


const useTrendingCoins = () => {

    const [trendingCoins, setTrendingCoins] = useState([]);

    
      const getTrendingCoins = async () => {
        const response = await fetch(
              API_URL + "search/trending",
              API_OPTIONS
            );
        // const response = await fetch(
        //   "https://mocki.io/v1/a1ed1de7-b584-4106-8dca-8e08f0d9e4e9"
        // );
        const details = await response.json();
        setTrendingCoins(details?.coins);
      };
    
      useEffect(() => {
        getTrendingCoins();
      }, []);

    return trendingCoins;

}


export default useTrendingCoins;