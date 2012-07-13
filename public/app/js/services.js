'use strict';

/* Services */

var host="";

// Demonstrate how to register services
// In this case it is a simple value service.
var MyApp = angular.module('myApp.services', ['ngResource']).
  value('version', '0.1');

MyApp.factory('Cliente', function($resource) {

 	 return $resource(   host+'clientes/:ClienteId', {}, {
 	 					 get   : { method:'GET' },
 	 					 query : { method:'GET', isArray:true},
 	 					 save  : { method:'POST' },
 	 					 remove: { method: ''    }

	});
});


/*

var MyApp = angular.module('myApp.services', ['ngResource']).
  value('version', '0.1');

MyApp.factory('Cliente', function($resource) {

         return $resource(TempDataPath+'/:clienteid.json', {}, { query: {method:'GET', params:{clienteid:'clientes'}, isArray:true}
        });
});

MyApp.factory('Paciente', function($resource) {

         return $resource(host+'Paciente/:PacienteId?fmt=json', {port:':10080'}, { 
                                get  : { method:'GET'},
                                query: { method:'GET', isArray:true },
                                save : { methos:'POST'},
                                remove:{ method:'DELETE'}
                                
                                
        });
});
*/