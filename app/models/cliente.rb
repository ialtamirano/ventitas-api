class Cliente < ActiveRecord::Base
  attr_accessible :apellido, :ciudad, :cp, :direccion, :email, :estado, :f_nac, :foto, :genero, :nombre, :notas, :pais, :rfc, :telefono
end
