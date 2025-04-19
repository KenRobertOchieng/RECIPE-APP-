import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import RecipeDetails from "./pages/RecipeDetais";
import "./index.css";
import Footer from "./components/Footer";
function App() {
  const [recipes, setrecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setrecipes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="section-1">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}
export default App;
