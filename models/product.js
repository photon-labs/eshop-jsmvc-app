steal('jquery/model', function(){

/**
 * @class Eshop.Models.Product
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend product services.  
 */
$.Model('Eshop.Models.Product',
/* @Static */
{
	findAll: "/products.json",
  	findOne : "/products/{id}.json", 
  	create : "/products.json",
 	update : "/products/{id}.json",
  	destroy : "/products/{id}.json"
},
/* @Prototype */
{});

})