import React from "react";
import "./table.css";

interface TableProps {
  headers: string[];
  data: any[][];
}

export default function Table(props: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => (
          <tr key={i}>
            {row.map((data, j) => (
              <td key={j}>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
