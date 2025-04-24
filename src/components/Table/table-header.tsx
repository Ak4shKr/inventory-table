import { Column } from "@/types/type";

interface TableHeaderProps {
  columns: Column[];
  filters?: Record<string, string>;
}

export const TableHeader = ({ columns }: TableHeaderProps) => (
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
