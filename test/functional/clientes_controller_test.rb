require 'test_helper'

class ClientesControllerTest < ActionController::TestCase
  setup do
    @cliente = clientes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:clientes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create cliente" do
    assert_difference('Cliente.count') do
      post :create, cliente: { apellido: @cliente.apellido, ciudad: @cliente.ciudad, cp: @cliente.cp, direccion: @cliente.direccion, email: @cliente.email, estado: @cliente.estado, f_nac: @cliente.f_nac, foto: @cliente.foto, genero: @cliente.genero, nombre: @cliente.nombre, notas: @cliente.notas, pais: @cliente.pais, rfc: @cliente.rfc, telefono: @cliente.telefono }
    end

    assert_response 201
  end

  test "should show cliente" do
    get :show, id: @cliente
    assert_response :success
  end

  test "should update cliente" do
    put :update, id: @cliente, cliente: { apellido: @cliente.apellido, ciudad: @cliente.ciudad, cp: @cliente.cp, direccion: @cliente.direccion, email: @cliente.email, estado: @cliente.estado, f_nac: @cliente.f_nac, foto: @cliente.foto, genero: @cliente.genero, nombre: @cliente.nombre, notas: @cliente.notas, pais: @cliente.pais, rfc: @cliente.rfc, telefono: @cliente.telefono }
    assert_response 204
  end

  test "should destroy cliente" do
    assert_difference('Cliente.count', -1) do
      delete :destroy, id: @cliente
    end

    assert_response 204
  end
end
