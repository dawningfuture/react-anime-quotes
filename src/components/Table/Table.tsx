import React from "react";
import RbTable from "react-bootstrap/Table";
import "./table.css";

interface TableRow {
  data: any[];
  onClick?: () => void;
}

interface TableProps {
  headers: string[];
  rows: TableRow[];
}

export default function Table(props: TableProps) {
  return (
    <RbTable>
      <thead>
        <tr>
          {props.headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, i) => (
          <tr key={i}>
            {row.data.map((datum, j) => (
              <td key={j}>{datum}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </RbTable>
  );
}
