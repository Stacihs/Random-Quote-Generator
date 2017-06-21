$(document).ready(function() {
	
var randomQuote = "http://api.forismatic.com/api/1.0/";
	$.getJSON(randomQuote, function(data) {
  $().text(JSON.stringify(data);
}, "json");
	})
})




















