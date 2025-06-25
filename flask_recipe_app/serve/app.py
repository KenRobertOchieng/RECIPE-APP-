from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate

from serve.extentions import db
from serve.routes import routes

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///our_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True 

CORS(app)
db.init_app(app)
migrate = Migrate(app, db)


app.register_blueprint(routes)


if __name__ == '__main__':
    app.run(debug=True)
