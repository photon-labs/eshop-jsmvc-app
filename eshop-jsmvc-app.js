steal(
	'./css/eshop.css', 			// application CSS file
	'./fixtures/fixtures',
	'jquery/model',
	'jquery/class',
	'jquery/view/ejs',
	'./models/models')
.then('./category-list.ejs', './category.ejs', 
	function($) {

	// success = function(categories, e, xhr) {
	// 	// var categories = categoryResponse.category;

	// 	console.log(categories.length);

	// 	for (var i = 0; i < categories.length; i++) {
	// 		console.log(categories[i]);
	// 		//Showing the list as HTML
	// 		//$("<div>").html("<p>"+categories[i].name+"</p>").appendTo("body");
	// 	}

	// 	//Looping moved inside the template
	// 	// $("#categories-list").append('category-list.ejs', {categories: categories});

	// 	//Using views
	// 	//var htmlContent = $.View('category-list.ejs', {categories: categories});

	// 	$("#categories-list").html('category-list.ejs', categories);
	// }

	// error  = function(xhr, e, et) {
	// 	var jo = {"status":"server error"};
	// }

	// Eshop.Models.Category.findAll({}, success, error);

	//Simplified code, done using the view
	Eshop.Models.Category.findAll({}, function(categories) {
  		$("#categories-list").html("category-list.ejs" , categories)
	})

})
