import React from "react";

interface FilterBoxProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBox: React.FC<FilterBoxProps> = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default FilterBox;
