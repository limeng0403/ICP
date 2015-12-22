$(function() {


});

var id = getParams('id');
var type = getParams('type');

var info = product[type][id - 1];

var app = angular.module('myapp', []);
app.controller('myController', function($scope, $http) {
    $scope.info = info;
    $scope.type = type;
});

function getParams(key) {
    var params = window.location.search;

    params = params.replace('?', '');

    if (!params) {
        return '';
    }

    var split1 = params.split('&');

    for (var i = 0; i < split1.length; i++) {
        var split2 = split1[i].split('=');
        if (split2[0] == key) {
            return split2[1];
        }
    }

    return '';
}

function buyEvent(){
    alert('此功能仅为VIP会员开放，请注册VIP会员。');
}
