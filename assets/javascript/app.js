$(document).ready(function() {
	//These variables hold the URL for the API and the AuthKey to access it
	
		var key ="fdb40e7da69d42a3a31e3ac324dbac6a";
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +key ;
		var searchTerm = "";
		var numRecords = 0;
		var startYear = 0;
		var endYear = 0;
		var articleCounter = 0;

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		//Function handles the data after the call
		.done(function(response){
			//logs data response
			console.log(response);
			console.log("Url: "+ queryURL);
		})

		$("#runSearch").on("click", function(){

			event.preventDefault();
		
	});

});