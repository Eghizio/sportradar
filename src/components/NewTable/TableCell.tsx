interface Props {
  children: string;
  className?: string
  // is win/loose/draw
  // postponed?
}

export const TableCell = ({ children, className }: Props) => {
  const styles = "py-2 border border-slate-300" + (" " + (className ?? ""));
  console.log(styles)

  return (
    <td className={styles}>
      {children}
    </td>
  );
};