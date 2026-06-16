import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Populares from "./pages/Populares";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>

        {" | "}

        <Link to="/cadastro">
          Cadastro
        </Link>

        {" | "}

        <Link to="/populares">
          Mods Populares
        </Link>
      </nav>

      <hr />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/populares"
          element={<Populares />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;