class CreateClientes < ActiveRecord::Migration
  def change
    create_table :clientes do |t|
      t.string :nombre
      t.string :apellido
      t.date :f_nac
      t.string :genero
      t.string :telefono
      t.string :email
      t.text :direccion
      t.integer :cp
      t.string :ciudad
      t.string :estado
      t.string :pais
      t.string :rfc
      t.string :foto
      t.text :notas

      t.timestamps
    end
  end
end
