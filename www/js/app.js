angular.module('coo', 
  ['ionic', 
  'angular-md5'
  ])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppController'
  })
  .state('app.articles', {
      url: '/articles',
      views: {
        'menuContent': {
          templateUrl: 'templates/articles.html',
          controller: 'ArticlesController'
        }
      }
  })
  .state('app.article', {
      url: '/article/:articleId',
      views: {
        'menuContent': {
          templateUrl: 'templates/article.html'
        }
      }
  })
  .state('app.feeds', {
      url: '/feeds',
      views: {
        'menuContent': {
          templateUrl: 'templates/feeds.html',
          controller: 'FeedsController'
        }
      }
    })
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/articles');
});