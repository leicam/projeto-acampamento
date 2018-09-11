window.app = window.angular.module('eventos', ['ngRoute'])

window.app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'view/login.html',
            controller: 'homeController'
        })
        .when('/usuarios', {
            templateUrl: 'view/cadastro-usuarios.html',
            controller: 'usuariosController'
        })
        .when('/home/:usuarioId', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
        .when('/eventos', {
            templateUrl: 'view/manutencao-eventos.html',
            controller: 'eventoController'
        })
        .when('/eventos/:usuarioId', {
            templateUrl: 'view/manutencao-eventos.html',
            controller: 'eventoController'
        })
        .when('/eventos/:usuarioId/:id', {
            templateUrl: 'view/manutencao-eventos.html',
            controller: 'eventoController'
        })
        .when('/produtor', {
            templateUrl: 'view/manutencao-produtor.html',
            controller: 'produtorController'
        })
        .when('/produtor/:id', {
            templateUrl: 'view/manutencao-produtor.html',
            controller: 'produtorController'
        })
        .when('/excluir/evento/:id', {
            templateUrl: 'view/excluir-evento.html',
            controller: 'eventoController'
        })
        .otherwise('/')
})