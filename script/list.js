var type = getParams('type');
var app = angular.module('myapp', []);
app.controller('myController', function($scope, $http) {
    $scope.maorong='';
    $scope.jimu='';
    $scope.diandong='';
    $scope.huwai='';
    $scope.type=type;
    $scope.list = product[type];
    $scope[type]='curr';
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
