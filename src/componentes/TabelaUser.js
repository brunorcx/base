import MaterialTable from "material-table";
import { createTheme } from "@material-ui/core/styles";
import { forwardRef, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox, MdOutlineClear } from "react-icons/md";
import {
  BiMinus,
  BiPlus,
  BiDownArrowAlt,
  BiChevronLeft,
  BiChevronRight,
  BiFirstPage,
  BiLastPage,
} from "react-icons/bi";
import { ThemeProvider } from "@material-ui/styles";
import { GetResposta } from "../controllers/crud";
import "../styles/tabelaProd.css";
import FormUsuario from "../componentes/database/FormUsuario";

// import styles from "../styles/tabelaProd.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#0F2CBD",
    },
    colHeader: {
      color: "red",
      "&:hover": {
        color: "blue",
      },
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

const TabelaUser = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [usuarios, setUsuarios] = useState();
  const [novoUsuario, setNovoUsuario] = useState();

  useEffect(() => {
    GetResposta("/users")
      .then((result) => {
        setUsuarios(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Cadastro de usuários"
          columns={[
            // { title: "ID", field: "_id" },
            {
              // title: "Imagem",
              title: <div className="cHeader"> Imagem </div>,
              field: "image",
              render: (rowData) => <img src={rowData.image} style={{ width: 40, borderRadius: "50%" }} />,
            },
            { title: <div className="cHeader"> Nome </div>, field: "name" },
            { title: <div className="cHeader"> Senha </div>, field: "password" },
            { title: <div className="cHeader"> E-mail </div>, field: "email" },
            { title: <div className="cHeader"> Favoritos </div>, field: "wishlist" },
            // { title: "Birth Year", field: "birthYear", type: "numeric" },
            // {
            //   title: "Birth Place",
            //   field: "birthCity",
            //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            // },
          ]}
          data={usuarios}
          onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow.tableData.id)}
          options={{
            selection: true,
            rowStyle: (rowData) => ({
              backgroundColor: selectedRow === rowData.tableData.id ? "#1e5cc63f" : "#FFF",
            }),
            headerStyle: {
              backgroundColor: "#1e5bc6",
              color: "#FFF",
            },
          }}
          actions={[
            {
              icon: novoUsuario ? BiMinus : BiPlus,
              tooltip: "Add User",
              isFreeAction: true,
              onClick: () => setNovoUsuario(!novoUsuario),
              // cellStyle: {
              //   hover: {
              //     backgroundColor: "green",
              //   },
              // },
            },
          ]}
          icons={tableIcons}
        />
      </ThemeProvider>
      {novoUsuario && <FormUsuario></FormUsuario>}
    </div>
  );
};

export default TabelaUser;
