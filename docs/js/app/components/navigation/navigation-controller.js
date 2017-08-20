export default class NavigationController {
    constructor(
        $scope
    ) {
        this.name = 'Navigation';
        $scope.navigation = [
            {
                link:'#!/main',
                title:'Main',
                class: 'main-icon'
            },
            {
                link:'#!/cart',
                title:'Cart',
                class: 'cart-icon'
            },
            {
                link:'#!/history',
                title:'History',
                class: 'history-icon'
            }
        ];
        $scope.seleted = $scope.navigation[0];
        $scope.select = function(index) {
            $scope.selected = index;
        };


    }
}

NavigationController.$inject = ["$scope"];








