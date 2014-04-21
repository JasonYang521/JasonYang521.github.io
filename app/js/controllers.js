'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {
				<div ng-controller="Hello">
			<p>The ID is {{greeting.items[0].owner}}</p>
				<ul ng-repeat="item in greeting.items">
			<li>The Value and Key  is {{item.owner.reputation}}</li>
		</ul>
		</div>
  }])
  .controller('MyCtrl2', [function() {
	
  }]);
