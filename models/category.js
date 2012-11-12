steal('jquery/model', function(){

/**
 * @class Eshop.Models.Category
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend category services.  
 */
$.Model('Eshop.Models.Category',
/* @Static */
{
	findAll: function(params, success, error) {

		var url = "http://localhost:2020/eshop/rest/api/categories";

		return $.ajax({
				url: url,
				header:"Access-Control-Allow-Headers: x-requested-with",
				type: "GET",
				dataType: "json"
		}).then(success).fail(error);
	},

	// findAll : "/categories", 
  	findOne : "/categories/{id}", 
  	create : "/categories",
 	update : "/categories/{id}",
  	destroy : "/categories/{id}"
},
/* @Prototype */
{});

})