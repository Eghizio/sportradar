import data from "../../utils/data_step_two";
import { TdCell } from "./TdCell";

export const TableRow = () => {
  // const winClass = "bg-green-500";
  const lostClass = "bg-red-500";
  // const drawClass = "bg-orange-500";
  //
  function getColorByResult() {
    //   if (e.cellId === e.winnerId) return winClass;
    //   if (e.winnerId === "draw") return drawClass;
    return lostClass;
  }
  return (
    <>
      {data.map((e) => (
        <tr key={e.id}>
          <TdCell
            className={`${getColorByResult()}`}
            cellText={e.matchDate}
            cellId=""
          />
          <TdCell
            className={`${getColorByResult()}`}
            cellText={e.stadiumName}
            cellId=""
          />
          <TdCell
            className={`${getColorByResult()}`}
            cellText={e.teamHome}
            cellId={e.teamHomeId}
          />
          <TdCell
            className={`${getColorByResult()}`}
            cellText={e.teamAway}
            cellId={e.teamAwayId}
          />
          <TdCell
            className={`${getColorByResult()}`}
            cellText={`${e.firstHalfScore[0].homeScore}:${e.firstHalfScore[0].awayScore}`}
            cellId=""
          />
          <TdCell
            className={`${getColorByResult()}`}
            cellText={`${e.finalScore[0].homeScore}:${e.finalScore[0].awayScore}`}
            cellId=""
          />
        </tr>
      ))}
    </>
  );
};
