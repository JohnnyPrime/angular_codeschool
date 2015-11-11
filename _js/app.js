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

    var vocab = [
        {
            name: 'Directives',
            data: "HTML annotations that trigger Javascript behaviors",
    }, {
            name: 'Modules',
            data: "Where our application components live",
    },
        {
            name: 'Controllers',
            data: "Where we add application behavior",
    },
        {
            name: 'Expressions',
            data: "How values get displayed within the page",
    },
    ];

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('LessonController', function () {
        this.vocab = vocab;
    });

})();