from serve.extentions import db
from werkzeug.security import generate_password_hash
from sqlalchemy_serializer import SerializerMixin


class Recipe(db.Model):
    __tablename__ = 'recipe'

    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String,nullable=False)
    description=db.Column(db.String,nullable=False)
    ingredients=db.Column(db.String,nullable=False)
    instructions=db.Column(db.String,nullable=False)
    image=db.Column(db.String,nullable=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user=db.relationship('User',back_populates='recipe')

    def __repr__(self):
        return f'<Recipe {self.id}, {self.name}>'

class User(db.Model,SerializerMixin):
    __tablename__ = 'user'

    serialize_rules=('-password',)

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    password = db.Column(db.String)

    def thee_hash(self,password):
        self.password=generate_password_hash(password)

    recipe=db.relationship('Recipe',back_populates='user')

    def __repr__(self):
        return f'<User {self.id}, {self.email}, {self.name}, {self.password}>'
