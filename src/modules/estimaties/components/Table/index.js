import React from "react";
import { TableBody } from "../TableBody";
import { TableHeader } from "../TableHeader";
import "./style.css";
export const Table = ({ tasks }) => {
  return (
    <div>
      <table className="table">
        <TableHeader />
        <TableBody tasks={tasks} />
      </table>
    </div>
  );
};
