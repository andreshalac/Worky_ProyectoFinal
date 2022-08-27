"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, JobOffer, Tipos, Trabajadores, Contratantes, NewDeal
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
	user = User(email=body["email"], password=body["password"], is_active=True) #crear logica para crear contratante- pintar en el front el registro para cada usuario (trabajador y contratante)
	try:
		db.session.add(user)
		db.session.commit()
		if body["type"]== "trabajador": 
			trabajador=Trabajadores(name=body["userName"], address=body["address"], phone=body["phone"], tipos_id=body["tipos"], user_id=user.id)
			db.session.add(trabajador)
			db.session.commit()	
		else:
			contratante=Contratantes(company_name=body["companyName"], address=body["address"], phone=body["phone"], user_id=user.id)
			db.session.add(contratante)
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

#OJO -> Cuando se hace login, se busca primero si existe el correo, si existe, entonces se verifica que los pass sean iguales

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
		
#JobOffer (crear oferta de trabajo)
@api.route('/joboffer', methods=['POST'])
@jwt_required()
def handle_other_joboffer():
	user_id = get_jwt_identity()
	contratante = Contratantes.query.filter_by(user_id=user_id).first()
	if not contratante:
		return jsonify({
			"msg": "no existe este contratante"
		}), 400		
	body = request.json
	print(body)
	if not body.get("job"):
		return jsonify({
			"msg": "something happened, try again"
		}), 400		
	joboffer = JobOffer(job=body["job"], budget=body["budget"], address=body["address"], timeline=body["timeline"], contratante_id= contratante.id)
	try:
		db.session.add(joboffer)
		db.session.commit()
		return jsonify(joboffer.serialize()), 201
	
	except Exception as error:
		db.session.rollback()
		return jsonify(error.args), 500

#tipos de trabajos/oficios
@api.route('/tipos', methods=['GET'])	
def gettipos(): 
	tipos = Tipos.query.all()
	data = [tipo.serialize() for tipo in tipos]
	return jsonify(data)

#ver todas las ofertas de trabajo disponibles
@api.route('/ofertastotal', methods=['GET'])
#@jwt_required()	
def getofertas(): 
	ofertas = JobOffer.query.all()
	data = [oferta.serialize() for oferta in ofertas]
	return jsonify(data)

#el contratante puede ver las ofertas que creo
@api.route('/ofertasprivado', methods=['GET'])
@jwt_required()	
def getofertasprivado(): 
	user_id = get_jwt_identity()
	contratante = Contratantes.query.filter_by(user_id=user_id).first()
	if not contratante:
		return jsonify({
			"msg": "no existe este contratante"
		}), 400		
	ofertasprivado = JobOffer.query.filter_by(contratante_id=contratante.id)
	data = [oferta.serialize() for oferta in ofertas]
	return jsonify(data)

#El contratante puede ver cual trabajador está postulado
@api.route('/newdeal/<id>', methods=['GET'])
@jwt_required()	
def getnewdeal(id): 
	user_id = get_jwt_identity()
	joboffer = JobOffer.query.filter_by(id=id).first()
	if not joboffer:
		return jsonify({
			"msg": "no puedes acceder a esta información"
		}), 400		
	newdeal = NewDeal.query.filter_by(jobOffer_id=joboffer.id)
	data = [item.trabajador.serialize() for item in newdeal]
	return jsonify(data)	

#(aplicar a oferta de trabajo)
@api.route('/aplication', methods=['POST'])
@jwt_required()
def handle_aplication():
	user_id = get_jwt_identity()
	trabajador = Trabajadores.query.filter_by(user_id=user_id).first()
	if not trabajador:
		return jsonify({
			"msg": "Para aplicar, debes registrarte en Worky"
		}), 400		
	body = request.json
	print(body)
	if not body.get("job_id"):
		return jsonify({
			"msg": "something happened, try again"
		}), 400		
	newdeal = NewDeal(jobOffer_id=body["job_id"], trabajadores_id=trabajador.id, status="aplicado")
	try:
		db.session.add(newdeal)
		db.session.commit()
		return jsonify("Aplicaste existosamente"), 201
	
	except Exception as error:
		db.session.rollback()
		return jsonify(error.args), 500	


