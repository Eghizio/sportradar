import { TableHeader, TableRow, TableTitle, TdCell } from "./index";
import data from "../../utils/data_step_two";
export const Table = () => {
  return (
    <section className="flex flex-col flex-grow pb-6 ">
      <TableTitle tableTitle="Table of results" />
      <table className=" border mx-auto text-center table-auto  ">
        <TableHeader />
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </section>
  );
};
