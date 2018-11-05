window.app.controller('produtorController', function($scope, APIService, $routeParams){
    $scope.produtor = {}

    if($routeParams.usuarioId){
        APIService.get($routeParams.usuarioId, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            $scope.eventos = data
        })
    }
    
    $scope.salvar = function(){
        if(!$scope.produtor.titulo) return window.alert('Fill in the field name!')
        if(!$scope.produtor.descricao) return window.alert('Fill in the document field!')
        
        APIService.saveProducer($scope.produtor, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            window.location.href = '#!/eventos'
        })
    }    

    $scope.excluir = function(){
        var confirmar = confirm('Deseja realmente excluir esta nota?')

        if(confirmar){
            APIService.delete($scope.evento, function(err, data){
                if(err) return window.alert(JSON.stringify(err))
                
                window.location.href = '#!/home'
            })
        }
    } 
})