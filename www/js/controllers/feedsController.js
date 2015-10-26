angular.module('coo')
.controller('FeedsController', function($scope) {

	var redditFeeds = { 
		'name' : 'reddit',
		'cssClass' : 'reddit',
		'icon' : 'reddit',
		'visible' : true,
		'subfeeds': [
			{ 'name' : '/r/soccer', 'icon' : 'futbol-o', 'feed-url' : '//www.reddit.com/r/soccer', 'on' : true},
			{ 'name' : '/r/worldnews', 'icon' : 'globe', 'feed-url' : '//www.reddit.com/r/worldnews', 'on' : true},
			{ 'name' : '/r/truereddit', 'icon' : 'reddit-square', 'feed-url' : '//www.reddit.com/r/truereddit', 'on' : true},
			{ 'name' : '/r/depthhub', 'icon' : 'commenting', 'feed-url' : '//www.reddit.com/r/truereddit', 'on' : true}
		]
	}

	var guardianFeeds = {
		'name' : '<span class="guardian-blue">the</span><span class="guardian-white">guardian</span>',
		'cssClass' : 'guardian',
		'visible' : true,
		'icon' : '',
		'subfeeds' : [
		]
	}

	$scope.feeds = [
		redditFeeds,
		guardianFeeds
	]

	$scope.toggleFeed = function($event, feed) {
		feed.visible = !feed.visible;
	}

})