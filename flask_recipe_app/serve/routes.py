from flask import Blueprint, request, jsonify
from serve.models import db, Recipe, User
from flask_jwt_extended import jwt_required

routes = Blueprint('routes', __name__)

@routes.route('/recipes', methods=['GET'])
@jwt_required
def get_recipes():
    recipes = Recipe.query.all()
    recipe_list = [
        {
            'id': recipe.id,
            'name': recipe.name,
            'description': recipe.description,
            'ingredients': recipe.ingredients,
            'instructions': recipe.instructions,
            'image': recipe.image,
            'user_id': recipe.user_id
        }
        for recipe in recipes
    ]
    return jsonify(recipe_list), 200


@routes.route('/recipes', methods=['POST'])
@jwt_required
def create_recipe():
    data = request.get_json()
    try:
        print("Incoming data:", data)  

        new_recipe = Recipe(
            name=data['name'],
            description=data['description'],
            ingredients=data['ingredients'],
            instructions=data['instructions'],
            image=data.get('image'),  
            user_id=data['user_id']
        )

        db.session.add(new_recipe)
        db.session.commit()

        return jsonify({"message": "Recipe created successfully!"}), 201

    except Exception as e:
        db.session.rollback()
        print(" Error occurred:", e) 
        return jsonify({"error": str(e)}), 400


@routes.route('/recipes/<int:id>', methods=['DELETE'])
@jwt_required
def delete_recipe(id):
    recipe = Recipe.query.get(id)
    if recipe:
        db.session.delete(recipe)
        db.session.commit()
        return jsonify({"message": "Recipe deleted successfully."}), 200
    else:
        return jsonify({"error": "Recipe not found."}), 404
