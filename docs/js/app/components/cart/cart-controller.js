export default class CartController {
    constructor(
        $scope,
        GetFoodService
    ) {
        this.name = 'Cart';
        $scope.cartItems = [];
        $scope.cartItems.push(GetFoodService.getCartItem());
        $scope.cartItems = $scope.cartItems[0];
        $scope.summary = GetFoodService.getFoodPrice();

        $scope.removeCartItem =  function(pizza){
            $scope.cartItems = GetFoodService.removeFromCart(pizza);
            $scope.summary = GetFoodService.getFoodPrice();
        };

        $scope.submitOrder = function() {
            let date = new Date().getTime() ;
            GetFoodService.saveOrder(date, $scope.cartItems, $scope.summary);
            $scope.cartItems = [];
            $scope.summary = 0;
            $scope.checked = true;
            GetFoodService.clearCart();
        };
        $scope.checked =  $scope.summary === 0
    }
}

CartController.$inject = ["$scope", "GetFoodService"];






