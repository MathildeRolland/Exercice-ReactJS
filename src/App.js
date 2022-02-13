// Router
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Filtres from "./pages/Filtres";
import Advanced from "./pages/Advanced";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/recipes/exo1" element={<Recipes />} />
        <Route exact path="/recipes/exo2" element={<Recipes />} />
        <Route exact path="/recipe/:id" element={<Recipe />} />
        <Route exact path="/filters" element={<Filtres />} />
        <Route exact path="/advanced" element={<Advanced />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
