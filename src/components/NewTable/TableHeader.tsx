interface Props {
  headers: { id: number; name: string; }[];
}

export const TableHeader = ({ headers }: Props) => (
  <thead>
    <tr>
      {headers.map(({ id, name }) => (
        <th key={id} className="border border-slate-300 py-2">
          {name}
        </th>
      ))}
    </tr>
  </thead>
);
