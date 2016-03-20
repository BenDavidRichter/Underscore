//I did the project long hand because its all I know
//but as I practice more I will be able to review the following
//lines of code and make them more compact
//Source of exercises http://remote-prep.herokuapp.com/#17.html

//This is the _.first() exercise...

//This was my original code, then I was able to replace the var names
//in each append() below with the _.first names above

//var firstname = _.first(products).name;
//var firstcategory = _.first(products).category;
//var firstsellingPoints = _.first(products).selling_points;
//var firstprice = _.first(products).price;
//var picture_url = _.first(products).picture_url;

$("#firstname").append(_.first(products).name);
$("#firstcategory").append(_.first(products).category);
$("#firstsellingPoints").append(_.first(products).selling_points);
$("#firstprice").append(_.first(products).price);

$("#myImage").attr("src", _.first(products).picture_url);

//The following are suggestions from Auggie through chat...

// $(‘#’ + key).whateverJquerymethod(src, value);
// <img id=”picture_url” class=“1”>
// $(“#” + key + “.” + i)
// if(title)
// if(key === title) <h1> title </h1>

//The following is the _.last() exercise...

//This was my original code, then I was able to replace the var names
//in each append() below with the _.last names above

//var lastname = _.last(products).name;
//var lastcategory = _.last(products).category;
//var lastsellingPoints = _.last(products).selling_points;
//var lastprice = _.last(products).price;
//var picture_url = _.last(products).picture_url;

$("#lastname").append(_.last(products).name);
$("#lastcategory").append(_.last(products).category);
$("#lastsellingPoints").append(_.last(products).selling_points);
$("#lastprice").append(_.last(products).price);

$("#myLastImage").attr("src", _.last(products).picture_url);

//The following is the _.filter() exercise...

//This was my original code, then I was able to replace the var name books
//in append(loopy(books)) below with the var books definition

/*var books = _.filter(products, function(item, key) {
		return item.category == "books";
	});*/

$('#booksAvailable').append(loopy(_.filter(products, function(item, key) {
		return item.category == "books";
		})));

function loopy(a){
	for (var i = 0; i < a.length; i++) {
		$('#booksAvailable').append(a[i].name + '<br>');
		};
};

//The following is the _.reject() exercise...

//This was my original code, then I was able to replace the var name books
//in append(loopyTwo(below)) below with the var below definition

/*var below = _(products).reject(function(item, key) {
		return item.price > 20;
});*/

$('#below').append(loopyTwo(_.reject(products, function(item, key) {
		return item.price > 20;
})));

function loopyTwo(a){
	for (var i = 0; i < a.length; i++) {
		$('#below').append(a[i].name + '<br>');
		};
};

//The following is the _.uniq() exercise...

// Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  
  $('#unique').append()

var runrunrun = _.uniq(products, selling_points),selling_points;

$('#unique').append(loopyThree(runrunrun));

function loopyThree(a){
	for (var i = 0; i < a.length; i++) {
		$('#unique').append('<p>' + a[i].selling_points + '</p>');
		};
};

//in the loopyThree function above I would like to learn how to add spaces
//between the selling points

