const fetchVansData = () => {
  return fetch("/api/vans")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      return res.json();
    })
    .then((data) => {
      if (data) {
        return data.vans;
      }
    })
    .catch((error) => {
      const err = {
        msg: error.message,
        status: error.status,
        statusText: error.statusText,
      };

      return err;
    });
};
export default fetchVansData;
