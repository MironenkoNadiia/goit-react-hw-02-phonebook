import React from "react";

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="insert name"
        value={value}
        onChange={e=>onChangeFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;
