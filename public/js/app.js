var firstname = _.first(products).name;
var firstcategory = _.first(products).category;
var firstsellingPoints = _.first(products).selling_points;
var firstprice = _.first(products).price;
var picture_url = _.first(products).picture_url;

$("#firstname").append(firstname);
$("#firstcategory").append(firstcategory);
$("#firstsellingPoints").append(firstsellingPoints[0] + ', ' + firstsellingPoints[1] + ', ' + firstsellingPoints[2]);
$("#firstprice").append(firstprice);



$("#myImage").attr("src", picture_url);

// $(‘#’ + key).whateverJquerymethod(src, value);
// <img id=”picture_url” class=“1”>
// $(“#” + key + “.” + i)
// if(title)
// if(key === title) <h1> title </h1>

var lastname = _.last(products).name;
var lastcategory = _.last(products).category;
var lastsellingPoints = _.last(products).selling_points;
var lastprice = _.last(products).price;
var picture_url = _.last(products).picture_url;

$("#lastname").append(lastname);
$("#lastcategory").append(lastcategory);
$("#lastsellingPoints").append(lastsellingPoints[0] + ' ' + lastsellingPoints[1]);
$("#lastprice").append(lastprice);



$("#myLastImage").attr("src", picture_url);

var books = _.filter(products, function(item, key) {
	//return _.each(this, function(category) {
		return products.category == "books";
	});
//});

$('#booksAvailable').append(books);