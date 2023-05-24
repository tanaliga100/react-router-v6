import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="host-van-linl-wrappers"
    >
      <img src={van.imageUrl} style={{ width: 150, height: 100 }} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </Link>
  ));

  return (
    <>
      <h1> Host Vans List Page</h1>
      {vanElements}
    </>
  );
}
