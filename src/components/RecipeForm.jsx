const RecipeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: "",
        ingredients: "",
        instructions: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        setFormData({
            title: "",
            ingredients: "",
            instructions: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="recipe-form">
            <div>
                <label htmlFor="title">Recipe Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>