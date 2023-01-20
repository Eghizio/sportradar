import { TableHeader } from "./TableHeader";
import { TableTitle } from "./TableTitle";
import { TableRow } from "./TableRow";
// Data
import { tableHeaders } from "./model/tableHeaders";
// import { games } from "./model/data";
import { useGames } from "./model/useGames";

export const NewTable = () => {
  const { loading, error, games } = useGames();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Failed to load the games</h1>
  // IDK how to type it properly :/ just use RTQ tbh
  if (!games) return <h1>Failed to load the games</h1>

  return (
    <section className="flex flex-col flex-grow pb-6">
      <TableTitle>Table of results</TableTitle>

      <table className="border mx-auto text-center table-auto">
        <TableHeader headers={tableHeaders} />

        <tbody>
          {games.map(game => <TableRow key={game.id} game={game}/>)}
        </tbody>
      </table>
    </section>
  );
};