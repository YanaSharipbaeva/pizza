import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CartComponent from './cart.component';

let cartModule = angular.module('cart', [
  uiRouter
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('cart', {
          url: '/cart',
          component: 'cart'
        });
  }])
.component('cart', CartComponent)
  
.name;

export default cartModule;
