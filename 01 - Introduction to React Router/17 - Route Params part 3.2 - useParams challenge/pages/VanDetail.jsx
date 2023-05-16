import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function VanDetail() {
  const params = useParams();
  console.log(params);
  const [van, setVan] = useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);

        setVan(data.vans);
      })
      .catch((err) => console.log({ err }));
  }, [params.id]);

  /**
   * Challenge part 2:
   * Using the endpoint set up (with mirage js), fetch the data
   * for the van with the current ID from params.id. Log the data
   * that comes back to the console.
   *
   * Hint: the endpoint is a GET request to `/api/vans/:vanid`
   */
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="image" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}/day</span>
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this Van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
