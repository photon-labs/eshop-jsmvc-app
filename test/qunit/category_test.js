steal("funcunit/qunit", "eshop/fixtures", "eshop/models/category.js", function(){
	module("Model: Eshop.Models.Category")
	
	test("findAll", function(){
		expect(4);
		stop();
		Eshop.Models.Category.findAll({}, function(categories){
			ok(categories)
	        ok(categories.length)
	        ok(categories[0].name)
	        ok(categories[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Eshop.Models.Category({name: "dry cleaning", description: "take to street corner"}).save(function(category){
			ok(category);
	        ok(category.id);
	        equals(category.name,"dry cleaning")
	        category.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Eshop.Models.Category({name: "cook dinner", description: "chicken"}).
	            save(function(category){
	            	equals(category.description,"chicken");
	        		category.update({description: "steak"},function(category){
	        			equals(category.description,"steak");
	        			category.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Eshop.Models.Category({name: "mow grass", description: "use riding mower"}).
	            destroy(function(category){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})