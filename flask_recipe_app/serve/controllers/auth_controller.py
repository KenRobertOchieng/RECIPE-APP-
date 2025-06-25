from werkzeug.security import generate_password_hash
from serve.extentions import db
from serve.extentions import app
from flask import request, jsonify
from serve.extentions import User

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_pw = generate_password_hash(data['password'])

    # creation of a new user
    user = User(name=data['name'], email=data['email'], password=hashed_pw)
    db.session.add(user)
    db.session.commit()
    return jsonify(message="User created"), 201

from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify(access_token=token), 200
    else:
        return jsonify(error="Invalid credentials"), 401
