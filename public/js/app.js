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

$("#lastname, item1").append(_.last(products).name);
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
		$('#booksAvailable')
		.append(a[i].name + ' ')
		.append('$' + a[i].price + '<br>')
		.append("About: " + a[i].selling_points + '<br></p>');
		};
};

// ^^^ I want to adjust this section so that all of the information for each
// book is listed including the cover ^^^

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

var runrunrun = _.uniq(products, selling_points),selling_points;

$('#unique').append(loopyThree(runrunrun));

function loopyThree(a){
	for (var i = 0; i < a.length; i++) {
		$('#unique').append('<p>' + a[i].selling_points + '</p>');
		};
};

//in the loopyThree function above I would like to learn how to add spaces
//between the selling points

//The following is the map exercise...

$('#photosGoHere').append(loopyFour(_.map(products, function(items) {
	return items.picture_url;
})));

function loopyFour(a){
	for (var i = 0; i < a.length; i++) {
		$('img#photosGoHere').attr('src', a[i]);
		};
};

//I thought maybe this below would work somehow in the loopyFour function above but it didn't
/*function loopyFour(a){
	for (var i = 0; i < a.length; i++) {
		$('img#photosGoHere').append('<img id=\'photosGoHere\' ' + 'src=' + a[i].picture_url + ' ' + '/> <br>');
		};*/

// ^^^ I am only getting the last image on the screen, I will come back later ^^^

//The following is the pluck exercise...
//This was my original code, then I was able to replace the var feathers
//in each append() below with the _.pluck names above

//var feathers = _.pluck(products, 'name');

$('#plucking').append(loopyFive(_.pluck(products, 'name')));

function loopyFive(a) {
	for (var i = 0; i < a.length; i++) {
		$('#plucking').append('<p>' + a[i] + '</p>');
		};
	};

//The following is the reduce exercise...

var item0 = false, item1 = false, item2 = false, item3 = false, item4 = false, item5 = false;
var totalCost = 0;

//This is the loop that creates the individual titles to show on the screen
for (var i = 0; i < products.length; i++) {
	$('div#itemList').append('<p id=\'item' + [i] + '\'' + ' ' + 'class=\'item' + [i] + '\'>'
							 + products[i].name + ' $' + products[i].price + '<br> </p>');
};

//Item 1
$('#item0').on('click', function() {
			item0 = item0 ? false : true;
			if (item0 == true) {
			$(this).css('background', 'yellow');
			totalCost += products[0].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			} else {
			$(this).css('background', 'white');
			totalCost -= products[0].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			};
		});

//I created a for loop to take out this code, I only had 6 products but what if I had 1,000 products
//I would need to create a loop which I did above
/*$('.item1').append(products[0].name + ' ')
			.append('$' + products[0].price + '<br>');*/

//Item 2 
$('#item1').on('click', function() {
			item1 = item1 ? false : true;
			if (item1 == true) {
			$(this).css('background', 'yellow');
			totalCost += products[1].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			} else {
			$(this).css('background', 'white');
			totalCost -= products[1].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			};

		});

//I created a for loop to take out this code, I only had 6 products but what if I had 1,000 products
//I would need to create a loop which I did above
/*$('.item2').append(products[1].name + ' ')
			.append('$' + products[1].price + '<br>');*/

//Item 3
$('#item2').on('click', function() {
			item2 = item2 ? false : true;
			if (item2 == true) {
			$(this).css('background', 'yellow');
			totalCost += products[2].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			} else {
			$(this).css('background', 'white');
			totalCost -= products[2].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			};

		});

//I created a for loop to take out this code, I only had 6 products but what if I had 1,000 products
//I would need to create a loop which I did above
/*$('.item3').append(products[2].name + ' ')
			.append('$' + products[2].price + '<br>');
*/
//Item 4
$('#item3').on('click', function() {
			item3 = item3 ? false : true;
			if (item3 == true) {
			$(this).css('background', 'yellow');
			totalCost += products[3].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			} else {
			$(this).css('background', 'white');
			totalCost -= products[3].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			};

		});

/*$('.item4').append(products[3].name + ' ')
			.append('$' + products[3].price + '<br>');*/

//I created a for loop to take out this code, I only had 6 products but what if I had 1,000 products
//I would need to create a loop which I did above
//Item 5
$('#item4').on('click', function() {
			item4 = item4 ? false : true;
			if (item4 == true) {
			$(this).css('background', 'yellow');
			totalCost += products[4].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			} else {
			$(this).css('background', 'white');
			totalCost -= products[4].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			};

		});

/*$('.item5').append(products[4].name + ' ')
			.append('$' + products[4].price + '<br>');*/

//I created a for loop to take out this code, I only had 6 products but what if I had 1,000 products
//I would need to create a loop which I did above
//Item 6
$('#item5').on('click', function() {
			item5 = item5 ? false : true;
			if (item5 == true) {
			$(this).css('background', 'yellow');
			totalCost += products[5].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			} else {
			$(this).css('background', 'white');
			totalCost -= products[5].price;
			$('.totalCost').text('Total Cost: $' + totalCost.toFixed(2));
			};

		});

//I created a for loop to take out this code, I only had 6 products but what if I had 1,000 products
//I would need to create a loop which I did above
/*$('.item6').append(products[5].name + ' ')
			.append('$' + products[5].price + '<br>');*/

//Below here is just my garbage bin

//$('.totalCost')
/*$('#item1').on('click', function() {
	$(this).append(loopySix(_.pluck(products[0], name)));
};

function loopySix(a){
	for (var i = 0; i < a.length; i++) {
		$('#item1').append(a[i].name + ' ');
		$('#item1').append('$' + a[i].price + '<br>');
		};
};*/


	





//The following is the contains exercise...