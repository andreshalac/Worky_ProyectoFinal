"""empty message

Revision ID: 51f2b87dcfa4
Revises: fbc12eea0f45
Create Date: 2022-08-27 09:49:16.434167

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '51f2b87dcfa4'
down_revision = 'fbc12eea0f45'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('controller')
    op.add_column('new_deal', sa.Column('id', sa.Integer(), nullable=False))
    op.drop_column('new_deal', 'status')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('new_deal', sa.Column('status', sa.INTEGER(), autoincrement=True, nullable=False))
    op.drop_column('new_deal', 'id')
    op.create_table('controller',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('trabajadores_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('contratante_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['contratante_id'], ['contratantes.id'], name='controller_contratante_id_fkey'),
    sa.ForeignKeyConstraint(['trabajadores_id'], ['trabajadores.id'], name='controller_trabajadores_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='controller_pkey')
    )
    # ### end Alembic commands ###
