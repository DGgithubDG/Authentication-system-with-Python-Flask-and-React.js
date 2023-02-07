"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
# from werkzeug.security import check_password_hash, generate_password_hash


api = Blueprint('api', __name__)




# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 201

    # Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():

    email= get_jwt_identity()
    dictionary= {
        "message": "Hello "+ email
    }
    return jsonify(dictionary)

  #  response_body = {
   #     "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
   # }

    return jsonify(response_body), 200