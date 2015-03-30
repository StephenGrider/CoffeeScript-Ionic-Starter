angular.module('starter', ['ionic', 'starter.controllers']).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  }).state('app.search', {
    url: '/search',
    views: {
      menuContent: {
        templateUrl: 'templates/search.html'
      }
    }
  }).state('app.browse', {
    url: '/browse',
    views: {
      menuContent: {
        templateUrl: 'templates/browse.html'
      }
    }
  }).state('app.playlists', {
    url: '/playlists',
    views: {
      menuContent: {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  }).state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      menuContent: {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  return $urlRouterProvider.otherwise('/app/playlists');
});

angular.module('starter.controllers', []).controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    return $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    return $scope.modal.hide();
  };
  $scope.login = function() {
    return $scope.modal.show();
  };
  return $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    return $timeout((function() {
      return $scope.closeLogin();
    }), 1000);
  };
}).controller('PlaylistsCtrl', function($scope) {
  return $scope.playlists = [
    {
      title: 'Reggae',
      id: 1
    }, {
      title: 'Chill',
      id: 2
    }, {
      title: 'Dubstep',
      id: 3
    }, {
      title: 'Indie',
      id: 4
    }, {
      title: 'Rap',
      id: 5
    }, {
      title: 'Cowbell',
      id: 6
    }
  ];
}).controller('PlaylistCtrl', function($scope, $stateParams) {});
