'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/syllabusses').then(response => {
      this.syllabusses = response.data;
      this.socket.syncUpdates('syllabusses', this.syllabusses);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('coursePlannerApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
