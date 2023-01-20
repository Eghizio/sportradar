import data from "../data/dataS1.json";

const stepOneData = data.schedules
  .map(({ sport_event_status, sport_event }, i) => ({
    id: i + 1,
    teamHome: sport_event.competitors[0].name,
    teamAway: sport_event.competitors[1].name,
    score: sport_event_status.status === "closed"
      ? `${sport_event_status.home_score}:${sport_event_status.away_score}`
      : "postponed"
  }));

export default stepOneData;