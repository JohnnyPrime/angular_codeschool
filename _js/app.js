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

    var words = [
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

    var directives = [
        {
            name: 'ng-app',
            data: "attach the Apllication Module to the page",
    }, {
            name: 'ng-controller',
            data: "attach a Controller function to the page",
    },
        {
            name: 'ng-show / ng-hide',
            data: "display a section based on an Expression",
    },
        {
            name: 'ng-repeat',
            data: "repeat a section for each item in an Array",
    },
    ];

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('LessonController', function () {
        this.vocab = words;
        this.directives = directives;
    });

})();