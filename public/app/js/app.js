'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: HomeCtrl});
    $routeProvider.when('/dashboard', {templateUrl: 'app/partials/dashboard.html', controller: DashboardCtrl});
    $routeProvider.when('/ventas', {templateUrl: 'partials/ventas.html', controller: VentasCtrl});
    $routeProvider.when('/productos', {templateUrl: 'app/partials/productos.html', controller: ProductosCtrl});
    $routeProvider.when('/clientes', {templateUrl: 'app/partials/clientes.html', controller: ClientesCtrl});
    $routeProvider.when('/clientes/edit', {templateUrl: 'app/partials/clientes.html', controller: ClientesCtrl});
    $routeProvider.otherwise({redirectTo: 'app/home'});
  }]);
