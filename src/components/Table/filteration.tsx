interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="mb-2">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search for any data..."
      className="w-full md:w-[40%]  px-4 py-2 border border-gray-300 rounded"
    />
  </div>
);
