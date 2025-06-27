from werkzeug.security import generate_password_hash
from flask import Blueprint
from serve.extensions import db
from flask import request, jsonify
from serve.models import User

auth_bp = Blueprint('auth', __name__, url_prefix='/register')
login_bp = Blueprint('login', __name__, url_prefix='/login')

@auth_bp.route('', methods=['POST'])
def register():
    data = request.get_json()
    hashed_pw = generate_password_hash(data['password'])

    # creation of a new user
    user = User(email=data['email'], name=data['name'], password=hashed_pw)
    db.session.add(user)
    db.session.commit()
    return jsonify(message="User created"), 201

from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

@login_bp.route('', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify(access_token=token), 200
    else:
        return jsonify(error="Invalid credentials"), 401
