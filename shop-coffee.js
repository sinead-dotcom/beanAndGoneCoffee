/* CA3 Project Web Dev - Individual page - shop-coffee.js

	@Sinead Bradley x20147511@student.ncirl.ie
	9 dec 2020
	
	https://github.com/sinead-dotcom/
	
	alpha V10.02
	Would like to load up the product images from a DataBase - since not done DBs yet,
	will use an array of image names instead.
	
*/

//load on .ready, DOM content has loaded; not wait for other assets to load; limit variable scope
$(function(){
		
	//constants
	const euro = "\u20ac"; /* euro sign */
	const totalNumProducts = 9; /*hard code it for now */
	//we haven't done JSON or Databases so using simple arrays to store relevant product information */
	const  merchandiseFileNames = ["images/naf-drip-brewer.jpg",
									"images/espresso-maker-on-white-stone-counter.jpg",
									"images/JJ-silver-coffe-mug.jpg",
									"images/naf-drip-brewer.jpg",
									"images/espresso-maker-on-white-stone-counter.jpg",
									"images/JJ-silver-coffe-mug.jpg",
									"images/naf-drip-brewer.jpg",
									"images/espresso-maker-on-white-stone-counter.jpg",
									"images/JJ-silver-coffe-mug.jpg"];
									
	const merchandiseUnitCost = [111,200,300,400,50,60,70,80,90]
	const merchandiseAlt = ["naf drip brewer", "JJ espresso maker on white stone counter",
							"JJ silver coffe mug","naf drip brewer", "JJ espresso maker on white stone counter",
							"JJ silver coffe mug", "naf drip brewer", "JJ espresso maker on white stone counter",
							"JJ silver coffe mug"];
	const merchandiseName = ["NAF drip brewer", "JJ espresso maker on white stone counter",
							"JJ silver coffe mug","NAF drip brewer", "JJ espresso maker on white stone counter",
							"JJ silver coffe mug", "NAF drip brewer", "JJ espresso maker on white stone counter",
							"JJ silver coffe mug"];


	var errText = { error1: "This is error1",
					error2: "This is error2",
	}
	
	
	// listen for hamburger button click - when media mobile 
	$('#sidebarButton').on('click', function(){
		$("#sidebarNav").slideToggle("slow");
	});
	//load all the proudcts to display
	loadProducts();
	
	
	
	
	function loadProducts(){
		for (let i=0; i< 2; i++){
			$newProduct = $(".cloneProduct").clone();
			console.log($newProduct);
			//set image src and alt
			//$newProduct.children().first().children().first().children().eq(0).attr("src","espresso-maker-on-white-stone-counter.jpg");
			//$newProduct.children().first().children().first().children().eq(0).attr("alt","espresso maker on white stone counter");
			//$newProduct.children().first().children().first().children().eq(0).attr("src","espresso-maker-on-white-stone-counter.jpg");
			//$newProduct.children().first().children().first().children().eq(0).attr("alt","espresso maker on white stone counter");
			
			//set product name
			$newProduct.children().first().children().first().children().eq(1).text(merchandiseName[i]);
			$newProduct.children().first().children().first().children().eq(0).attr("src", merchandiseFileNames[i]);
			$newProduct.children().first().children().first().children().eq(0).attr("alt", merchandiseAlt[i]);
			
			//set price 
			$newProduct.children().first().children().first().children().eq(2).text(merchandiseUnitCost[i]);

			$newProduct.
			//console.log($newProduct.children().first().children().first().children().eq(2));
			//$("div.newProduct h2:first").text("EEespresso maker");
			console.log($newProduct);
			//$("div.newProduct p:first").text("111E");
			$newProduct.appendTo("#sectionOne");
		}
	
	let sum= 0;
		
	
	};
	
	
}); // function, wait till dom loaded before js.  limit variable to local fnct. 