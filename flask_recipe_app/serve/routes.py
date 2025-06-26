from flask import Blueprint, request, jsonify,abort
from serve.models import db, Recipe,User
from flask_jwt_extended import get_jwt_identity , jwt_required

routes = Blueprint('routes', __name__)

@routes.route('/users', methods=['GET'])
def get_users():
   
   users=[user.to_dict() for user in User.query.all()] 
 
   return jsonify(users), 200

@routes.route('/recipes', methods=['GET'])
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
@jwt_required()
def create_recipe():
    user_id=get_jwt_identity()
    data = request.get_json()
    try:
        print("Incoming data:", data)  

        new_recipe = Recipe(
            name=data['name'],
            description=data['description'],
            ingredients=data['ingredients'],
            instructions=data['instructions'],
            image=data.get('image'),  
            user_id=user_id
        )

        db.session.add(new_recipe)
        db.session.commit()

        return jsonify({"message": "Recipe created successfully!"}), 201

    except Exception as e:
        db.session.rollback()
        print(" Error occurred:", e) 
        return jsonify({"error": str(e)}), 400

@routes.route('/recipes/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_recipe(id):
    recipe_id=get_jwt_identity()
    recipe = Recipe.query.get_or_404(id)

    if recipe.user_id != recipe_id:
         abort(403, description="Forbidden")

    db.session.delete(recipe)
    db.session.commit()

    return jsonify({"message":"successfully deleted"}),200

