import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navigationComponent from './navigation.component';


let navigationModule = angular.module('navigation', [
  uiRouter
])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('navigation', {
            component: 'navigation'
        });
}])

.component('navigation', navigationComponent)
  
.name;

export default navigationModule;
