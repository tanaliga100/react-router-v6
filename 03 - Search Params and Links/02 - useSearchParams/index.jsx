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
  const params = useSearchParams();

  const type = params[0].get("type");
  const sort = params[0].get("sort");
  console.log(type, sort);

  const charEls = swCharacters.map((char) => (
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

  return (
    <main>
      <h2>Home</h2>
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
