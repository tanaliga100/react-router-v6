export function fetchVansData() {
  return fetch("/api/vans").then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch vans data");
    }
    return res.json();
  });
}

export function fetchVanDetail(id) {
  return fetch(`/api/vans/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch vans data");
    }
    return res.json();
  });
}
