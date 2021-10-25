
app.service('angularServices', function ($http) {

    this.fetchData = function () {
return  $http.get('http://localhost:8085/data?input=2');
}

    });
