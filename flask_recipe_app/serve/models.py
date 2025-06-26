from serve.extensions import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)

    recipes = db.relationship('Recipe', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.Text)
    ingredients = db.Column(db.Text)
    instructions = db.Column(db.Text)
    image = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "image": self.image,
            "user_id": self.user_id
        }
