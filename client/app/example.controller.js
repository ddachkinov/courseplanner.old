//this is what my route generator generates

'use strict';
(function(){

function StoneComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('courseplannerApp')
  .component('stone', {
    templateUrl: 'app/stone/stone.html',
    controller: StoneComponent
  });

})();

//this is what your generates

'use strict';

angular.module('courseplannerApp')
  .controller('SyllabusCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
