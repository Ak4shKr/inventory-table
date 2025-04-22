import React from "react";
import { Column } from "./table";

interface TableBodyProps {
  data: Record<string, string | number | boolean | null>[];
  columns: Column[];
}

export const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={index} className="hover:bg-gray-100">
        {columns.map((col) => (
          <td key={col.accessor} className="border px-4 py-2 text-sm">
            {row[col.accessor]?.toString() || "—"}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
