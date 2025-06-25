from serve.extentions import db
from serve.models import User
from serve.models import Recipe
from serve.app import app

with app.app_context():
    db.drop_all()
    db.create_all()

    user_1=User(email='kenochi@gmail.com',name='ken',password='1234')
    user_2=User(email='andrew@gmail.com',name='andrew',password='1111')
    user_3=User(email='david@gmail.com',name='david',password='2222')

    githeri = Recipe(
            name="githeri",
            description="Tender beef simmered with carrots and potatoes.",
            ingredients="Beef, carrots, potatoes, onions, garlic, tomato paste, spices",
            instructions="Brown beef, add chopped veggies, simmer until soft and flavorful.",
            image="/beef_stew.jpeg",
            user=user_2
        )

    luo_fried = Recipe(
            name="Luo-Style Fried",
            description="Whole tilapia fish deep-fried and served with ugali and sautéed greens.",
            ingredients="Whole tilapia, salt, lemon juice, garlic, cooking oil, sukuma wiki, maize flour",
            instructions="Clean and score the fish. Marinate with salt, garlic, and lemon. Deep-fry until golden brown. Serve with ugali and fried sukuma wiki.",
            image="/fish_fry.jpeg",
            user=user_3
        )

    mango = Recipe(
            name="Mango",
            description="Refreshing tropical drink for hot days.",
            ingredients="Ripe mangoes, yogurt, honey, ice cubes",
            instructions="Blend all ingredients until smooth. Serve chilled.",
            image="/mango_milkshake.jpeg",
            user=user_1
        )

    db.session.add_all([githeri, luo_fried, mango])
    db.session.commit()

