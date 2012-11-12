steal(
	'./css/eshop.css', 			// application CSS file
	// './fixtures/fixtures',
	'jquery/model',
	'jquery/class',
	'jquery/view/ejs',
	'./models/models')
.then('./category.ejs', 
	function($) {

	success = function(categoryResponse, e, xhr) {
		var categories = categoryResponse.category;

		console.log(categories.length);

		for (var i = 0; i < categories.length; i++) {
			$("#categories-list").append('category.ejs', {name: categories[i].name});

			//Showing the list as HTML
			//$("<div>").html("<p>"+categories[i].name+"</p>").appendTo("body");
		}
	}

	error  = function(xhr, e, et) {
		var jo = {"status":"server error"};
	}

	Eshop.Models.Category.findAll({}, success, error);

})
