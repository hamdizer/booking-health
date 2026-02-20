import React, { ReactNode } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export interface Column {
  name: string;
  key: string;
  width?: string;
}

export interface TableProps<T> {
  columns: Column[];
  rows: T[];
}

const Table = <T,>({ columns, rows }: TableProps<T>) => {
  return (
    <TableContainer sx={{ borderCollapse: "none" }}>
      <MuiTable>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F6F7F8",borderRadius:"24px" }}>
            {columns.map((col) => (
              <TableCell key={col.key} sx={{ fontWeight: "bold" }}>
                {col.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow sx={{ border: "none" }} key={rowIndex} hover>
              {columns.map((col) => {
                const value = row[col.key as keyof T];
                const displayValue: ReactNode =
                  typeof value === "string" || typeof value === "number"
                    ? value
                    : JSON.stringify(value);

                return (
                  <TableCell sx={{ border: "none" }} key={col.key}>
                    {displayValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
