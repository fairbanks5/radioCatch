
var page = require('webpage').create();
var url = "http://kexp.org/s/s.aspx?x=3";

page.open(url, function(status) {
	if ( status === "success" ) {
	    console.log("Got reply!");
	    console.log(page.content);
	    phantom.exit();
       	}
    });

