angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete: function(todoData){
				return $http.delete('/api/todos/'+todoData);
			},
			update: function(id,done){
				value = {value:done};
				return $http.put('/api/todos/'+id, value);
			}

		}
	}]);
