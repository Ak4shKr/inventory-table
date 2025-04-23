import { Column, TableData } from "@/types/type";
import React from "react";

interface TableBodyProps {
  data: TableData[];
  columns: Column[];
}

export const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={`${row.component_id}-${index}`} className="">
        {columns.map((col) => {
          if (col.accessor === "component_name" && row?.rowSpan === 0) {
            return null;
          }

          return (
            <td
              key={col.accessor}
              className="border px-4 py-2 text-sm"
              rowSpan={
                col.accessor === "component_name" ? row.rowSpan : undefined
              }
            >
              {row[col.accessor]?.toString() || "-"}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
);
