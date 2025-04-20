import react from 'react'

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRecipes(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteRecipe = (id) => {
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    // Update the recipes state to remove the deleted recipe
                    setRecipes(recipes.filter((recipe) => recipe.id !== id));
                    console.log(`Recipe with ID ${id} deleted successfully.`);
                } else {
                    console.error(`Failed to delete recipe with ID ${id}.`);
                }
            })
            .catch((err) => {
                console.error("Error deleting recipe:", err);
            });
    };

    return (
        <>
            <div className="section-1">
                <Nav />
            </div>
            <Routes>
                <Route path="/" element={<Home recipes={recipes} onDeleteRecipe={deleteRecipe} />} />
                <Route path="/add" element={<AddRecipe />} />
                <Route path="/edit/:id" element={<EditRecipe />} />
                <Route path="/recipes/:id" element={<RecipeDetails />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </>
    );
}

export default App;