import MaterialTable from "material-table";
import { createTheme } from "@material-ui/core/styles";
import { forwardRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox, MdOutlineClear } from "react-icons/md";
import { BiPlus, BiDownArrowAlt, BiChevronLeft, BiChevronRight, BiFirstPage, BiLastPage } from "react-icons/bi";
import { ThemeProvider } from "@material-ui/styles";
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

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title="Basic Selection Preview"
        columns={[
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
        ]}
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
            cellStyle: {
              hover: {
                backgroundColor: "green",
              },
            },
          },
        ]}
        icons={tableIcons}
      />
    </ThemeProvider>
  );
};

export default TabelaUser;
