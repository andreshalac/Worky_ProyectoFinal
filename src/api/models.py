from flask_sqlalchemy import SQLAlchemy
import datetime 

db = SQLAlchemy()

class User (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #enviar una FK
    trabajadores = db.relationship('Trabajadores', backref='user', lazy=True)
    contratantes = db.relationship('Contratantes', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "email": self.email,
            "userName": self.userName
            # do not serialize the password, its a security breach
        }

class Trabajadores (db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(250))
    phone = db.Column(db.String(120))
    job = db.Column(db.String(120), unique=False, nullable=False)
    #RecibeFK
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    tipos_id = db.Column(db.Integer, db.ForeignKey("tipos.id"))
    tipos = db.relationship('Tipos', backref='trabajadores', lazy=True)
    #EnviaFK
    
    def __repr__(self):
        return f'<Trabajadores {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "phone": self.phone,
            "job": self.job
            # do not serialize the password, its a security breach
        }

class Contratantes (db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(250))
    phone = db.Column(db.String(120))
    #RecibeFK
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    #EnviaFK

    def __repr__(self):
        return f'<Contratantes {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "company_name": self.company_name,
            "phone": self.phone
            # do not serialize the password, its a security breach
        }

"""este modelo es para el trabajo que ofrece un usuario contratante"""
class JobOffer(db.Model):  
    __tablename__ = "joboffer"
    id = db.Column(db.Integer, primary_key=True)
    job = db.Column(db.String(120), unique=False, nullable=False)
    budget = db.Column(db.Float)
    address = db.Column(db.String(250))
    timeline = db.Column(db.String(120))  
    #FK
    contratante_id = db.Column(db.Integer, db.ForeignKey("contratantes.id")) 

    def __repr__(self):
        return f'<JobOffer {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "job": self.job,
            "budget": self.budget,
            "address": self.address,
            "timeline": self.timeline

            # do not serialize the password, its a security breach
        }
"""este modelo es para el servicio que ofrece un usuario trabajador"""
class ServicesOffer (db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    budget = db.Column(db.Float)
    address = db.Column(db.String(250))
    timeline = db.Column(db.String(250))
    #FK
    trabajadores_id = db.Column(db.Integer, db.ForeignKey("trabajadores.id"))
    tipos_id = db.Column(db.Integer, db.ForeignKey("tipos.id"))
    tipos = db.relationship('Tipos', backref='servicesoffer', lazy=True)
    trabajadores = db.relationship('Trabajadores', backref='servicesoffer', lazy=True)
   

    def __repr__(self):
        return f'<ServicesOffer {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
            "budget": self.budget,
            "address": self.address,
            "timeline": self.timeline
            # do not serialize the password, its a security breach
        }
"""este modelo es para el acuerdo cuando los usuarios matchean con alguna oferta o trabajador"""    

class Tipos (db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)


    def __repr__(self):
        return f'<tipos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
            # do not serialize the password, its a security breach
        }

class NewDeal (db.Model):  
    trabajadores_id = db.Column(db.Integer, db.ForeignKey('trabajadores.id'))
    jobOffer_id = db.Column(db.Integer, db.ForeignKey('joboffer.id'))
    status = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, default= datetime.date.today()) #para cuando se cree un registro, sea la fecha del momento, se crea automatico.
    #relacion para match
   
    def __repr__(self):
        return f'<NewDeal {self.status}>'

    def serialize(self):
        return {
            "trabajadores_id": self.trabajadores_id,
            "jobOffer_id": self.jobOffer_id
            # do not serialize the password, its a security breach
        }
     

