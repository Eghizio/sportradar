import { TableHeader } from "./TableHeader";
import { TableTitle } from "./TableTitle";
import { TableRow } from "./TableRow";
// Data
import { tableHeaders } from "./model/tableHeaders";
import { games } from "./model/data";

export const NewTable = () => {
  return (
    <section className="flex flex-col flex-grow pb-6 ">
      <TableTitle>Table of results</TableTitle>

      <table className=" border mx-auto text-center table-auto  ">
        <TableHeader headers={tableHeaders} />

        <tbody>
          {games.map(game => <TableRow key={game.id} game={game}/>)}
        </tbody>
      </table>
    </section>
  );
};