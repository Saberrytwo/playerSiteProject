import React from "react";
import TableRow from "../components/TableRow";
import TableHeadItem from "../components/TableHead";

const Table = ({ theadData, tbodyData, customClass }) => {
  return (
    <table className={customClass}>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.key} data={item.items} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
