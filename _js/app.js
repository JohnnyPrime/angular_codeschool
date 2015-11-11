/*globals angular */

(function () {
    "use strict";

    var gems = [
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: false,
            soldOut: true,
    }, {
            name: 'Toss',
            price: 2.96,
            canPurchase: false,
            soldOut: true,
    }
    ];

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

})();