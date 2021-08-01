import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { GetResposta } from "../controllers/crud";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rowsInicial = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const [rows, setRows] = useState([
    { id: 0, lastName: "Snow", firstName: "Jon", age: 35 },
  ]);

  useEffect(() => {
    GetResposta("/products")
      .then((result) => {
        console.log(result);
        var tamanho = Object.keys(result).length;

        for (let i = 0; i < tamanho; i++)
          setRows((oldArray) => [
            ...oldArray,
            {
              // using the length of the array for a unique id
              id: i + 1,
              // adding a new user name
              firstName: result[i].name,
              // with a type of member
              lastName: result[i].brand,
              age: result[i].qty,
            },
          ]);
      })
      .catch((err) => {});
  }, []); // Executar apenas uma vez

  return (
    <div style={{ height: 400, width: "100%" }}>
      {console.log(rows)}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
//https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
