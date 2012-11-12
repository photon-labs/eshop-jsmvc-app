steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'eshop/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Eshop.Category.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates categories
 */
$.Controller('Eshop.Category.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Eshop.Models.Category(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});