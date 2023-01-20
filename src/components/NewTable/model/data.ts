// File structure is temporary
import data from "../../../data/dataS1.json";

export type GamesResponse = typeof data
export type SportEvent = typeof data.schedules[number];

export interface Score {
  half: number;
  full: number;
};

export interface Team {
  id: string;
  name: string;
  score: Score;
};

export type GameStatus = "closed" | "postponed";

export type Winner = null | { id: string; name: string };

export type Game = {
  id: string;
  date: string;
  stadium: string;
  status: GameStatus;
  winner: Winner;
  team: {
    home: Team;
    away: Team;
  },
};



const toStatus = (status: string): GameStatus => {
  if(status === "closed" || status === "postponed") return status;
  throw new Error("Invalid status");
};

const getScore = (status: GameStatus, score = 0): number => status === "postponed" ? 0 : score;

// toModel
export const sportEventToGame = (sportEvent: SportEvent): Game => {
  const { id, start_time, venue, competitors } = sportEvent.sport_event;
  const { winner_id, period_scores, home_score, away_score } = sportEvent.sport_event_status;
  
  const status = toStatus(sportEvent.sport_event_status.status);
  
  const [homeTeam, awayTeam] = competitors.map(({ id, name }) => ({ id, name }));

  const home = {
    ...homeTeam,
    score: {
      half: getScore(status, period_scores?.[0].home_score),
      full: getScore(status, home_score),
    }
  };

  const away = {
    ...awayTeam,
    score: {
      half: getScore(status, period_scores?.[0].away_score),
      full: getScore(status, away_score),
    }
  };

  const winner = !winner_id
    ? null
    : home.id === winner_id ? homeTeam : awayTeam;

  return {
    id,
    date: start_time,
    stadium: venue.name,
    status,
    team: { home, away },
    winner,
  }
};

// export const games = data.schedules.map(sportEventToGame);
