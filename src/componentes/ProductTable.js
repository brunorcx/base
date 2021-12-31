import MaterialTable from "material-table";
import { forwardRef, useEffect, useState } from "react";
import { Get } from "../controllers/crud";
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
import ProductForm from "./database/ProductForm";
import "../styles/productForm.css";
import "../styles/productTable.css";

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
  FirstPage: forwardRef((props, ref) => <BiFirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <BiLastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <BiChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <BiChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <MdOutlineClear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <BsSearch {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <BiDownArrowAlt size="1.3rem" color="white" {...props} ref={ref} />),
  Pluss: forwardRef((props, ref) => <BiPlus size="1.3rem" color="white" {...props} ref={ref} />),
};

const ProductTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [products, setProducts] = useState();
  const [createdProduct, setCreatedProduct] = useState(false);

  const [createProduct, setCreateProduct] = useState(false); //Valor dentro da função é valor inicial da variável

  useEffect(() => {
    if (createProduct) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [createProduct]); // Apenas re-execute o efeito quando o count mudar

  useEffect(() => {
    console.log(createdProduct);
  }, [createdProduct]);

  useEffect(() => {
    Get("/products")
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Produtos"
          columns={[
            {
              // title: "Imagem",
              title: <div className="cHeader"> Imagem </div>,
              field: "image",
              render: (rowData) => (
                <img
                  alt="add"
                  src={rowData.img}
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ),
            },
            { title: <div className="cHeader">Nome</div>, field: "name" },
            { title: <div className="cHeader">Valor</div>, field: "price" },
            { title: <div className="cHeader">Fornecedor</div>, field: "brand" },
            { title: <div className="cHeader">Quantidade</div>, field: "qty" },
            { title: <div className="cHeader">Categoria</div>, field: "tags" },
          ]}
          data={products}
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
                color: "#1e5bc6",
              },
            },
          }}
          actions={[
            {
              icon: () => {
                return createProduct ? <BiMinus className="btn" /> : <BiPlus className="btn" />;
              },
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => setCreateProduct(!createProduct),
            },
          ]}
          icons={tableIcons}
        />
      </ThemeProvider>
      <ProductForm
        newProduct={createProduct}
        createdProductF={setCreatedProduct}
        createdProduct={createdProduct}
      />
      {createProduct && <div className="registerBackground" onClick={() => setCreateProduct(!createProduct)} />}
    </div>
  );
};
export default ProductTable;
//##### fim #####
