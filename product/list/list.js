steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'eshop/models' )
.then( './views/init.ejs', 
       './views/product.ejs', 
       function($){

/**
 * @class Eshop.Product.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists products and lets you destroy them.
 */
$.Controller('Eshop.Product.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Eshop.Models.Product.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.product').model().destroy();
		}
	},
	"{Eshop.Models.Product} destroyed" : function(Product, ev, product) {
		product.elements(this.element).remove();
	},
	"{Eshop.Models.Product} created" : function(Product, ev, product){
		this.element.append(this.view('init', [product]))
	},
	"{Eshop.Models.Product} updated" : function(Product, ev, product){
		product.elements(this.element)
		      .html(this.view('product', product) );
	}
});

});