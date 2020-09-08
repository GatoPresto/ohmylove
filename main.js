$(document).ready(function() {
	var metLove = moment([2016, 2, 31]);

	function refreshTime() {
		var diff = moment().diff(metLove);
		$('#time').html(humanizeDuration(diff, {round: true}));
	}

	refreshTime();
	setInterval(refreshTime, 1000);
});
