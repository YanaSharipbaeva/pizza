export default class MainController {
    constructor(
        $scope,
        GetFoodService,
    ) {
        this.name = 'Main';
        this.$scope = $scope;
        $scope.counter = 0;
        $scope.reverse = true;

        GetFoodService.getFood().then(function(response) {
            $scope.food = response.data;

        }, function(data) {
            console.log(data);
        });

        $scope.sortBy = function(propertyName) {
            $scope.reverse = !$scope.reverse;
            GetFoodService.sortBy(propertyName);
        };

        $scope.addToCart = function(pizza) {
            GetFoodService.addToCart(pizza);
        }
    }
}

MainController.$inject = ["$scope", "GetFoodService"];








