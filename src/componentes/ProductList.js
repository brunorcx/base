import { useState, useEffect } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { Get } from "../controllers/crud";

import "../styles/productList.css";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const products = [];
  const [products2, setProducts2] = useState(products);
  const [currentProducts, setCurrentProducts] = useState([]);
  useEffect(() => {
    //Carregar lista de produtos do back
    Get("/products")
      .then((result) => {
        var size = Object.keys(result).length;

        for (let i = 0; i < size; i++) {
          setProducts2((oldArray) => [
            ...oldArray,
            {
              id: result[i]._id,
              name: result[i].name,
              price: result[i].price,
              brand: result[i].brand,
              qty: result[i].qty,
              tags: result[i].tags,
              img: result[i].img,
            },
          ]);
        }
      })
      .catch((err) => {});
    //Carregar lista de categorias do back
  }, []);

  useEffect(() => {
    let filteredProducts = [];
    let lastChecked = false;
    let removedProd = [];

    //Acrescentar produtos
    for (const categoryID in props.checkboxCategory) {
      if (props.checkboxCategory[categoryID]) {
        //Acrescentar categoria
        for (const product of products2) {
          console.log("produto " + product.id);
          console.log("produtoID " + product.tags);
          // console.log("produtoID " + products2[produto].tags);
          let duplicated;
          if (product.tags[0].indexOf(",") != -1) {
            var strArray = product.tags[0].split(",");
            for (const word of strArray) {
              if (word == categoryID) {
                duplicated = false;
                //não incluir produtos repetidos
                for (const prod in currentProducts) {
                  if (currentProducts[prod] === product) {
                    duplicated = true;
                    lastChecked = true;
                    break;
                  }
                }
                if (!duplicated) filteredProducts.push(product);
                break;
              }
            }
          } else if (product.tags == categoryID) {
            duplicated = false;
            for (const prod in currentProducts) {
              if (currentProducts[prod] === product) {
                duplicated = true;
                break;
              }
            }
            if (!duplicated) filteredProducts.push(product);
          }
        }
      } else if (props.checkboxCategory[categoryID] === false && currentProducts != null) {
        //retirar categoria marcada
        //Retirar produtos
        for (const product of currentProducts) {
          for (const cateID in props.checkboxCategory) {
            if (props.checkboxCategory[cateID]) {
              if (product.tags[0].indexOf(",") != -1) {
                var strArray = product.tags[0].split(",");
                for (const cat of strArray) {
                  if (cat == cateID) {
                    removedProd.push(product);
                    break;
                  }
                }
              } else {
                if (product.tags == cateID) {
                  removedProd.push(product);
                }
              }
            }
          }
        }
        if (removedProd.length !== 0) {
          lastChecked = true;
          removedProd = [...new Set(removedProd)];
          setCurrentProducts(removedProd);
        }
      }
      console.log(props.checkboxCategory[categoryID]);
      console.log(categoryID);
    }

    if (filteredProducts.length !== 0) {
      if (currentProducts !== null) {
        if (filteredProducts !== removedProd) {
          for (const prod of filteredProducts) {
            setCurrentProducts((old) => [...old, prod]);
          }
        }
      } else {
        setCurrentProducts(filteredProducts);
      }
    } else if (!lastChecked) {
      setCurrentProducts(null);
    }
  }, [props.checkboxCategory]);
  //Função que renderiza o objeto individual
  function ListItem(products) {
    return (
      <Link to={"/Produto/" + products.value.id}>
        <li className="liProducts">
          <div className="btn-div">
            <button className="btnFav">
              <RiHeartAddLine className="btn-icon" size="1.5rem" color="#ff2724" />
            </button>
          </div>
          <div className="img">
            <img alt="valor da imagem" src={products.value.img} className="img1"></img>
          </div>
          <div className="description">{products.value.name}</div>
          <div className="price">R$ {products.value.price}</div>
        </li>
      </Link>
    );
  }
  //função que percorre o vetor
  function NumberList(listProducts) {
    const products = listProducts.products;
    return (
      <ul className="productsUL">
        {products.map((product) => (
          <ListItem key={product.id} value={product} />
        ))}
      </ul>
    );
  }
  // Um vetor de Objetos que é passado para uma função que irá percorer
  return (
    <div className="total-list">
      {/* <div className="advertising">PROPAGANDA</div> */}
      {products2 ? (
        <NumberList products={currentProducts ? currentProducts : products2} />
      ) : (
        <span>Loadings...</span>
      )}
    </div>
  );
};
export default ProductList;
