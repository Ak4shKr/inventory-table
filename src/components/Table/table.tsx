"use client";
import React, { useState } from "react";
import { SearchBar } from "./filteration";
import { Pagination } from "./pagination";
import { TableBody } from "./table-body";
import { TableHeader } from "./table-header";

export interface Column {
  accessor: string;
  label: string;
}

interface TableProps {
  data: Record<string, string | number | boolean | null>[];
  columns: Column[];
  pageSize?: number;
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [page, setPage] = useState(1);

  const [globalSearch, setGlobalSearch] = useState("");

  return (
    <div>
      <SearchBar value={globalSearch} onChange={setGlobalSearch} />
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <TableHeader columns={columns} />
          <TableBody data={data} columns={columns} />
        </table>
        <Pagination currentPage={page} onPageChange={setPage} totalPages={4} />
      </div>
    </div>
  );
};
