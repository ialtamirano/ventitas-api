'use strict';

/* Controllers */


function HomeCtrl() {

}
HomeCtrl.$inject = [];


function DashboardCtrl(){


}
DashboardCtrl.$inject=[];

function VentasCtrl()
{

}
VentasCtrl.$inject = [];

function ProductosCtrl(){

}
ProductosCtrl.$inject = [];


function ClientesCtrl($scope, Cliente){
	$scope.clientes = Cliente.query();
	// $http.get('sampledata/clientes.json').success(function(data) {
    //$scope.clientes = data;
 // });
 
  $scope.orderProp = 'nombre';

}
function ClientesEditCtrl($scope,$routeParams, Cliente){
	$scope.cliente = Cliente.get({clienteId:$routeParams.id});


}

function ClientesModalCtrl($scope, Cliente){
	$scope.clientes = Cliente.query();
	// $http.get('sampledata/clientes.json').success(function(data) {
    //$scope.clientes = data;
 // });
 
  $scope.orderProp = 'nombre';

}
//ClientesCtrl.$inject = ['$scope', '$http'];;