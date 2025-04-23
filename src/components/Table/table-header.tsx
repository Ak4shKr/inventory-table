import { Column } from "@/types/type";
import React from "react";

interface TableHeaderProps {
  columns: Column[];
  filters?: Record<string, string>;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((col) => (
        <th key={col.accessor} className="border px-4 py-2 cursor-pointer">
          {col.label}{" "}
        </th>
      ))}
    </tr>
  </thead>
);
