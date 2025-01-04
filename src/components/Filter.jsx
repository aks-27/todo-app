import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div style={{position: 'fixed', top: '0', right: '0'}}>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
};

export default Filter;
