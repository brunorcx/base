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
  const [proutos, setSelectedRow] = useState();

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
