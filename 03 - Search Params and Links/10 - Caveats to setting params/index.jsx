import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedCharacters = typeFilter
    ? swCharacters.filter((char) => char.type.toLowerCase() === typeFilter)
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  function getNewSearchParams(key, value) {
    const url = new URLSearchParams(searchParams);
    if (value === null) {
      url.delete(key);
    } else {
      url.set(key, value);
    }
    return `?${url.toString()}`;
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    // <main>
    //   <h2>Home</h2>
    //   <div>
    //     <Link to="?type=jedi">Jedi</Link>
    //     <Link to="?type=sith">Sith</Link>
    //     <Link to="">Clear</Link>
    //   </div>
    //   <div>
    //  <button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
    //         <button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
    //         <button onClick={() => setSearchParams({})}>Clear</button>
    //   </div>
    //   <hr />
    //   {charEls}
    // </main>

    <main>
      <h2>Home</h2>
      <div>
        {/* <Link to={getNewSearchParams("type", "jedi")}>Jedi</Link>
        <Link to={getNewSearchParams("type", "sith")}>Sith</Link>
        <Link to={getNewSearchParams("type", null)}>Clear</Link> */}
      </div>
      <div>
        <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
