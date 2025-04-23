import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="mb-4">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search for any data..."
      className="w-[80%] md:w-[40%]  px-4 py-2 border border-gray-300 rounded"
    />
  </div>
);
