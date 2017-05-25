angular.module('hello.detail', [])
.controller('detailCtrl', ['$scope','$stateParams', function($scope,$stateParams){
  // alert(1)
  // 根据地址栏中的 1 或者 2 来发请求获取不同的数据
  // $http.get('/getdata?id=1')
 console.log($stateParams)
 // $stataParams.myid
 $scope.myid = $stateParams.myid
}])