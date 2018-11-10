window.app.controller('loginController', function($scope, APIService,  $routeParams){
    var url = '#!/'

    $scope.session = {"id":$routeParams.usuarioId}
    $scope.eventos = []
    $scope.user = {}

    /*$scope.carregarEventosUsuario = function(){
        if($routeParams.usuarioId){
            APIService.getUsuario($routeParams.usuarioId, function(err, data){
                if(err) return window.alert(JSON.stringify(err))
    
                $scope.usuario = data[0]

                if($scope.usuario.id){
                    APIService.getEventosUsuario($scope.usuario.id, function(err, data){
                        if(err) return window.alert(JSON.stringify(err))
        
                        $scope.eventos = data
                    })
                }
            })
        }
    }

    $scope.carregarEventosUsuario()*/

    $scope.singin = function(){
        if(!$scope.user.login) return window.alert('Login not informed!')
        if(!$scope.user.password) return window.alert('Password not informed!')

        console.log($routeParams)
        
        APIService.singin($scope.user, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            console.log("chegou aqui tambem!")
            /*$scope.user = data[0]
            
            if($scope.user == undefined){
                return window.alert('User not found!')
            }
            
            url = url + '/' + $scope.usuario.id
            
            window.location.href =  url */
        })
    }
})