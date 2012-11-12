steal(
	'./css/eshop.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'eshop/category/create',
	'eshop/category/list',
	'eshop/product/create',
	'eshop/product/list',
	function(){					// configure your application
		
		$('#categories').eshop_category_list();
		$('#create_category').eshop_category_create();
		$('#products').eshop_product_list();
		$('#create_product').eshop_product_create();
})