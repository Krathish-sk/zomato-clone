import React from "react";
import FilterItem from "./filter";
import "./filters.css";

const Filter = ({ filterList }) => {
  const renderFilterItems = filterList.map((filter) => {
    return <FilterItem key={filter.id} filter={filter} />;
  });

  return <div className="filters">{filterList && renderFilterItems}</div>;
};

export default Filter;
