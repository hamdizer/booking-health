import {
  TableContainer,
  HeaderRow,
  HeaderCell,
  HeaderText,
  BodyContainer,
  BodyRow,
  BodyCell,
  BodyText,
} from "./CustomTable.styles";
export interface TableProps<T> {
  columns: (keyof T)[];
  rows: T[];
}
const CustomTable = <T extends Record<string, any>>({
  columns,
  rows,
}: TableProps<T>) => {
  return (
    <TableContainer>
      <HeaderRow>
        {columns.map((col) => (
          <HeaderCell key={String(col)}>
            <HeaderText>
              {String(col).charAt(0).toLocaleUpperCase() + String(col).slice(1)}
            </HeaderText>
          </HeaderCell>
        ))}
      </HeaderRow>

      <BodyContainer>
        {rows.map((row, rowIndex) => (
          <BodyRow key={rowIndex}>
            {columns.map((col) => (
              <BodyCell key={String(col)}>
                <BodyText>{row[col]}</BodyText>
              </BodyCell>
            ))}
          </BodyRow>
        ))}
      </BodyContainer>
    </TableContainer>
  );
};

export default CustomTable;
