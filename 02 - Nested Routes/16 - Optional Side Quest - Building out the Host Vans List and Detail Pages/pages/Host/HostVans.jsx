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
    <div
      key={van.id}
      className="van-tile"
      style={{
        display: "flex",
        // justifyContent: "space-evenly",
        textAlign: "left",
        padding: "1rem",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Link to={`/host/vans/${van.id}`}>
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
    </div>
  ));

  return (
    <>
      <h1> Host Vans List Page</h1>
      {vanElements}
    </>
  );
}
