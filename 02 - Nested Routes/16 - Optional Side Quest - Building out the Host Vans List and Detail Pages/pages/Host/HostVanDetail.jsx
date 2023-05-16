import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
  const [van, setVans] = useState(null);
  const params = useParams();
  console.log(params);
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVans(data.vans);
      });
  }, []);

  return <div className="van-detail-container"></div>;
}
