// load('eshop/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("eshop/eshop.html","eshop/out")
});
