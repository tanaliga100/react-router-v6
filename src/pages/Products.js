import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div className="products">
      {products.map((prd) => {
        return (
          <article key={prd.id}>
            <h5>{prd.name}</h5>
            <Link to={`/products/${prd.id}`}>more info</Link>
          </article>
        );
      })}
    </div>
  );
};

export default Products;
