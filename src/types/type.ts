export interface Subcomponent {
  component_id: string;
  component_name: string;
  is_subcomponent: boolean;
  parent_component_id: string;
  updated_at: string;
  created_at: string;
  has_subcomponent: boolean;
  hsn_code: string;
  sku_code: string;
  usable_quantity: number;
  damaged_quantity: number;
  discarded_quantity: number;
  last_updated: string;
  total_quantity: number;
}

export interface Component {
  component_id: string;
  component_name: string;
  is_subcomponent: boolean;
  parent_component_id: string | null;
  updated_at: string;
  created_at: string;
  has_subcomponent: boolean;
  hsn_code: string;
  sku_code: string;
  subcomponents?: Subcomponent[];
}

export interface Column {
  accessor: string;
  label: string;
}

export interface TableData {
  component_id: string;
  component_name: string;
  rowSpan?: number;
  subcomponent_name?: string;
  subcomponent_id?: string;
  damaged_quantity?: number | string;
  discarded_quantity?: number | string;
  sku_code?: string;
  total_quantity?: number | string;
  last_updated?: string;
  hsn_code?: string;
  created_at?: string;
  updated_at?: string;
  [key: string]: string | number | null | boolean | undefined;
}
