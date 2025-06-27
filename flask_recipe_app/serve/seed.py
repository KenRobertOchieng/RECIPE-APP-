from serve.extensions import db
from serve.models import User, Recipe
from serve.app import app

with app.app_context():
    db.drop_all()
    db.create_all()

    # Create users
    user1 = User(email='kenochi@gmail.com', name='ken')
    user1.password_hash('1234')

    user2 = User(email='andrew@gmail.com', name='andrew')
    user2.password_hash('7623')

    user3 = User(email='david@gmail.com', name='david')
    user3.password_hash('12145')

    # Create recipes
    githeri = Recipe(
        name="Beef",
        description="Tender beef simmered with carrots and potatoes.",
        ingredients="Beef, carrots, potatoes, onions, garlic, tomato paste, spices",
        instructions="Brown beef, add chopped veggies, simmer until soft and flavorful.",
        image="/beef_stew.jpeg",
        user=user2
    )

    luo_fried = Recipe(
        name="Luo-Style Fried",
        description="Whole tilapia fish deep-fried and served with ugali and sautéed greens.",
        ingredients="Whole tilapia, salt, lemon juice, garlic, cooking oil, sukuma wiki, maize flour",
        instructions="Clean and score the fish. Marinate with salt, garlic, and lemon. Deep-fry until golden brown. Serve with ugali and fried sukuma wiki.",
        image="/fish_fry.jpeg",
        user=user3
    )

    mango = Recipe(
        name="Mango",
        description="Refreshing tropical drink for hot days.",
        ingredients="Ripe mangoes, yogurt, honey, ice cubes",
        instructions="Blend all ingredients until smooth. Serve chilled.",
        image="/mango_milkshake.jpeg",
        user=user1
    )

    db.session.add_all([user1, user2, user3, githeri, luo_fried, mango])
    db.session.commit()

