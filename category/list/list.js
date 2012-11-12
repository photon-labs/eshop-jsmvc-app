steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'eshop/models' )
.then( './views/init.ejs', 
       './views/category.ejs', 
       function($){

/**
 * @class Eshop.Category.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists categories and lets you destroy them.
 */
$.Controller('Eshop.Category.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init', Eshop.Models.Category.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.category').model().destroy();
		}
	},
	"{Eshop.Models.Category} destroyed" : function(Category, ev, category) {
		category.elements(this.element).remove();
	},
	"{Eshop.Models.Category} created" : function(Category, ev, category){
		this.element.append(this.view('init', [category]))
	},
	"{Eshop.Models.Category} updated" : function(Category, ev, category){
		category.elements(this.element)
		      .html(this.view('category', category) );
	}
});

});