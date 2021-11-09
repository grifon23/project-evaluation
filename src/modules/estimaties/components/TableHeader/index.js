import React from "react";

export const TableHeader = () => {
  return (
    <>
      <thead>
        <tr>
          <th className="cell-description">Description</th>
          <th> Estimate (Hour) min</th>
          <th> Estimate max</th>
          <th>Unit</th>
          <th>Unit price</th>
          <th>Cost USD</th>
          <th className="cell-description">Comments</th>
          <th>DEL</th>
        </tr>
      </thead>
    </>
  );
};
