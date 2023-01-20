import { Game, GamesResponse, sportEventToGame } from "./data";
import { useFetch } from "./useFetch";
import data from "../../../data/dataS1.json";
import { useEffect, useState } from "react";

// export const useGames = () => {
//   const games = data.schedules.map(sportEventToGame);

//   return { loading: false, error: null, games };
// };

// Mocked
const sleep = (ms: number) => new Promise(resolve => setTimeout(() => {
  resolve(null)
}, ms));

export const useGames = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      return (Math.random() > 0.95)
        ? setError(new Error("Failed to fetch games"))
        : setGames(data.schedules.map(sportEventToGame));
    }, 1337);

    () => { clearTimeout(timeout); };
  }, []);

  return { loading, error, games };
};

// With API
// export const useGames = () => {
//   const { loading, error, data } = useFetch<GamesResponse>("/some/api/for/games");

//   const games = data ? data.schedules.map(sportEventToGame) : data;

//   return { loading, error, games };
// };
