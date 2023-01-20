interface TdCellProps {
  cellText: string;
  cellId: string;
  className: string;
}
export const TdCell = ({ cellText, cellId, className }: TdCellProps) => {
  return (
    <td id={cellId} className={`border border-slate-300 py-2 ${className} `}>
      {cellText}
    </td>
  );
};
