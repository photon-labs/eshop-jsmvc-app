steal("funcunit/qunit", "eshop/fixtures", "eshop/models/product.js", function(){
	module("Model: Eshop.Models.Product")
	
	test("findAll", function(){
		expect(4);
		stop();
		Eshop.Models.Product.findAll({}, function(products){
			ok(products)
	        ok(products.length)
	        ok(products[0].name)
	        ok(products[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Eshop.Models.Product({name: "dry cleaning", description: "take to street corner"}).save(function(product){
			ok(product);
	        ok(product.id);
	        equals(product.name,"dry cleaning")
	        product.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Eshop.Models.Product({name: "cook dinner", description: "chicken"}).
	            save(function(product){
	            	equals(product.description,"chicken");
	        		product.update({description: "steak"},function(product){
	        			equals(product.description,"steak");
	        			product.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Eshop.Models.Product({name: "mow grass", description: "use riding mower"}).
	            destroy(function(product){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})