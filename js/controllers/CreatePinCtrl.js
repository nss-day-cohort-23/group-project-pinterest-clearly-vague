'use strict';

const angular = require('angular');
const firebase = require('firebase');

module.exports = function ($scope, PinFactory) {

  let uid = firebase.auth().currentUser.uid;
  
  $scope.addPin = () => {
    $scope.pin.uid = uid;
    PinFactory.addNewPin($scope.pin);
  };

  // PinFactory.getBoards(uid)
  // .then( (userBoards) => {
  //   $scope.userBoards = userBoards;
  // })
  // .catch( (err) => {
  //   console.log(err);
  // });
    

};