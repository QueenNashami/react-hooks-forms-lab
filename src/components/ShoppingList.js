import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

const ShoppingList = ({ items, onItemFormSubmission }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSearchTermChange = (term) => {
    setSearchQuery(term);
  };

  const filteredItems = items.filter((item) => {
    const categoryMatch =
      selectedFilter === "All" || item.category === selectedFilter;
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <Filter
        search={searchQuery}
        onSearchChange={handleSearchTermChange}
        onCategoryChange={handleFilterChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;