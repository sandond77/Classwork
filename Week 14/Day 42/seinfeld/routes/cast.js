module.exports = function(app, results){
	var html = "";
	html = "<h1> Seinfeld Cast </h1>";
	html += "<ul>"

	for (var i = 0; i < results.length; i++) {
		html += "<li><p> ID: " + results[i].id + "</p>";
		html += "</p>Name: " + results[i].name + "</p>";
		html += "</p>Coolness Points: " + results[i].coolness_points+ "</p>";
		html += "</p>Attitude: " + results[i].attitude + "</p></li>";
	}

	html += "</ul>";

	app.get("/cast", function(req,res) {
		res.send(html);
	});
};
