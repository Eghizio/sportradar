interface Props {
  children: string;
}

export const TableTitle = ({ children }: Props) => (
  <div className="text-center">
    <h3 className="mx-auto p-2 my-3 text-xl uppercase">
      {children}
    </h3>
  </div>
);
