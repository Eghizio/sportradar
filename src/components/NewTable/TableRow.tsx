import { TableCell } from "./TableCell";
import { Game } from "./model/data";

interface Props {
  game: Game;
}

// utils
const formatDate = (date: string) => date.slice(0, 10);

const formatScores = ({ team: { home, away }, status }: Game) => {
  // Do we want POSTPONED or just 0:0 and visually indicate that the game was postponed?
  if (status === "postponed") return { half:"POSTPONED", full: "POSTPONED" };

  const half = `${home.score.half} : ${away.score.half}`;
  const full = `${home.score.full} : ${away.score.full}`;

  return { half, full };
};

export const TableRow = ({ game }: Props) => {
  const { date, stadium, status, team: { home, away }, winner } = game;

  const { half, full } = formatScores(game);

  const row = [
    formatDate(date),
    stadium,
    home.name,
    away.name,
    half,
    full,
  ];
  
  const isName = (label: string) => [home.name, away.name].includes(label);

  const applyStyle = (label: string): string | undefined  => {
    if (!isName(label) || status === "postponed") return;
    if (!winner) return "bg-orange-500";
    return label === winner.name ? "bg-green-500" : "bg-red-500";
  };

  return (
    <tr>
      {row.map((label, i) => 
        <TableCell key={i} className={applyStyle(label)}>
          {label}
        </TableCell>
      )}
    </tr>
  );
};
