from flask import Flask
from serve.extentions import db,Migrate

from flask_cors import CORS

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///our_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
db.init_app(app)

migrate=Migrate(app, db)
