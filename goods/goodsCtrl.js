angular.module('hello.goods', [])
.controller('goodsCtrl', ['$scope', function($scope){
  $scope.list = [
  {id:1, name:'上衣'},
  {id:2, name:'下衣'},
  {id:3, name:'中衣'},
  {id:4, name:'女装'}
  ]
}])
