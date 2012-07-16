'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: HomeCtrl});
    $routeProvider.when('/dashboard', {templateUrl: 'app/partials/dashboard.html', controller: DashboardCtrl});
    $routeProvider.when('/ventas', {templateUrl: 'app/partials/ventas.html', controller: VentasCtrl});
    $routeProvider.when('/productos', {templateUrl: 'app/partials/productos.html', controller: ProductosCtrl});
    $routeProvider.when('/clientes', {templateUrl: 'app/partials/clientes.html', controller: ClientesCtrl});
    $routeProvider.when('/clientes/edit/:id', {templateUrl: 'app/partials/clientes-modal.html', controller: ClientesEditCtrl});
    $routeProvider.when('/clientes/delete/:id', {templateUrl: 'app/partials/clientes-modal.html', controller: ClientesEditCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
