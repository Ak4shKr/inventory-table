"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Column, Component, TableData } from "../types/type";
import { Navbar } from "@/components/navbar";
import { Table } from "@/components/Table/table";

const columns: Column[] = [
  { accessor: "component_name", label: "Component Name" },
  { accessor: "subcomponent_name", label: "Subcomponent" },
  { accessor: "subcomponent_id", label: "ID" },
  { accessor: "sku_code", label: "SKU" },
  { accessor: "damaged_quantity", label: "Damaged" },
  { accessor: "discarded_quantity", label: "Discarded" },
  { accessor: "total_quantity", label: "Available Qty" },
  { accessor: "last_updated", label: "Last Updated" },
];

export default function Home() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/inventory");
        const data: Component[] = response.data;
        console.log("Fetched data:", data);

        // Track seen component IDs to avoid duplicates
        const seenComponentIds = new Set<string>();
        const seenSubcomponentIds = new Set<string>();

        const transformedData: TableData[] = [];

        for (const item of data) {
          if (seenComponentIds.has(item.component_id)) continue;
          seenComponentIds.add(item.component_id);

          if (!item.subcomponents || item.subcomponents.length === 0) {
            transformedData.push({
              component_name: item.component_name || "-",
              component_id: item.component_id || "-",
              subcomponent_name: "-",
              subcomponent_id: "-",
              damaged_quantity: "-",
              discarded_quantity: "-",
              sku_code: item.sku_code || "-",
              total_quantity: "-",
              last_updated: item.updated_at?.split("T")[0] || "-",
              rowSpan: 1,
            });
            continue;
          }

          item.subcomponents.forEach((sub, index) => {
            if (seenSubcomponentIds.has(sub.component_id)) return;
            seenSubcomponentIds.add(sub.component_id);

            transformedData.push({
              component_name: item.component_name,
              component_id: item.component_id,
              subcomponent_name: sub.component_name,
              subcomponent_id: sub.component_id,
              damaged_quantity: sub.damaged_quantity || "-",
              discarded_quantity: sub.discarded_quantity || "-",
              sku_code: sub.sku_code || "-",
              total_quantity: sub.total_quantity || "-",
              last_updated: sub.last_updated?.split("T")[0] || "-",
              rowSpan: index === 0 ? item?.subcomponents?.length : 0,
            });
          });
        }

        setTableData(transformedData.filter(Boolean) as TableData[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6">
        <Table data={tableData} columns={columns} />
      </main>
    </>
  );
}
