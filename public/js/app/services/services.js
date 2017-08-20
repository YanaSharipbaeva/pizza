export default class GetFoodService {
    constructor($http, ngToast, $scope) {
        this.$http = $http;
        this.$scope = $scope;
        this.ngToast = ngToast;
        $scope.propertyName = 'age';
        $scope.reverse = true;
        this.$scope.chosenPizza = [];
        this.$scope.summary = 0;
        this.$scope.idCounter = 0;
        this.$scope.orders = [];
    }

    getFood () {
        return this.$http.get("pizza.json")
    }

    getFoodPrice () {
        return this.$scope.summary;
    }

    getCartItem () {
        return this.$scope.chosenPizza;
    }

    addToCart(pizza) {
        this.$scope.idCounter++;

        let chosenItem = {
            name: pizza.name,
            ingredients: pizza.ingredients,
            price: pizza.price,
            id: this.$scope.idCounter
        };

        this.$scope.chosenPizza.push(chosenItem);
        this.$scope.summary = this.$scope.summary + chosenItem.price;

        this.ngToast.success('','Pizza ' + chosenItem.name + ' ' + 'was successfully added to the cart', {
            closeButton: true,
            closeHtml: '<button>&times;</button>'
        });
    }

    removeFromCart (pizza) {
        this.$scope.summary = this.$scope.summary - pizza.price;
        this.$scope.chosenPizza =  this.$scope.chosenPizza.filter(function(item){
            return pizza.id !== item.id;
        });

        return this.$scope.chosenPizza
    }

    sortBy (propertyName) {
        this.$scope.reverse = (this.$scope.propertyName === propertyName) ? !this.$scope.reverse : false;
        this.$scope.propertyName = propertyName;
    };

    saveOrder (date, savedOrder, fullPrice) {
        let order = {
            date: date,
            order: savedOrder,
            price: fullPrice
        };
        this.$scope.orders.push(order);

    }

    showHistory () {
        return this.$scope.orders
    }

    clearCart () {
        this.$scope.chosenPizza = [];
        this.$scope.summary = 0;
    }
}

GetFoodService.$inject = [
    '$http',
    "toastr",
    '$rootScope'
];
