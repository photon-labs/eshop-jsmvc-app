// map fixtures for this application

steal("jquery/dom/fixture", function() {
	
	// $.fixture("GET /categories", function(orig, settings, headers) {
	// 	console.log("categories called");

 //  		var categoryArr = [
 //  			[id:1, name: "Television"], 
 //  			[id:2, name: "Computers"],
 //  			[id:3, name: "Mobile Phones"]
 //  		];

 //  		return categoryArr;
	// })


	$.fixture.make("category", 5, function(i, category) {
		var names = ["Television", "Computers", "Mobile Phones", "Audio Devices", "Cameras"]
		return {
			id: i,
			name: names[i]
		}
	})

	// $.fixture.make("category", 5, function(i, category){
	// 	var descriptions = ["grill fish", "make ice", "cut onions"]
	// 	return {
	// 		name: "category "+i,
	// 		description: $.fixture.rand( descriptions , 1)[0]
	// 	}
	// })


	
	$.fixture.make("product", 5, function(i, product){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "product "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})