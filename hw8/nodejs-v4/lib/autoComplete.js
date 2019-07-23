//'angularUtils.directives.dirPagination'
//'angular-svg-round-progressbar'
//
var app = angular.module('Boom',['angular-svg-round-progressbar']);

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});

app.controller('mainContent', ['$scope','$http',function($scope,$http){
    //let domain = 'localhost:3000';
    var homepage = 'localhost:3000';
        
	//PAGINATION 
	$scope.showPageNum = true;
	$scope.itemsPerPage = 10;
	$scope.currentPage = 0;

	$scope.range = function() {
		var rangeSize = 5;
		var ret = [];
		var start;

		start = $scope.currentPage;
		if ( start > $scope.pageCount()-rangeSize ) {
		  start = $scope.pageCount()-rangeSize+1;
		}
		for (var i=start; i<start+rangeSize; i++) {
		  ret.push(i);
		}
		return ret;
	};

	$scope.prevPage = function() {
		if ($scope.currentPage > 0) {
		  $scope.currentPage--;
		}
	};

	$scope.prevPageDisabled = function() {
		return $scope.currentPage === 0 ? "disabled" : "";
	};
	
	$scope.nextPageDisabled = function() {
		return $scope.currentPage === 5 ? "disabled" : "";
	};

	$scope.pageCount = function() {
		return Math.ceil($scope.productSearchResults.length/$scope.itemsPerPage)-1;
	};

	$scope.nextPage = function() {
		if ($scope.currentPage < $scope.pageCount()) {
		  $scope.currentPage++;
		}
	};

	$scope.nextPageDisabled = function() {
		return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
	};

	$scope.setPage = function(n) {
		$scope.currentPage = n;
	};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
/* (1)FIX TO AUTOCOMPLETE, prepei na pianneis to value pou to drop down menu, akoma en to pianneis!
->HOME 8 de pou jinon !
(3) Otan exw to swsto link, node js call api ebay de 
(4) Create me angular nomizw to table !
    
Genika stin arxi dixnoumen ta oulla, je kapia en hidden. Meta kamnw to table populate me to data pou piannw, kai meta me jquery allasw ta values gia na men en hidden ta tables.!
UCHE!
*/
//    ip.then(function(response){
//		$scope.Obj= response;
//		$scope.hereLoc= $scope.Obj.hereLoc.hereZip
//	})
        
        
   /* $scope.countryList = [
                          "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
                          ]*/
        
    /*-----------AUTOCOMPLETE allo-------------
    $scope.entered = "";
    $scope.query= function(searchText){
        return $http
          .get("/AutoComplete/" + searchText)
          .then(function(data) {
            // Map the response object to the data object.
            return data.data;
          }, function(err){
            $scope.autoCompleteSearch_error= err;
            return err;
          });
	}
    ------------------------------------------*/
    //autocomplete
    $scope.cname = function(string) {
        console.log(string);
        console.log(/^\d{5}(-\d{4})?$/.test(string));
        var searchButton = document.getElementById("search");
        if(/^\d{5}(-\d{4})?$/.test(string)){
            searchButton.disabled = false;
        }
        else{
            searchButton.disabled = true;
        }
        return $http.get(/*domain + */"/AutoComplete/" + string)
        .then(function(response){
            console.log("TI PIANNW POU EGRAFTIKEN PAS TO AUTOCOMPLETE");
            console.log(response.data);
            //return response.data;
            $scope.hidethis = false;
            var output = [];
            angular.forEach(response.data, function(low) {
                output.push(low);
            });
            $scope.filterCountry = output;
        });
    }
    $scope.fillInputBox = function(string) {
        $scope.country = string;
		//dame call gia is valid. 
		var searchButton = document.getElementById("search");
		if(isValidUSZip(string)){
			searchButton.disabled = false;
		}
		else{
			searchButton.disabled = true;
		}
        $scope.hidethis = true;
    };
    $scope.ela = function(string){
        var searchButton = document.getElementById("search");
        if(string != ""){
            searchButton.disabled = false;
        }
        else{
            searchButton.disabled = true;
        }
    }
    //ip 
    $scope.currentZip = "";
    $scope.onload = function() {
        console.log("EMPIKES STO IP KALAL KOKOKOKOK");
        $http.get("https://ipapi.co/json/")
        .then(function(response) {
            $scope.currentZip = response.data.postal;
            console.log($scope.currentZip);
        }); 
    }    
    
    $scope.productSearchResults = [];
    $scope.productDetailsResults = [];
    $scope.photosTab = [];
	$scope.shippingInfo = [];
	$scope.sellerInfo = [];
	$scope.similarItems =[];
        
    $scope.progressBar = true;
    $scope.fixedTitles = [];
	
	//Show more kai show less
	$scope.limit = 5;
	$scope.loadMore = function() {
		console.log($scope.similarItems.data.length);
		
	  if(document.getElementById("buttn").innerHTML == "Show Less"){
			$scope.limit = 5;
			document.getElementById("buttn").innerHTML = "Show More";
	  }
	  else{
		$scope.limit = $scope.similarItems.data.length;
		document.getElementById("buttn").innerHTML = "Show Less";
	  }
	  //$('#buttn').text('Show less');
	}
	
	//similar tab sorting
	$scope.sortCategory = "Default";
	$scope.sortOrder = "Ascending";
	$scope.reverse = false;
	
	//Detail koumpoui
    $scope.highlightedRow = null;	
 
    //sthn arxi en dixnw tipote
    $scope.showResult= true;
    $scope.showDetail= true;
	
	//wishlist everything
	$scope.wishListSHOW = true; //everything div
	$scope.wishListResultERROR = true; //error div
	$scope.wishListTable = true; //table me results
	$scope.fixedTitlesWishList = [];
	$scope.wishListore = [];
	$scope.working = 0;
	$scope.totalShippingWishListValue = 0.0;
	
	
	
    $scope.wishListAddorRemove = function(id){ 
		var btn = $('#wishExtraButton').html();
		console.log(btn);
	
		if(btn == 'add_shopping_cart'){
			console.log("EIMAI STO PRWTO IF");
			$('#wishExtraButton').css("color", "#b08b28");
			$('#wishExtraButton').html('remove_shopping_cart');
			if(!(id in localStorage)){
	            for(var i = 0; i < $scope.productSearchResults.length; i++){
					if($scope.productSearchResults[i].ID== id){
						$('#WishButton'+ i).html('remove_shopping_cart');
						$('#WishButton'+ i).css("color", "#b08b28");
						var obj =  JSON.stringify($scope.productSearchResults[i]);
						localStorage.setItem(id, obj);
						//add sto wishlistore
						
					}
				}
			}
		}
		else{
			console.log("EIMAI STO ELSE TOU WISH LIST ADD/REMOVE");
			$('#wishExtraButton').html('add_shopping_cart');
			$('#wishExtraButton').css("color", "black");
			if(id in localStorage){
				for(var j = 0; j < $scope.productSearchResults.length; j++){
					if($scope.productSearchResults[j].ID== id){
						$('#WishButton'+ j).html('add_shopping_cart');
						//$('#WishButton'+ j).addClass('remove_shopping_cart');
						$('#WishButton'+ j ).css('color', "black");
						localStorage.removeItem(id);
						//delete pou to wishlistore
						if($scope.wishListore.length != 0){
							for( var i = 0; i < $scope.wishListore.length; i++){
								if ($scope.wishListore[i].ID === id) {
									$scope.wishListore.splice(i, 1); 
									i--;
								}
							}
						}
					}

				}
				
			}
		}
		//calculateTotal($scope.wishListore);
	}
	
	
	
	$scope.removeFromWishList = function(itemID){
		localStorage.removeItem(itemID);
		//localStorage.removeItem(itemID);
		//localStorage.clear();
		//console.log($scope.wishListore[0].ID);
		for( var i = 0; i < $scope.wishListore.length; i++){ 
			if ($scope.wishListore[i].ID === itemID) {
				console.log($scope.productSearchResults[0].ID);
				for(var j = 0; j< $scope.productSearchResults.length; j++){
					if($scope.productSearchResults[j].ID == itemID){
						$('#WishButton' + j).removeClass('remove_shopping_cart');
						$('#WishButton'+ j).html('add_shopping_cart');
						$('#WishButton' + j).css("color", "black");
					}
				}
				$scope.wishListore.splice(i, 1); 
				i--;
			}
		}
		calculateTotal($scope.wishListore);
		
		console.log("WE ARE in removefrom wishlist f function");
		console.log(localStorage);
		
	}
	$scope.addWishList= function(id, item, index){
        toAdd = JSON.stringify(item);
        //console.log(toAdd);
        console.log($('#WishButton'+index).html());
		if($('#WishButton'+index).html() == 'add_shopping_cart' /*&& !(id in localStorage*/) {
			console.log("WE PASSED THE FIRST IF STATEMENT");
            //store them in wishListore
			if(!(id in localStorage)){
                console.log("We put in in the wishlist ");
				localStorage.setItem(id, toAdd);
				//$scope.wishListore.push(toAdd);
				//$scope.wishListore += toAdd;
				$('#WishButton'+ index).html('remove_shopping_cart');
				$('#WishButton' + index).addClass('remove_shopping_cart');
                $('#WishButton' + index).css("color", "#b08b28");
			}
		}
		else{
			//localStorage.clear();
			localStorage.removeItem(id);
			if($scope.wishListore.length != 0){
				for( var i = 0; i < $scope.wishListore.length; i++){
					if ($scope.wishListore[i].ID === id) {
						$scope.wishListore.splice(i, 1); 
						i--;
					}
				}
			}
		
            console.log("It's already present, we remove it ");
            $('#WishButton'+ index).html('add_shopping_cart');
            $('#WishButton' + index).removeClass('remove_shopping_cart');
            $('#WishButton' + index).css("color", "black");
			//$scope.wishListore.removeItem(id);
		}
		//calculateTotal($scope.wishListore);
		console.log("LETS SEE THE WISHLIST");
		//console.log($scope.wishListtore);
		console.log(localStorage);
	}
	$scope.showWishList = function(){
		$('#results').removeClass("btn btn-dark");
        $('#results').addClass("btn btn-light");
		$('#wishlist').removeClass("btn btn-light");
		$('#wishlist').addClass("btn btn-dark");
		
		
		keys = Object.keys(localStorage);
		console.log("KEYS");
		console.log(keys);
		i = keys.length;
		
        var fruits = [];
		console.log("NA DOUMEN POSA EINAI TO LOCAL STORAGE LENGTH");
		console.log(localStorage.length);
		if(localStorage.length != 0){
			while(i--){
				if(keys[i] in localStorage){
					console.log(localStorage.getItem(keys[i]))
					fruits.push(JSON.parse(localStorage.getItem(keys[i])));
				}
			}
		$scope.wishListResultERROR= true;
		$scope.wishListore = fruits;
		calculateTotal($scope.wishListore);
		console.log($scope.wishListore);
		$scope.fixedTitlesWishList =  fixTitle($scope.wishListore);
		$scope.wishListSHOW = false; // show
		$scope.wishListTable = false;
		}
		else{
			console.log("EMPIKA STO ELSE");
			$scope.wishListTable = true; //dont show
			$scope.wishListResultERROR = false;//show
		}
		$scope.wishListSHOW = false; 
		$scope.showResult  = true; //dont show
		$scope.showDetail  = true; //dont show
	}
	
	$scope.selectedRow = null;
	
	$scope.categoryChoose = function(cat){
		console.log("EMPIKA STO FUNCTION");
		console.log(cat);
		if(cat == 'prodName'){
			$scope.sortCategory= 'prodName';
			console.log("sort category einai prod name ");
		}
		if(cat == 'timeLeft'){
			$scope.sortCategory = 'timeLeft';
			console.log("sort category einai days left ");
		}
		if(cat == 'shippingCost'){
			$scope.sortCategory = 'shippingCost';
			console.log("sort category einai shopping cost ");
		}
		if(cat == 'price'){
			$scope.sortCategory = 'price';
			console.log("sort category einai price  ");
		}
	}
	
	$scope.orderDE = function(order){
		console.log("EMPIKA KAI EDW");
		console.log(order);
		if(order == "Ascending"){
			console.log("BOOM");
			$scope.reverse = false;
		}else{
			console.log("BOOM2");
			$scope.reverse = true;
		}
	}
	
    $scope.showResultsButton = function(){
		console.log($('#wishlist').removeClass("btn btn-dark"));
        console.log($('#wishlist').addClass("btn btn-light"));
		console.log($('#results').addClass("btn btn-dark"));
		$scope.wishListSHOW = true;
        $scope.showDetail = true;
		if($scope.showResult= true){
			$scope.showResult= false;
		}        
    }
    $scope.setClickedRow = function(index){
		$scope.selectedRow= index;
	}
    $scope.showPrevious = function(){
		$scope.showResult= false;
		$scope.showDetail= true;
	}
    $scope.showDetailButton = function() {
        $scope.showResult = true;//dont show
        $scope.showDetail = false;//show
    }
    $scope.searchForm= {
        keyword: '',
        category: 'AllCategories',
        condNew: '',
        condUnspe: '',
        condUsed: '',
        localPickup: '',
        freeShipping: '',
        distance: 10,
        zipButton: "1"
	}; 
    $scope.reset = function(){
		//$scope.productSearchForm.$setPristine();
		//$scope.productSearchForm.$setUntouched();
        $scope.showResult= true;
        $scope.showDetail= true;
        $scope.wishListSHOW = true;
//		$scope.showDetail= true;
//		$scope.event_data= [];
//		$scope.upcomingEvents= [];
//		$scope.storage= [];
		$scope.searchForm = {
            keyword: '',
            category: 'AllCategories',
            condNew: '',
            condUnspe: '',
            condUsed: '',
            localPickup: '',
            freeShipping: '',
            distance: 10,
            zipButton: 'true'
            
		};
        $scope.productSearchResults = [];
        $scope.fixedTitles = [];
		$scope.fixedTitlesWishList = [];
        $scope.wishListore = [];
		//$('#default-button').prop("checked", true);
	}
    $scope.submitForm = function(){
        $scope.progressBar= false;
        console.log("EEEEEEEEE");
        
        var key = $scope.searchForm.keyword;
        var cate = $scope.searchForm.category;
        var con_new = $scope.searchForm.condNew;
        var con_used = $scope.searchForm.condUsed;
        var con_unspe = $scope.searchForm.condUnspe;
        var localPi = $scope.searchForm.localPickup;
        var freeShi = $scope.searchForm.freeShipping;
        var distance = $scope.searchForm.distance;
        var zip;
        var cond = "m";
        var ship = "m";
        console.log("BLEPOMEN TO ZIP BUTTON VALUE TOU");
        console.log($scope.searchForm.zipButton);
        var z1 = $scope.searchForm.zipButton;
        if(z1 == true || z1 == "1"){
        //if($scope.zip.one == "true"){
            zip = $scope.currentZip;
        }
        else{
            zip = $scope.country;
        }
/*encodeURI($scope.productSearchForm.keyword)*/
        //var urlCall = "http://localhost:3000/ProductSearch/" + key + "/" + cate;
        var urlCall = "/ProductSearch/" + key + "/" + cate;
        if(con_new != ""){
            cond += "N";
        }
        if(con_used != ""){
            cond += "Us";
        }
        if(con_unspe != ""){
            cond += "Un";
        }
        if(localPi != ""){
            ship += "L";
        }
        if(freeShi != ""){
            ship += "F";
        }
        urlCall += "/" + cond + "/" +ship + "/" + distance + "/" + zip;
        
        console.log(urlCall);
        $http.get(urlCall).then(function(response){
            $scope.progressBar = true;
			$scope.productSearchResults = response.data;
			
            //console.log("DE DAME: ");
            //console.log($scope.productSearchResults);
            $scope.fixedTitles = fixTitle(response.data);
            $scope.showResult = false;
			$scope.showPageNum = false;
            
		},function(err){
			return err;
		});

        
    };
    
    $scope.getDetail= function(itemsID){
		$scope.showResult= true; //en fainetai
		//$scope.showDetail = false; //fainetai
        var urlCall2 = "/Details/"+ itemsID;

		$http.get(urlCall2).then(function(response){
			$scope.productDetailsResults = response.data;
            console.log("Let's see what we pass inside the function");
            //console.log(itemsID);
			console.log($scope.productSearchResults[0]);
			console.log($scope.productDetailsResults[0]);
			console.log($scope.productSearchResults[0].viewitem);
            var titl = $scope.productDetailsResults[0].title;
			console.log($scope.productDetailsResults[0].seller);
			
			tabCalls(titl);
            tabCalls2(itemsID, $scope.productDetailsResults[0].returnPolicy);
			tabCalls3(itemsID);
			tabCalls4(itemsID);
			//items ID gia to tabcalls3
			//console.log("CHECK PRODUCT DETAILS RESULTS TO GET THE RETURN POLICY REQUIRED");
			//console.log($scope.productDetailsResults[0].returnPolicy);
			//console.log($scope.shippingInfo);
			
            //tabCall3
            //tabCall4
			//$scope.resultProgress = true; 
			if($scope.photosTab)
			$scope.showDetail= false; //show Detail
            //console.log($scope.productDetailsResults);
			$("#Detail").prop("disabled", false);
		},function(err){
			$scope.detailSearch_error=err;
			return err;
		})

	}
    $scope.highlightRow = function(index){
		$scope.highlightedRow  = index;
	}
    $scope.tooltip = function($scope){
        console.log("EEEEEE");
        $scope.dynamicTooltip = "ela";
    }
   
    //pAGE NUMBER
//    $scope.productSearchResults1 = [];
//    $scope.filteredTodos = []
//    $scope.currentPage = 1;
//    $scope.numPerPage = 10;
//    $scope.maxSize = 5;
//    $scope.makeTodos = function() {
//        $scope.todos = [];
//        for (i=1;i<=50;i++) {
//            $scope.todos.push({ text:'todo '+i, done:false});
//        }
//    };
//    $scope.makeTodos(); 
//    $scope.$watch('currentPage + numPerPage', function() {
//        console.log("O KOKOS SAS");
//    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
//    , end = begin + $scope.numPerPage;
//    
//    $scope.productSearchResults1 = $scope.todos.slice(begin, end);
//  });
    function tabCalls(title){
        var q = title;
        var urlCall4 = "/GoogleCustomSearch/" + q;
		var q2 = q.replace("/", " ");
		var urlCall5 = "/GoogleCustomSearch/" + q2;
		console.log("I am at tabCalls function");
        $http.get(urlCall5).then(function(response){
			//console.log("THIS is the response from the server!");
			$scope.photosTab = response;
			//console.log($scope.productSearchResults.length);
			//console.log($scope.photosTab.data[0].imgs.length);
			//console.log($scope.photosTab[0].imgs.length); 
		},function(err){
			//$scope.detailSearch_error=err;
			return err;
		})  
    }
	function tabCalls2(itemid, returnPo){
		var q = itemid;
		newJson = [];
		//console.log($scope.productSearchResults.length);
		//console.log($scope.productSearchResults[0].ID);
		//console.log($scope.productSearchResults[1].ID);
		for(var i = 0; i< $scope.productSearchResults.length; i++){
			if(itemid == $scope.productSearchResults[i].ID){
				newJson = $scope.productSearchResults[i];
			}
		}
		//console.log(newJson.shippingInfo.shippingServiceCost[0].__value__);
		//newJson.shippingInfo.shippingServiceCost[0].__value__ = "$" + newJson.shippingInfo.shippingServiceCost[0].__value__
		
		//console.log(newJson.shippingInfo.shippingServiceCost[0].__value__);
		//console.log($scope.shippingInfo.shippingInfo.shipToLocations[0]);
		//console.log($scope.shippingInfo.shippingInfo.handlingTime[0]);//ok arithmos
		//console.log("HERE SEE KOKO");
		//console.log(newJson.shippingInfo.expeditedShipping[0]);//ok true false
		//console.log(newJson);
		//to Handling time
		if(newJson.shippingInfo.handlingTime[0] <= 1){
			newJson.shippingInfo.handlingTime[0]  = newJson.shippingInfo.handlingTime[0] + " Day"
		}
		if(newJson.shippingInfo.handlingTime[0] > 1){
			newJson.shippingInfo.handlingTime[0]  = newJson.shippingInfo.handlingTime[0] + " Days"
		}
		//console.log(newJson.shippingInfo.handlingTime[0]);
		
		//TO TICK!
		if (newJson.shippingInfo.expeditedShipping[0] == "true"){
			newJson.shippingInfo.expeditedShipping[0] = "done";
			newJson.shippingInfo.color = "green";
			//newJson.shippingInfo.expeditedShipping[0].color = "green"
		}			
		if (newJson.shippingInfo.expeditedShipping[0] == "false"){
			newJson.shippingInfo.expeditedShipping[0] = "clear";
			newJson.shippingInfo.color = "red";
		}	
		//One day shipping
		if (newJson.shippingInfo.oneDayShippingAvailable[0] == "true"){
			newJson.shippingInfo.oneDayShippingAvailable[0] = "done";
			newJson.shippingInfo.color2 = "green";
		}			
		if (newJson.shippingInfo.oneDayShippingAvailable[0] == "false"){
			newJson.shippingInfo.oneDayShippingAvailable[0] = "clear";
			newJson.shippingInfo.color2 = "red";
		}
		console.log(returnPo);
		//Return Policy
		if(returnPo != null){
			if (returnPo == "ReturnsNotAccepted"){
				returnPo = "clear";
				newJson.shippingInfo.color3 = "red";
			}
			else{
				returnPo = "done";
				newJson.shippingInfo.color3 = "green";
			}	
		}
	
		//console.log("BLEPE");
		//console.log(returnPo);
		//console.log(newJson.shippingInfo.color2);
		$scope.shippingInfo = newJson;
		$scope.shippingInfo.returnPolicy = returnPo;
		//console.log($scope.shippingInfo.shippingInfo.oneDayShippingAvailable[0]); //ok true false
		//console.log($scope.shippingInfo.returnPolicy); //ok
		//console.log($scope.shippingInfo);
	}
	function tabCalls3(itemid){
		var idItem = itemid;
		var urlCall5 = "/SellerInformation/" + idItem;
		console.log(" we are at tab call 3, seller information");
		$http.get(urlCall5).then(function(response){
			$scope.sellerInfo = response;
			console.log("KOKOKO");
			console.log($scope.sellerInfo);
			console.log($scope.sellerInfo.data[0].FeedbackScore);
			console.log($scope.sellerInfo.data[0].FeedbackScore.length);
		},function(err){
			return err;
		})
	}
	function tabCalls4(itemid){
		console.log("WE ARE AT TAB CALLS 4");
		var idItem = itemid;
		var urlCall6 = "/SimilarItems/" + idItem;
		$http.get(urlCall6).then(function(response){
			$scope.similarItems = response;
			console.log($scope.similarItems);
			console.log($scope.similarItems.data[0]);
			//console.log($scope.sellerInfo.data[0].FeedbackScore.length);
		},function(err){
			return err;
		})
	
	}
    function isValidUSZip(sZip) {
        return /^\d{5}(-\d{4})?$/.test(sZip);
    } 
	function calculateTotal(wishListore){
		$scope.totalShippingWishListValue = 0.0;
		if(wishListore.length == 0){
			$scope.totalShippingWishListValue = 0.0;
		}
		for(var i = 0; i < wishListore.length; i++){
			var ret = wishListore[i].price.replace('$','');
			$scope.totalShippingWishListValue += parseFloat(ret);
		}
	}
    function fixTitle(data){
        var result = [];
        for(var i=0; i<data.length; i++){
            var title = data[i].title;
            //console.log(title);
            if(title.length < 35){
                result.push(title);
            }
            else{
                var last = title.lastIndexOf(' ', 35);
                var fixed = title.slice(0, last);
                var fixedTitle = fixed + "...";
                result.push(fixedTitle);
            }
        }
        return result;
	}
}]);

angular.module('view-more-less-demo',['view.moreless'])
  .controller('demoController',($scope,$timeout)=>{
     let sampleList = ['Item1','Item2','Item3','Item4','Item5','Item6','Item7','Item8'];
     //static list
     $scope.staticList = sampleList;
     //generate dynamic list
     $scope.isLoading = true;
     $timeout(function(){
       $scope.deferredList = sampleList;
       $scope.isLoading = false;
     },3000)
     
     
  })
;