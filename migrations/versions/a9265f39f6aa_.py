"""empty message

Revision ID: a9265f39f6aa
Revises: 
Create Date: 2022-08-09 11:11:59.245596

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a9265f39f6aa'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tipos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userName', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('userName')
    )
    op.create_table('contratantes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('company_name', sa.String(length=120), nullable=False),
    sa.Column('address', sa.String(length=250), nullable=True),
    sa.Column('phone', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('trabajadores',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('address', sa.String(length=250), nullable=True),
    sa.Column('phone', sa.String(length=120), nullable=True),
    sa.Column('job', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('tipos_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['tipos_id'], ['tipos.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('joboffer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('job', sa.String(length=120), nullable=False),
    sa.Column('budget', sa.Float(), nullable=True),
    sa.Column('address', sa.String(length=250), nullable=True),
    sa.Column('timeline', sa.String(length=120), nullable=True),
    sa.Column('contratante_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['contratante_id'], ['contratantes.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('services_offer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('budget', sa.Float(), nullable=True),
    sa.Column('address', sa.String(length=250), nullable=True),
    sa.Column('timeline', sa.String(length=250), nullable=True),
    sa.Column('trabajadores_id', sa.Integer(), nullable=True),
    sa.Column('tipos_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['tipos_id'], ['tipos.id'], ),
    sa.ForeignKeyConstraint(['trabajadores_id'], ['trabajadores.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('new_deal',
    sa.Column('trabajadores_id', sa.Integer(), nullable=True),
    sa.Column('jobOffer_id', sa.Integer(), nullable=True),
    sa.Column('status', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['jobOffer_id'], ['joboffer.id'], ),
    sa.ForeignKeyConstraint(['trabajadores_id'], ['trabajadores.id'], ),
    sa.PrimaryKeyConstraint('status')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('new_deal')
    op.drop_table('services_offer')
    op.drop_table('joboffer')
    op.drop_table('trabajadores')
    op.drop_table('contratantes')
    op.drop_table('user')
    op.drop_table('tipos')
    # ### end Alembic commands ###
