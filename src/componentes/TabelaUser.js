import MaterialTable from "material-table";
import { createTheme } from "@material-ui/core/styles";
import { forwardRef, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox, MdOutlineClear } from "react-icons/md";
import { BiPlus, BiDownArrowAlt, BiChevronLeft, BiChevronRight, BiFirstPage, BiLastPage } from "react-icons/bi";
import { ThemeProvider } from "@material-ui/styles";
import { GetResposta } from "../controllers/crud";

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

const TabelaUser = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    GetResposta("/users")
      .then((result) => {
        setUsuarios(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title="Cadastro de usuários"
        columns={[
          // { title: "ID", field: "_id" },
          {
            title: "Imagem",
            field: "image",
            render: (rowData) => <img src={rowData.image} style={{ width: 40, borderRadius: "50%" }} />,
          },
          { title: "Nome", field: "name" },
          { title: "Senha", field: "password" },
          { title: "E-mail", field: "email" },
          { title: "Favoritos", field: "wishlist" },

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
            icon: BiPlus,
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row"),
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
  );
};

export default TabelaUser;
