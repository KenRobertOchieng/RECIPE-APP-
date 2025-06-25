from serve.app import app                    
from serve.extentions import db              
from serve.models import User, Recipe        

with app.app_context():
    
    db.drop_all()
    db.create_all()

  
    user_1 = User(email='kenochi@gmail.com', name='Ken', password='1234')
    user_2 = User(email='andrew@gmail.com', name='Andrew', password='1234')
    user_3 = User(email='david@gmail.com', name='David', password='1234')
    user_4 = User(email='marciah@gmail.com', name='Marciah', password='1234')
    user_5 = User(email='eliud@gmail.com', name='Eliud', password='1234')
    db.session.add_all([user_1, user_2, user_3, user_4, user_5])
    db.session.commit()  

   
    githeri = Recipe(
        name="Githeri",
        description="Tender beef simmered with carrots and potatoes.",
        ingredients="Beef, carrots, potatoes, onions, garlic, tomato paste, spices",
        instructions="Brown beef, add chopped veggies, simmer until soft and flavorful.",
        image="/beef_stew.jpeg",
        user_id=user_1.id
    )

    luo_fried = Recipe(
        name="Luo-Style Fried",
        description="Whole tilapia fish deep-fried and served with ugali and sautéed greens.",
        ingredients="Whole tilapia, salt, lemon juice, garlic, cooking oil, sukuma wiki, maize flour",
        instructions="Clean and score the fish. Marinate with salt, garlic, and lemon. Deep-fry until golden brown. Serve with ugali and fried sukuma wiki.",
        image="/fish_fry.jpeg",
        user_id=user_2.id
    )

    mango = Recipe(
        name="Mango Milkshake",
        description="Refreshing tropical drink for hot days.",
        ingredients="Ripe mangoes, yogurt, honey, ice cubes",
        instructions="Blend all ingredients until smooth. Serve chilled.",
        image="/mango_milkshake.jpeg",
        user_id=user_3.id
    )

    db.session.add_all([githeri, luo_fried, mango])
    db.session.commit()

    print("✅ Database seeded with users and recipes!")
