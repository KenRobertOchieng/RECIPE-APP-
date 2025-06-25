from serve.extentions import db

class Recipe(db.Model):
    __tablename__ = 'recipe'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    ingredients = db.Column(db.String, nullable=False)
    instructions = db.Column(db.String, nullable=False)
    image = db.Column(db.String) 
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    user = db.relationship('User', back_populates='recipes')

    def __repr__(self):
        return f'<Recipe {self.id}, {self.name}>'

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    password = db.Column(db.String)

    recipes = db.relationship('Recipe', back_populates='user')

    def __repr__(self):
        return f'<User {self.id}, {self.email}, {self.name}, {self.password}>'
