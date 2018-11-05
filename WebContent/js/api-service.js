window.app.service('APIService', function($http){
    var url = "http://localhost:3000"
    

    this.register = function(usuario, callback){
        var urlCadastro = url + '/usuarios'

        if(usuario.id){
            urlCadastro += '/' + usuario.id
        }

        $http({
            url : urlCadastro,
            data : usuario,
            method : usuario.id? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.access = function(usuario, callback){
        var urlConsulta = url + '/usuarios?login=' + usuario.login + '&senha=' + usuario.senha
        
        $http.get(urlConsulta).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.getUsuario = function(id, callback){
        var urlConsulta = url + '/usuarios?id=' + id

        $http.get(urlConsulta).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.getEventosUsuario = function(id, callback){
        var urlConsulta = url + '/eventos?usuarioId=' + id

        $http.get(urlConsulta).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.getEvento = function(id, callback){
        var urlConsulta = url + '/eventos?id=' + id

        $http.get(urlConsulta).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.save = function(evento, callback){
        var urlEvento = url + '/eventos'

        if(evento.id){
            urlEvento += '/' + evento.id
        }

        $http({
            url : urlEvento,
            data : evento,
            method : evento.id? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.saveProducer = function(produtor, callback){
        var urlProdutor = url + '/produtor'

        if(produtor.id){
            urlProdutor += '/' + produtor.id
        }

        $http({
            url : urlProdutor,
            data : produtor,
            method : produtor.id? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.deleteEvent = function(evento, callback){
        var urlEvento = url + '/eventos/' + evento.id

        $http({
            url : urlEvento,
            data: evento,
            method : 'DELETE'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }
})