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
