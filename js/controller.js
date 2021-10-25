
app.controller("angularController", function ($scope, angularServices) {
    angularServices.fetchData().success(function(data, status){
                $scope.data = data;
                console.log($scope.data)
            });
    });
