import React, { useState } from "react";
import { Link } from "react-router-dom";
import fetchVansData from "../api";

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 *
 */

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [error, setError] = useState({});

  async function loadVans() {
    try {
      const data = await fetchVansData();
      console.log({ data });
      setVans(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  React.useEffect(() => {
    loadVans();
  }, []);

  const renderVans = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt="vans" />
        <div className="van-info">
          <h2>{van.name}</h2>
          <p>
            {van.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <section>
      <h1>Vans page goes here 🚐</h1>
      <div className="van-list">{vans && renderVans}</div>
    </section>
  );
}
