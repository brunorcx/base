import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { GetResposta } from "../controllers/crud";
import "../styles/tabelaProd.css";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 160,
    headerAlign: "left",
    cellClassName: "colunas",
  },
  {
    field: "name",
    headerName: "Nome",
    width: 160,
    editable: true,
    headerAlign: "left",
    cellClassName: "colunas",
  },
  {
    field: "price",
    headerName: "Valor",
    type: "number",
    width: 160,
    editable: true,
    headerAlign: "left",
    cellClassName: "colunas",
  },
  {
    field: "brand",
    headerName: "Fornecedora",
    width: 160,
    editable: true,
    headerAlign: "left",
    cellClassName: "colunas",
  },
  {
    field: "qty",
    headerName: "Quantidade",
    type: "number",
    width: 160,
    editable: true,
    headerAlign: "left",
    cellClassName: "colunas",
  },
  {
    field: "tags",
    headerName: "Categoria",
    width: 160,
    editable: true,
    headerAlign: "left",
    cellClassName: "colunas",
  },
  // {
  //   field: "qty",
  //   headerName: "Quantidade",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,

  // },
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
        // console.log(result);
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
              img: result[i].img,
            },
          ]);
      })
      .catch((err) => {});
  }, []); // Executar apenas uma vez

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      {/* {console.log(rows)} */}
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
    </div>
  );
}
// fazer busca https://material-ui.com/pt/components/data-grid/filtering/
