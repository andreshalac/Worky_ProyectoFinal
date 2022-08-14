"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

#registro 
@api.route('/user', methods=['POST'])
def handle_other_user():
	body = request.json
	print(body)
	if not body.get("email"):
		return jsonify({
			"msg": "something happened, try again"
		}), 400		
	user = User(email=body["email"], userName=body["userName"], password=body["password"], is_active=True)
	try:
		db.session.add(user)
		db.session.commit()
		return jsonify(user.serialize()), 201
	
	except Exception as error:
		db.session.rollback()
		return jsonify(error.args), 500
# login
@api.route('/login', methods=['POST'])
def handle_login():
	email=request.json.get("email", None)
	password=request.json.get("password", None)

	if email is not  None and password is not None:
		user = User.query.filter_by(email=email, password=password).first()
		if user is not None:
			create_token=create_access_token(identity=user.id)
			return jsonify(
				{
					"token":create_token,
					"user_id":user.id,
					"email":user.email
				}
			)
		else:
			return jsonify({
			"msg": "invalid"
		}), 404

	else:
		return jsonify({
			"msg": "something happened, try again"
		}), 400	
#JobOffer 
@api.route('/joboffer', methods=['POST'])
def handle_other_joboffer():
	body = request.json
	print(body)
	if not body.get("job"):
		return jsonify({
			"msg": "something happened, try again"
		}), 400		
	joboffer = JobOffer(job=body["job"], budget=body["budget"], address=body["address"], timeline=body["timeline"], contratante_id=1,  is_active=True)
	try:
		db.session.add(joboffer)
		db.session.commit()
		return jsonify(joboffer.serialize()), 201
	
	except Exception as error:
		db.session.rollback()
		return jsonify(error.args), 500

		


