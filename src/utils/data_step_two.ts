import data from "../data/dataS1.json";

const stepTwoData = data.schedules.map(
  ({ sport_event_status, sport_event }, i) => ({
    id: i,
    matchDate: sport_event.start_time.slice(0, 10),
    stadiumName: sport_event.venue.name,
    teamHomeId: sport_event.competitors[0].id,
    teamHome: sport_event.competitors[0].name,
    teamAwayId: sport_event.competitors[1].id,
    teamAway: sport_event.competitors[1].name,
    winnerId: sport_event_status.winner_id
      ? `${sport_event_status.winner_id}`
      : "draw",
    finalScore: [
      {
        homeScore:
          sport_event_status.status === "closed"
            ? `${sport_event_status.home_score}`
            : "",
        awayScore:
          sport_event_status.status === "closed"
            ? `${sport_event_status.away_score}`
            : "postponed",
      },
    ],
    firstHalfScore: [
      {
        homeScore: sport_event_status.period_scores
          ? sport_event_status.period_scores[0].home_score
          : "postponed",
        awayScore: sport_event_status.period_scores
          ? sport_event_status.period_scores[0].away_score
          : "",
      },
    ],
  })
);

export default stepTwoData;