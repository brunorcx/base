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
  BiMinus,
  BiDownArrowAlt,
  BiChevronLeft,
  BiChevronRight,
  BiFirstPage,
  BiLastPage,
} from "react-icons/bi";
import FormProduto from "../componentes/database/FormProduto";
import "../styles/formProduto.css";
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
  const [produtoCriado, setProdutoCriado] = useState(false);

  const [criarProduto, setCriarProduto] = useState(false); //Valor dentro da função é valor inicial da variável

  useEffect(() => {
    if (criarProduto) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [criarProduto]); // Apenas re-execute o efeito quando o count mudar

  useEffect(() => {
    console.log(produtoCriado);
  }, [produtoCriado]);

  useEffect(() => {
    GetResposta("/products")
      .then((result) => {
        setProdutos(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Proutos"
          columns={[
            {
              // title: "Imagem",
              title: <div className="cHeader"> Imagem </div>,
              field: "image",
              render: (rowData) => <img src={rowData.img} style={{ width: "40%", borderRadius: "50%" }} />,
            },
            { title: <div className="cHeader">Nome</div>, field: "name" },
            { title: <div className="cHeader">Valor</div>, field: "price" },
            { title: <div className="cHeader">Forneceor</div>, field: "brand" },
            { title: <div className="cHeader">Quantidade</div>, field: "qty" },
            { title: <div className="cHeader">Categoria</div>, field: "tags" },
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
              "&:hover": {
                color: "#bbdefb",
              },
            },
          }}
          actions={[
            {
              icon: criarProduto ? BiMinus : BiPlus,
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => setCriarProduto(!criarProduto),
            },
          ]}
          icons={tableIcons}
        />
      </ThemeProvider>
      <FormProduto novoProduto={criarProduto} produtoCriadoF={setProdutoCriado} produtoCriado={produtoCriado} />
      {criarProduto && <div className="background_cadastro" onClick={() => setCriarProduto(!criarProduto)} />}
    </div>
  );
};
export default TabelaProd;
//##### fim #####
