import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productID } = useParams();
  const { name, image } = products.find((prd) => prd.id === productID);
  return (
    <section className="section product">
      <img src={image} alt="prdImage" />
      <h5>{name}</h5>
      <Link
        to={`/products`}
        style={{ background: "red", color: "white", padding: "1rem" }}
      >
        ..Back to Prod
      </Link>
    </section>
  );
};

export default SingleProduct;
