from flask import Blueprint, request, jsonify
from serve.extensions import db
from flask_jwt_extended import get_jwt_identity,jwt_required
from serve.models import User ,Recipe
from flask import abort

routes = Blueprint('routes', __name__)

@routes.route('/users',methods=['GET'])
def get_users():

    my_users=[user.to_dict() for user in User.query.all()]

    return jsonify(my_users),200
    
@routes.route('/recipes', methods=['GET'])
def get_recipes():
    thee_list=[]
    for recipe in Recipe.query.all():
        my_dict= {
        "id" :recipe.id,  
        "name": recipe.name,
        "description": recipe.description,
        "ingredients": recipe.ingredients,
        "instructions": recipe.instructions,
        "image": recipe.image,
        "user_id": recipe.user_id
        }
        thee_list.append(my_dict)

    return jsonify(thee_list), 200

@routes.route('/recipes', methods=['POST'])
@jwt_required()
def create_recipe():
    user_id=get_jwt_identity()
    data = request.get_json()

    try :
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
    

@routes.route('/recipes/<int:id>', methods=['PATCH'])
@jwt_required()
def update_recipe(id):
    recipe_id=get_jwt_identity()
    recipe = Recipe.query.get_or_404(id)

    if recipe.user_id != recipe_id:
         abort(403, description="Forbidden")

    data = request.get_json()

    recipe.name = data.get('name', recipe.name)
    recipe.description = data.get('description', recipe.description)
    recipe.ingredients = data.get('ingredients', recipe.ingredients)
    recipe.instructions = data.get('instructions', recipe.instructions)
    recipe.image = data.get('image', recipe.image)

    db.session.commit()

    return jsonify({"message":"successfully updated"}),200

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

