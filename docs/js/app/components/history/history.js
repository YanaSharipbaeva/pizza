import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HistoryComponent from './history.component';

let historyModule = angular.module('history', [
  uiRouter
])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('history', {
          url: '/history',
          component: 'history'
        });
  }])
.component('history', HistoryComponent)
  
.name;

export default historyModule;
