export default class HistoryController {
    constructor(
        $scope,
        GetFoodService
    ) {
        this.name = 'History';
        $scope.reverse = true;
        $scope.orders = GetFoodService.showHistory();

        $scope.sortBy = function(propertyName) {
            $scope.reverse = !$scope.reverse;
            GetFoodService.sortBy(propertyName);
        };
    }
}

HistoryController.$inject = ["$scope", "GetFoodService"];






