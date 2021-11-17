import MaterialTable from "material-table";
import { createTheme } from "@material-ui/core/styles";
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />;

const TabelaUser = () => {
  return (
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
      options={{
        selection: true,
        headerStyle: {
          backgroundColor: "#1e5bc6",
          color: "#FFF",
        },
      }}
    />
  );
};

export default TabelaUser;
