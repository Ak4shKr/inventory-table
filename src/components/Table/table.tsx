"use client";
import React, { useState, useMemo, useEffect } from "react";
import { SearchBar } from "./filteration";
import { TableBody } from "./table-body";
import { TableHeader } from "./table-header";
import { Pagination } from "./pagination";
import { Column, TableData } from "@/types/type";

interface TableProps {
  data: TableData[];
  columns: Column[];
  pageSize?: number;
}

export const Table = ({ data, columns, pageSize = 10 }: TableProps) => {
  const [globalSearch, setGlobalSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [globalSearch]);

  const filteredData = useMemo(() => {
    if (!globalSearch) return data;

    const searchTerm = globalSearch.toLowerCase();
    return data.filter((row) => {
      return columns.some((col) => {
        const value = row[col.accessor]?.toString().toLowerCase();
        return value && value.includes(searchTerm);
      });
    });
  }, [data, globalSearch, columns]);

  const groupedData = useMemo(() => {
    const groups: Record<string, TableData[]> = {};
    filteredData.forEach((row) => {
      const key = row.component_id;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(row);
    });
    return Object.values(groups);
  }, [filteredData]);

  const totalPages = Math.max(1, Math.ceil(groupedData.length / itemsPerPage));

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return groupedData.slice(startIndex, startIndex + itemsPerPage).flat();
  }, [groupedData, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  if (!data || data.length === 0) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div>
      <SearchBar value={globalSearch} onChange={setGlobalSearch} />
      <div className="overflow-x-auto">
        <table className="w-full border">
          <TableHeader columns={columns} />
          <TableBody data={paginatedData} columns={columns} />
        </table>

        {filteredData.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        ) : (
          <div className="text-center py-4">No data found</div>
        )}
      </div>
    </div>
  );
};
