window.app.controller('usuariosController', function($scope, APIService, $routeParams){
    $scope.usuario = {}

    $scope.cadastrar = function(){
        if(!$scope.usuario.login) return window.alert('Fill in the field login!')
        if(!$scope.usuario.senha) return window.alert('Fill in the field password!')


        APIService.register($scope.usuario, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            window.location.href = '/'
        })
    }
})