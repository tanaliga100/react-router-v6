import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Link,
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

  // SETTER FUNCTION USING LINK COMPONENT
  function getNewParams(key, value) {
    const params = new URLSearchParams(searchParams);
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    console.log(params);
    return `?${params.toString()}`;
  }

  return (
    <main>
      <h2>Home</h2>
      <div>
        {/* <Link to="?type=jedi">Jedi</Link>
        <Link to="?type=sith">Sith</Link>
        <Link to="">Clear</Link> */}

        <Link to={getNewParams("type", "jedi")}>Jedi</Link>
        <Link to={getNewParams("type", "sith")}>Sith</Link>
        <Link to={getNewParams("type", null)}>Clear</Link>
      </div>
      <div>
        {/* <button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
        <button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button> */}
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
