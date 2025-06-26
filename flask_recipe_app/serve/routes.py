from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)
from serve.models import db, User, Recipe

routes = Blueprint('routes', __name__)

# LOGIN
@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        token = create_access_token(identity=user.id)
        return jsonify(access_token=token), 200

    return jsonify({"msg": "Invalid credentials"}), 401

# GET RECIPES
@routes.route('/recipes', methods=['GET'])
@jwt_required()
def get_recipes():
    recipes = Recipe.query.all()
    return jsonify([r.to_dict() for r in recipes]), 200

# CREATE RECIPE
@routes.route('/recipes', methods=['POST'])
@jwt_required()
def create_recipe():
    data = request.get_json()
    current_user_id = get_jwt_identity()

    recipe = Recipe(
        name=data.get('name'),
        description=data.get('description'),
        ingredients=data.get('ingredients'),
        instructions=data.get('instructions'),
        image=data.get('image'),
        user_id=current_user_id
    )
    db.session.add(recipe)
    db.session.commit()
    return jsonify(recipe.to_dict()), 201

# DELETE RECIPE
@routes.route('/recipes/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_recipe(id):
    recipe = Recipe.query.get_or_404(id)
    db.session.delete(recipe)
    db.session.commit()
    return jsonify({"msg": "Recipe deleted"}), 200

# UPDATE RECIPE
@routes.route('/recipes/<int:id>', methods=['PATCH'])
@jwt_required()
def update_recipe(id):
    recipe = Recipe.query.get_or_404(id)
    data = request.get_json()

    for field in ['name', 'description', 'ingredients', 'instructions', 'image']:
        if field in data:
            setattr(recipe, field, data[field])

    db.session.commit()
    return jsonify(recipe.to_dict()), 200
