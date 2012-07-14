'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl});
    $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: DashboardCtrl});
    $routeProvider.when('/ventas', {templateUrl: 'partials/ventas.html', controller: VentasCtrl});
    $routeProvider.when('/productos', {templateUrl: 'partials/productos.html', controller: ProductosCtrl});
    $routeProvider.when('/clientes', {templateUrl: 'partials/clientes.html', controller: ClientesCtrl});
    $routeProvider.when('/clientes/edit/:id', {templateUrl: 'partials/clientes-modal.html', controller: ClientesEditCtrl});
    $routeProvider.when('/clientes/delete/:id', {templateUrl: 'partials/clientes-modal.html', controller: ClientesEditCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
