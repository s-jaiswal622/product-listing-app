import React from "react";
import "../App.css";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  className?: string;
  icon?: React.ReactNode;
}

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm, className, icon }) => {
  return (
    <div className={`search-bar ${className || ""}`.trim()}>
      {icon && <span className="search-icon">{icon}</span>}
      🔍
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
