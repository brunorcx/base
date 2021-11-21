import MaterialTable from "material-table";
import { forwardRef, useEffect, useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { GetResposta } from "../controllers/crud";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { BiPlus, BiDownArrowAlt, BiChevronLeft, BiChevronRight, BiFirstPage, BiLastPage } from "react-icons/bi";
import "../styles/tabelaProd.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#1e5bc6",
    },
  },
  root: {
    "&:hover": {
      backgroundColor: "#4caf50",
    },
  },
});

const tableIcons = {
  // Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  // Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  // Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <BiFirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <BiLastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <BiChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <BiChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <MdOutlineClear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <BsSearch {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <BiDownArrowAlt size="1.3rem" color="white" {...props} ref={ref} />),
  // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const TabelaProd = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [produtos, setProdutos] = useState();
  const [novoProduto, setNovoProduto] = useState();

  useEffect(() => {
    GetResposta("/products")
      .then((result) => {
        setProdutos(result);
      })
      .catch((err) => {});
  }, []);

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
        data={produtos}
        onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow.tableData.id)}
        options={{
          selection: true,
          rowStyle: (rowData) => ({
            backgroundColor: selectedRow === rowData.tableData.id ? "#1e5cc63f" : "#fff",
          }),
          headerStyle: {
            backgroundColor: "#1e5bc6",
            color: "#fff",
          },
        }}
        actions={[
          {
            icon: BiPlus,
            tooltip: "Add User",
            isFreeAction: true,
            onClick: () => setNovoProduto(!novoProduto),
          },
        ]}
        icons={tableIcons}
      />
    </ThemeProvider>
  );
};
export default TabelaProd;
//##### fim #####
