import MaterialTable from "material-table";
import { createTheme } from "@material-ui/core/styles";
import { forwardRef, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
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
import { Get } from "../controllers/crud";
import "../styles/productTable.css";
import UserForm from "./database/UserForm";

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
  FirstPage: forwardRef((props, ref) => <BiFirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <BiLastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <BiChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <BiChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <MdOutlineClear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <BsSearch {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <BiDownArrowAlt size="1.3rem" color="white" {...props} ref={ref} />),
};

const UserTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [users, setUsers] = useState();
  const [newUser, setNewUser] = useState();

  useEffect(() => {
    Get("/users")
      .then((result) => {
        setUsers(result);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (newUser) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [newUser]); // Apenas re-execute o efeito quando o count mudar
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Cadastro de usuários"
          columns={[
            {
              title: <div className="cHeader"> Imagem </div>,
              field: "image",
              render: (rowData) => (
                <img
                  alt="imagem usuário"
                  src={rowData.image}
                  style={{ height: "70px", width: "70px", objectFit: "cover", borderRadius: "50%" }}
                />
              ),
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
          data={users}
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
              icon: newUser ? BiMinus : BiPlus,
              tooltip: "Add User",
              isFreeAction: true,
              onClick: () => setNewUser(!newUser),
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
      <UserForm newUser={newUser} />
      {newUser && <div className="registerBackground" onClick={() => setNewUser(!newUser)}></div>}
    </div>
  );
};

export default UserTable;
