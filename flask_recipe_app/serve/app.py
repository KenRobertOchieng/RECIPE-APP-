from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager


from serve.extentions import db
from serve.routes import routes

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///our_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True 

app.config['JWT_SECRET_KEY'] = 'Kq9yJaLzG8X3sHf45bTcW0pNqZ7aMfVuRdSxE2jYtG1oLkmU'
jwt = JWTManager(app)

CORS(app)
db.init_app(app)
migrate = Migrate(app, db)

from serve.controllers.auth_controller import auth_bp ,login_bp

app.register_blueprint(auth_bp)
app.register_blueprint(login_bp)

app.register_blueprint(routes)


if __name__ == '__main__':
    app.run(debug=True)
