app.controller('FavoritesController', ['$scope', '$http', function($scope, $http) {
  console.log('favorites controller running');

  var key = 'cf570d77d5fc8f98502226a88b74bb56';
  var baseURL = 'http://api.petfinder.com/';

  $scope.numFavorites = '';
  $scope.favorites = [];


  getNumFavorites();
  getFavorites();

//GET -- gets the favorite pets from DB and displays them on the DOM
  function getFavorites () {
    $http.get('/favorites')
      .then(function (response) {
        console.log(response);
        $scope.favorites = response.data;
      });
  }


//DELETE -- deletes favorites from DB and calls getFavorites function again to "refresh" the DOM
  $scope.deletePet = function (id) {
    console.log(id);
    $http.delete('/favorites/' + id)
      .then(function (response) {
        getFavorites();
        getNumFavorites();

      });
    };



  function getNumFavorites () {
    $http.get('/pets')
      .then(function (response) {
        $scope.favoritesCount = response.data.favoritesCount;
      });
  }


}]);
