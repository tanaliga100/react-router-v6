import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVanDetail } from "../request";
export default function VanDetail() {
  const params = useParams();

  /**
   * Challenge part 2:
   * Using the endpoint set up (with mirage js), fetch the data
   * for the van with the current ID from params.id. Log the data
   * that comes back to the console.
   *
   * Hint: the endpoint is a GET request to `/api/vans/:vanid`
   */
  const [van, setVan] = useState([]);
  async function loadVan() {
    try {
      const data = await fetchVanDetail(params.id);
      setVan(data.vans);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    loadVan();
  }, []);
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
