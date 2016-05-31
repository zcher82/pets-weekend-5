app.controller('PetsController', ['$scope', '$http', function($scope, $http) {
  console.log('pets controller running');

  var key = 'cf570d77d5fc8f98502226a88b74bb56';
  var baseURL = 'http://api.petfinder.com/';

  $scope.types = ["barnyard", "bird", "cat", "dog", "horse", "pig", "reptile", "smallfurry"];
  $scope.breed = '';
  $scope.selectedType = '';

  getNumFavorites();


  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + $scope.selectedType;
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        //$scope.getBreeds();
      }
    )
  }

  $scope.addFavorite = function() {
    var favoritePet = {};
    favoritePet.petId = $scope.animal.id.$t;
    favoritePet.name = $scope.animal.name.$t;
    favoritePet.type = $scope.animal.animal.$t;
    favoritePet.description = $scope.animal.description.$t;
    favoritePet.image = $scope.animal.media.photos.photo[3].$t;

    $http.post('/pets', favoritePet)
      .then(function() {

      })
  }


  function getNumFavorites () {
  $http.get('/pets')
    .then(function (response) {
      $scope.favoritesCount = response.data.favoritesCount;
      console.log('GET /pets ', response.data);
    });
  }

}]);
