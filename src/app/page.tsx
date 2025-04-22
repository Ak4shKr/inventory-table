// app/page.tsx
"use client";
import { Navbar } from "@/components/navbar";
import { Table, Column } from "@/components/Table/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Component } from "../types/type";

const columns: Column[] = [
  { accessor: "component_id", label: "Component ID" },
  { accessor: "component_name", label: "Component Name" },
  { accessor: "subcomponent_name", label: "SubComponent Name" },
  { accessor: "sku_code", label: "SKU" },
  { accessor: "hsn_code", label: "HSN Code" },
  { accessor: "updated_at", label: "Updated At" },
  { accessor: "created_at", label: "Created At" },
];

export default function Home() {
  const [tabledata, setTabledata] = useState<
    Record<string, string | number | boolean | null>[]
  >([]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/api/inventory");
      const transformedData = data.data.map((item: Component) => ({
        component_id: item.component_id,
        component_name: item.component_name,
        subcomponent_name: item.subcomponents
          ?.map((sub) => sub.component_name)
          .join(", "), // Join subcomponent names into a single string
        sku_code: item.sku_code,
        hsn_code: item.hsn_code,
        updated_at: item.updated_at,
        created_at: item.created_at,
      }));
      setTabledata(transformedData);
      console.log(data.data);
    };

    fetchdata();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6">
        <Table data={tabledata} columns={columns} pageSize={5} />
      </main>
    </>
  );
}
