import angular from 'angular';
import Main from './main/main';
import Cart from './cart/cart';
import History from './history/history';
import Navigation from './navigation/navigation';

let componentModule = angular.module('foodStore.components', [
    Main,
    Cart,
    History,
    Navigation
]).name;

export default componentModule;
