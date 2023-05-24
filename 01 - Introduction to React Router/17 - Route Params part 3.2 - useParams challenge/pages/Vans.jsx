import React from "react";
import { Link } from "react-router-dom";
import { fetchVansData } from "../request";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  async function loadVans() {
    try {
      const data = await fetchVansData();
      setVans(data.vans);
    } catch (error) {
      console.log(error.message);
    }
  }
  React.useEffect(() => {
    loadVans();
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
