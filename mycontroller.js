app.controller("myController",function($scope){
    $scope.person=["a","b","c","m"]
    $scope.remove=function(x){
        $scope.person.splice(x,1)
    }
    $scope.add=function(x){
        $scope.person.push(x);
    }
    $scope.edit=function(x){
        $scope.person[x]=prompt("edit person name");
        

    }

})
