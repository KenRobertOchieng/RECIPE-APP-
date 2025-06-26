from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

from serve.extensions import db
from serve.routes import routes

app = Flask(__name__)

# JWT Config
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change in production
app.config['JWT_TOKEN_LOCATION'] = ['headers']

# DB Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///our_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init Extensions
CORS(app, methods=['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'], allow_headers=['Content-Type', 'Authorization'])
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Register routes
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
