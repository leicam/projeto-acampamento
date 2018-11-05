window.app.controller('homeController', function($scope, APIService,  $routeParams){
    var url = '#!/home'

    $scope.session = {"id":$routeParams.usuarioId}
    $scope.eventos = []
    $scope.usuario = {}

    $scope.carregarEventosUsuario = function(){
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

    $scope.carregarEventosUsuario()

    $scope.acessar = function(){
        if(!$scope.usuario.login) return window.alert('Login not informed!')
        if(!$scope.usuario.senha) return window.alert('Password not informed!')

        console.log($routeParams)
        
        APIService.access($scope.usuario, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            $scope.usuario = data[0]
            
            if($scope.usuario == undefined){
                return window.alert('User not found!')
            }
            
            url = url + '/' + $scope.usuario.id

            window.location.href =  url
        })
    }

    $scope.excluir = function(evento){
        var confirmar = confirm('Do you really want to delete this event??')

        if(confirmar){
            APIService.deleteEvent(evento, function(err, data){
                if(err) return window.alert(JSON.stringify(err))
                
                $scope.carregarEventosUsuario()
            })
        }
    }
})