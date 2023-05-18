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

  const genNewSearchParams = (key, value) => {
    const searchPara = new URLSearchParams(searchParams);
    if (value === null) {
      searchPara.delete(key);
    } else {
      searchPara.set(key, value);
    }
    return `?${searchPara}`;
  };

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParams("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParams("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParams("type", null)}>Clear</Link>
      </div>
      <div>
        <button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
        <button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button>
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
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
