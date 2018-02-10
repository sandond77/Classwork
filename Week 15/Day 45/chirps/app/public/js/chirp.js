// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirp
$.get("/api/all"), function(data){
	if (data.length !==0) {
		for (var i = 0; i < data.length; i++) {
			var row = $("<div>");
			row.addClass("chirp");
			
		}
	}
}


// When user chirps
