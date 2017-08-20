import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';


let mainModule = angular.module('main', [
  uiRouter
])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            component: 'main'
        });
}])

.component('main', mainComponent)
  
.name;

export default mainModule;
