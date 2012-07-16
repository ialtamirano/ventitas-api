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


function ClientesCtrl($scope, Cliente)
{
	
      $scope.clientes = Cliente.query();

      $scope.delete = function(cliente)
      {
  	Cliente.delete({clienteId:cliente.id});
  	$scope.clientes.splice($scope.clientes.indexOf(cliente),1);
      }

}


function ClientesNewCtrl($scope,$routeParams, Cliente){
	
      $scope.cliente = Cliente.new({clienteId:'new'});
      $scope.master  = angular.copy($scope.cliente);
	
      $scope.update = function (cliente)
      {
        Cliente.create({clienteId:cliente.id}, { cliente:cliente });
      	$scope.master = angular.copy(cliente);
  
      }
      
      $scope.reset = function(){
      	 $scope.cliente = angular.copy($scope.master);
      }
}



function ClientesEditCtrl($scope,$routeParams, Cliente){
	
      $scope.cliente = Cliente.get({clienteId:$routeParams.id});
      $scope.master  = angular.copy($scope.cliente);
	
      $scope.update = function (cliente)
      {
        Cliente.update({clienteId:cliente.id}, { cliente:cliente });
      	$scope.master = angular.copy(cliente);
  
      }
      
      $scope.reset = function(){
      	 $scope.cliente = angular.copy($scope.master);
      }
}

function ClientesModalCtrl($scope, Cliente){
	$scope.clientes = Cliente.query();
 
  $scope.orderProp = 'nombre';

}
//ClientesCtrl.$inject = ['$scope', '$http'];;