import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { GetResposta } from "../controllers/crud";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Nome",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Valor",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "brand",
    headerName: "Fornecedora",
    width: 180,
    editable: true,
  },
  {
    field: "qty",
    headerName: "Quantidade",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "tags",
    headerName: "Categoria",
    width: 150,
    editable: true,
  },
  // {
  //   field: "qty",
  //   headerName: "Quantidade",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,

  // },
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
    {
      id: 0,
      name: "Playstation 5",
      price: 5000,
      brand: "Sony",
      qty: 1,
      tags: "eletrônico, informática",
    },
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
              id: i + 1,
              name: result[i].name,
              price: result[i].price,
              brand: result[i].brand,
              qty: result[i].qty,
              tags: result[i].tags,
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
