from serve.extentions import db

class Recipe(db.Model):
    __tablename__='recipe'

    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String,nullable=False)
    description=db.Column(db.String,nullable=False)
    ingredients=db.Column(db.String,nullable=False)
    instructions=db.Column(db.String,nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user=db.relationship('User',backpopulates='recipe')

    def __repr__(self):
        return f'<Recipe {self.id}, {self.name}, {self.description}, {self.ingredients}, {self.instructions}'  

class User(db.Model):
    __tablename__='user'
    id=db.Column(db.Integer,primary_key=True)
    email=db.Column(db.String)
    name=db.Column(db.String)
    password=db.Column(db.String)

    recipe=db.relationship('Recipe',backpopulates='user')

    def __repr__(self):
        return f'<User {self.id}, {self.email}, {self.name}, {self.password}'
 

