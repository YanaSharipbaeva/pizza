import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngToast from 'angular-toastr';

import GetFoodService from './services/services';
import Components from './components/components';


var app = angular.module('foodStore', [Components, uiRouter,  "toastr"
]);

app.service('GetFoodService', GetFoodService);

app.config(['$stateProvider', function ($stateProvider ) {
    $stateProvider
        .state('/main', {
            url: '/main',
            templateUrl: 'js/app/components/main/main.html'
        })
        .state('/cart', {
            url: '/cart',
            templateUrl: 'js/app/components/cart/cart.html'
    });
}]);



