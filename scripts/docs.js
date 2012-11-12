//js eshop/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('eshop/eshop.html', {
		markdown : ['eshop']
	});
});