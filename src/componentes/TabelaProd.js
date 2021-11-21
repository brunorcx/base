import MaterialTable from "material-table";
import { forwardRef, useEffect, useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { GetResposta } from "../controllers/crud";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import {
  BiPlus,
  BiDownArrowAlt,
  BiChevronLeft,
  BiChevronRight,
  BiFirstPage,
  BiLastPage,
} from "react-icons/bi";
import "../styles/tabelaProd.css";

//###### inicio ######
const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#ff9100",
    },
  },
  root: {
    "&:hover": {
      backgroundColor: "#4caf50",
    },
  },
});

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <BiFirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <BiLastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <BiChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <BiChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => (
    <MdOutlineClear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <BsSearch {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => (
    <BiDownArrowAlt size="1.3rem" color="white" {...props} ref={ref} />
  )),
};

const TabelaProd = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title="Proutos"
        columns={[
          { title: "Nome", field: "name" },
          { title: "Valor", field: "price" },
          { title: "Forneceor", field: "brand" },
          { title: "Quantiade", field: "qty" },
          { title: "Categoria", field: "tags" },
        ]}
        data={[]}
      />
    </ThemeProvider>
  );
};

//##### fim #####

// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 160,
//     headerAlign: "left",
//     cellClassName: "colunas",
//   },
//   {
//     field: "name",
//     headerName: "Nome",
//     width: 160,
//     editable: true,
//     headerAlign: "left",
//     cellClassName: "colunas",
//   },
//   {
//     field: "price",
//     headerName: "Valor",
//     type: "number",
//     width: 160,
//     editable: true,
//     headerAlign: "left",
//     cellClassName: "colunas",
//   },
//   {
//     field: "brand",
//     headerName: "Fornecedora",
//     width: 160,
//     editable: true,
//     headerAlign: "left",
//     cellClassName: "colunas",
//   },
//   {
//     field: "qty",
//     headerName: "Quantidade",
//     type: "number",
//     width: 160,
//     editable: true,
//     headerAlign: "left",
//     cellClassName: "colunas",
//   },
//   {
//     field: "tags",
//     headerName: "Categoria",
//     width: 160,
//     editable: true,
//     headerAlign: "left",
//     cellClassName: "colunas",
//   },
//   // {
//   //   field: "qty",
//   //   headerName: "Quantidade",
//   //   description: "This column has a value getter and is not sortable.",
//   //   sortable: false,
//   //   width: 160,

//   // },
// ];

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
      {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick /> */}
    </div>
  );
}
// fazer busca https://material-ui.com/pt/components/data-grid/filtering/
