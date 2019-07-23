//require node modules
const http = require('http');
var express = require('express');
const port = process.env.PORT || 3000;
const request = require ('request');
//const Promise= require('promise');
//const fetch= require('node-fetch');

const cors= require('cors');

//var path = require("path");

var app = express();
app.use(cors());
//app.set('view engine', 'pug')
//app.use(express.static(__dirname));
app.use("/lib", express.static('./lib/'));

//Home Page
app.get('/', function (req, res) {
    res.sendFile('first.html' , {root: __dirname});
});

app.get('/AutoComplete/:location', (req, response)=>{
    
    let x = req.params.location;
    console.log(x);
    
    var domain = 'http://api.geonames.org/postalCodeSearchJSON?postalcode_startsWith=' + x +'&username=yorkatsos&country=US&maxRows=5';
	request(domain, (err, res, body)=>{
		if(!err){
				let result= processAutoCompleteJSON(body);
				response.send(result);
                console.log("KOKOS2");
				// response.send(body);
			}else {
				return err;
			}
	})
})
 
//1st Table 
app.get('/ProductSearch/:keyword/:category/:condition/:shipOpt/:distance/:location', (req, response)=>{
    console.log("EMPIKAMEN EPITELOUS");
    let keyword = req.params.keyword;
    let category = req.params.category;
    let condition = req.params.condition;//New - N Used - Us Uspecisfied - Un , eshi m mprosta
    let shippingOpt = req.params.shipOpt;//LocalPickup - L FreeShipping - F
    let distance = req.params.distance;
    let location = req.params.location;
    console.log(keyword);
    console.log(category);
    console.log(condition);
    console.log(shippingOpt);
    console.log(distance);
    console.log(location);
    let myapi = 'Georgios-ProductS-PRD-416e2f149-be036b5e';
    let endpoint = 'http://svcs.ebay.com/services/search/FindingService/v1'; 
    let apicall = endpoint +"?OPERATION-NAME=findItemsAdvanced";
    apicall += "&SERVICE-VERSION=1.0.0"
         + "&SECURITY-APPNAME=" + myapi//replace with your app id
         + "&keywords=" + keyword
         + "&paginationInput.entriesPerPage=50"
         + "&RESPONSE-DATA-FORMAT=JSON"
         + "&REST-PAYLOAD=true"
         + "&buyerPostalCode=" + location
         + "&itemFilter(0).name=MaxDistance"
         + "&itemFilter(0).value=" +distance;
        
    //Category
    if(category == 'AllCategories'){}
    else if(category == 'Art'){
        apicall += "&categoryId=550"; 
    }
    else if($category == "Baby"){
        apicall += "&categoryId=2984";
    }
    else if($category == "Books"){
        apicall += "&categoryId=267"; 
    }
    else if($category == "Clothing, Shoes Accessories"){
        //echo "KOKOKOKO";
        apicall += "&categoryId=11450"; 
    }
    else if($category == "Computers/Tablets Networking"){
        apicall += "&categoryId=58058"; 
    }
    else if($category == "Health Beauty"){
        apicall += "&categoryId=26395"; 
    }
    else if($category == "Music"){
        apicall += "&categoryId=11233"; 
    }
    else if($category == "Video Games Consoles"){
        apicall += "&categoryId=1249"; 
    }
    
    //Condition
    var x = 1;
    var y = 0;
    if(condition != "m"){
        apicall += "&itemFilter(" + x + ").name=Condition";
        if(condition == "mN"){
            apicall += "&itemFilter(" + x + ").value(" + y + ")=New";
        }
        if(condition == "mUs"){
            apicall += "&itemFilter(" + x + ").value(" + y + ")=Used";
        }
        if(condition == "mUn"){
            apicall += "&itemFilter(" + x + ").value(" + y + ")=Unspecified";
        }
        if(condition == "mNUs"){
            apicall += "&itemFilter(" + x + ").value(" + y + ")=New";
            y = y + 1;
            apicall += "&itemFilter(" + x + ").value(" + y + ")=Used";
        }
        if(condition == "mNUn"){
            apicall += "&itemFilter(" + x + ").value(" + y + ")=New";
            y = y + 1;
            apicall += "&itemFilter(" + x + ").value(" + y + ")=Unspecified";
        }
        if(condition == "mUsUn"){
            apicall += "&itemFilter(" + x + ").value(" + y + ")=Used";
            y = y + 1;
            apicall += "&itemFilter(" + x + ").value(" + y + ")=Unspecified";
        }
        if(condition == "mNUsUn"){
            apicall += "&itemFilter(" + x + ").value(" +y+ ")=New";
            y = y + 1;
            apicall += "&itemFilter(" + x + ").value(" +y+ ")=Used";
            y = y + 1;
            apicall += "&itemFilter(" + x + ").value(" +y+ ")=Unspecified";
        }
        x = x + 1;
    }
    
    //Shipping Option 
    if(shippingOpt != "m"){
        if(shippingOpt == "mL"){
            apicall += "&itemFilter(" + x + ").name=LocalPickupOnly";
            apicall += "&itemFilter(" + x + ").value=true";
            x = x + 1;
        }
        if(shippingOpt == "mF"){
            apicall += "&itemFilter(" + x + ").name=FreeShippingOnly";
            apicall += "&itemFilter(" + x + ").value=true";
            x = x + 1;
        }
        if(shippingOpt == "mLF"){
            apicall += "&itemFilter(" + x + ").name=LocalPickupOnly";
            apicall += "&itemFilter(" + x + ").value=true";
            x = x + 1;
            apicall += "&itemFilter(" + x + ").name=FreeShippingOnly";
            apicall += "&itemFilter(" + x + ").value=true";
        }
        x = x + 1;
    }
    
    apicall += "&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo";
    console.log(apicall);
    //request.get(u)
    request.get(apicall, function(err,res, body){
		if(!err){
            let de = JSON.parse(body);
            //console.log(de);
            var result= processFirstJSON(body);
            //console.log(result);
            //console.log("EDWWW");
	        response.send(result);
        }
        else{return err;}
    });
    
}); 

//Products tab
app.get('/Details/:itemId' , (req,resp)=>{
    var toID = req.params.itemId;
    //console.log("TO ITEM ID:");
    //console.log(toID);
    let myapi2 = 'Georgios-ProductS-PRD-416e2f149-be036b5e';
    let endpoint2 = 'http://open.api.ebay.com/shopping'; 
    let apicall2 = endpoint2 +"?callname=GetSingleItem";
    // Construct the Get Single Item call   
    apicall2 += "&responseencoding=JSON"
                + "&appid=" + myapi2
                + "&siteid=0"
                + "&version=967"
                + "&ItemID=" + toID//EN DAME TO PROBLHMA!!!
                + "&IncludeSelector=Description,Details,ItemSpecifics";
    //console.log("TO LINK");
    //console.log(apicall2);
    request.get(apicall2, function(err,res, body){
        if(!err){
            let de = JSON.parse(body);
            var result= processDetailJSON(body);
            //console.log("Get Details second API CALL");
            //console.log(result);
	        resp.send(result);
        }
        else{return err;}
    });
    
});

//Photos tab
app.get('/GoogleCustomSearch/:q' , (req,resp)=>{
    //Custom Google Search
    console.log("WE are at the GoogleCustom Search Server");
    var toQ = req.params.q;
	console.log(toQ);
    var myapi= "AIzaSyDvnZdp6QoidzdxGF622d8FZceQze-DnrE";
    var cx = "013370669728762323794:qbftlriaqz4"; //013370669728762323794:linrfcnvx7q
    var apicall3 = "https://www.googleapis.com/customsearch/v1?q=" + toQ + "&cx=" + cx + "&imgSize=huge" + "&imgType=news" + "&num=8" + "&searchType=image" + "&key=" + myapi;
    console.log(apicall3);
    request.get(apicall3, function(err,res, body){
        if(!err){
            let de = JSON.parse(body);
            //console.log(de);
            //items.link
            var result= googleCustomeSearchJSON(body);
            //console.log("Google Custom Search Server Result");
            //console.log(result);
	        resp.send(result);
        }
        else{return err;}
    });
    
});

//Shipping Tab
app.get('/ShippingInformation/:username' , (req,resp)=> {
	console.log("WE ARE INSIDE THE SHIPPING INFO LAST API CALL");
	var myapi = "Georgios-ProductS-PRD-416e2f149-be036b5e&siteid=0";
	var userId = req.params.username;
	var apicall4 = "http://open.api.ebay.com/shopping?callname=GetUserProfile"
	+ "&responseencoding=JSON"+ "&appid=" + myapi +"&version=967" +"&UserID=" + userId;
	request.get(apicall4, function(err,res, body){
        if(!err){
            let de = JSON.parse(body);
            console.log(de);
            //var result= googleCustomeSearchJSON(body);
            //console.log("Google Custom Search Server Result");
            //console.log(result);
	        //resp.send(result);
        }
        else{return err;}
    });
	
});	

//Seller Information
app.get('/SellerInformation/:itemid' , (req,resp)=>{
	var toID = req.params.itemid;
	console.log("WE ARE ON THE SERVER, SELLERINFO FUNCTION ");
    console.log("TO ITEM ID:");
    console.log(toID);
    let myapi2 = 'Georgios-ProductS-PRD-416e2f149-be036b5e';
    let endpoint2 = 'http://open.api.ebay.com/shopping'; 
    let apicall2 = endpoint2 +"?callname=GetSingleItem";
    // Construct the Get Single Item call   
    apicall2 += "&responseencoding=JSON"+ "&appid=" + myapi2 + "&siteid=0"
                + "&version=967"+ "&ItemID=" + toID
                + "&IncludeSelector=Description,Details,ItemSpecifics";
    console.log("TO LINK");
    console.log(apicall2);
    request.get(apicall2, function(err,res, body){
        if(!err){
            let de = JSON.parse(body);
            var result = processShippingJSON(body);
            console.log("SELLER INFORMATION API CALL RESULT!!!");
            console.log(result);
	        resp.send(result);
        }
        else{return err;}
    });
});

//Similar Items
app.get('/SimilarItems/:itemid' , (req,resp) => {
	console.log("SERVER SIDE SIMILAR ITEMS HERE");
	var toID = req.params.itemid;
	var myapi= "Georgios-ProductS-PRD-416e2f149-be036b5e";
	var apicalll = "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems"
		+ "&SERVICE-NAME=MerchandisingService" + "&SERVICE-VERSION=1.1.0"
		+ "&CONSUMER-ID=" + myapi + "&RESPONSE-DATA-FORMAT=JSON"
		+ "&REST-PAYLOAD" + "&itemId=" + toID //292862774875
		+ "&maxResults=20";
	console.log(apicalll);
	request.get(apicalll, function(err,res, body){
        if(!err){
            let de = JSON.parse(body);
			console.log(de);
            var result = SimilarItemsJSON(body);
            //console.log("SIMILAR  INFORMATION API CALL RESULT!!!");
            //console.log(result);
	        resp.send(result);
        }
        else{return err;}
    });
	
});
//Other JS functions:
//FIE TO POU DAME KAME TO MES TO app.get/AUTOCOMPLETE/location
function processAutoCompleteJSON(body){
	console.log("Autocomplete Function");
	var reccomend = [];
	var auto = JSON.parse(body);
    console.log(auto);
    console.log(auto.postalCodes);
    
		
    if (auto.postalCodes === undefined || auto.postalCodes.length == 0){
        console.log("undefined");
        reccomend = [];
    }                                                                     
    else{
        for(i = 0;i < auto.postalCodes.length; i++){      
            if(auto.postalCodes === undefined || auto.postalCodes.length == 0 || auto.length == 0){
                reccomend = [];        
            }
            else{
                var yo = auto.postalCodes[i].postalCode;                                            
                reccomend.push(yo);                                       
            }
        }
    }

    console.log("KOKOS 2 :");
    console.log(reccomend);
    return reccomend;
}
function processDetailJSON(body){
    let jsonfile2 = JSON.parse(body);	
	console.log("evre viewItemURLForNaturalSearch");
	console.log(jsonfile2);
	var fruits2 = [];
    var newJson2 = {};
    if(jsonfile2 != null){
        var item = jsonfile2.Item;
		if(item.hasOwnProperty('Seller')){
			newJson2.seller = item.Seller.UserID;
		}
        if(item.hasOwnProperty('PictureURL')){
            newJson2.photo = item.PictureURL;
        }
        if(item.hasOwnProperty('Subtitle')){
            newJson2.subtitle = item.Subtitle;
        }
        if(item.hasOwnProperty('CurrentPrice')){
            newJson2.price = item.CurrentPrice.Value;
            newJson2.currency = item.CurrentPrice.CurrencyID;
        }
        if(item.hasOwnProperty('Location')){
            newJson2.location = item.Location;
        }
        if(item.hasOwnProperty('ReturnPolicy')){
            var x  = item.ReturnPolicy.ReturnsAccepted;
            var y = item.ReturnPolicy.ReturnsWithin;
            if(y == null){
                newJson2.returnPolicy = x;
            }
            else{
                newJson2.returnPolicy = x + " Within " + y;
            }     
            newJson2.ela = y;
        }
        var ela = item.ItemSpecifics.NameValueList;
        var key;
        newJson2.title = item.Title;
        for (key=0; key<ela.length; key++){
            if (ela[key].Name=="Brand"){
                newJson2.brand = ela[key].Value[0];
            }
            if(ela[key].Name=="Model"){
                newJson2.model = ela[key].Value[0];
            }
            if(ela[key].Name=="MPN"){
                newJson2.mpn = ela[key].Value[0];
            }
            if(ela[key].Name=="Storage Capacity"){
                newJson2.strge = ela[key].Value[0];
            }
            if(ela[key].Name=="Network"){
                newJson2.network = ela[key].Value[0];
            }
            if(ela[key].Name=="Manufacturer Color"){
                newJson2.manufacturerCol = ela[key].Value[0];
            }
            if(ela[key].Name=="Style"){
                newJson2.style = ela[key].Value[0];
            }
            if(ela[key].Name=="Contract"){
                newJson2.contract = ela[key].Value[0];
            }
            if(ela[key].Name=="Features"){
                var y = "";
                for(var i = 0; i<ela[key].Value.length-1; i++){
                    y += ela[key].Value[i] + ",";
                }
                y += ela[key].Value[ela[key].Value.length-1];
                newJson2.features = y;
            }
            if(ela[key].Name=="Camera Resolution"){
                newJson2.camera = ela[key].Value[0];
            }
            if(ela[key].Name=="Lock Status"){
                newJson2.lstatus = ela[key].Value[0];
            }
            if(ela[key].Name=="Cellular Band"){
                newJson2.celluralBand = ela[key].Value[0];
            }
            if(ela[key].Name=="Operating System"){
                newJson2.os = ela[key].Value[0];
            }
            if(ela[key].Name=="Screen Size"){
                newJson2.screenSize = ela[key].Value[0];
            }
            if(ela[key].Name=="Processor"){
                newJson2.processor = ela[key].Value[0];
            }
            if(ela[key].Name=="RAM"){
                newJson2.ram = ela[key].Value[0];
            }
            if(ela[key].Name=="Model Number"){
                newJson2.modelnum = ela[key].Value[0];
            }
            if(ela[key].Name=="Network Technology"){
                newJson2.networkTech = ela[key].Value[0];
            }
        }
        fruits2.push(newJson2);
    }
    else{
		newJson = {};
	}		
	return fruits2;
}
function processFirstJSON(body){

	let jsonfile = JSON.parse(body);	
    console.log("First JSON Proccessing:");
    console.log(jsonfile);
	
	var fruits = [];

	if(jsonfile != null){
		var items = jsonfile.findItemsAdvancedResponse[0].searchResult[0].item;
        //console.log(items.length);
        for (var i = 0; i < items.length; i++) {
            var newJson = {};
            var item  = items[i];
			var pic   = item.galleryURL[0];
            var title = item.title[0];
			var price = item.sellingStatus[0].currentPrice[0].__value__;
			var shippingOption = item.shippingInfo[0].shippingServiceCost;
            if(shippingOption == undefined){
                shippingOption = "N/A"
            }
            else{
                shippingOption = item.shippingInfo[0].shippingServiceCost[0].__value__;
                if(shippingOption == 0.0){
                    shippingOption = "Free Shipping";
                }
                else if(shippingOption != 0.0){
                    shippingOption = "$" + shippingOption;
                }
            }
            var zip = item.postalCode[0];
			var seller = item.sellerInfo[0].sellerUserName[0];
			var wishlist = ""
            var viewitem = item.viewItemURL[0];
            
			//Title
			if(title != ""){
                newJson.title = title;
			}
			else{
                newJson.title = "N/A";
            }
			//Picture
			if(pic != ""){
                newJson.pic = pic;
			}
			else{
                newJson.pic = "N/A";
            }
			//Price
			if(price != ""){
				newJson.price = "$" + price;
			}
			else{
                newJson.price = "N/A";
            }
			//Shipping Option
            if(shippingOption !=""){
                newJson.shippingOption = shippingOption;
            }
            else{
                newJson.shippingOption = "N/A";
            }

			//Zip code
			if(zip != ""){
				newJson.zip = zip;
			}
			else{
                newJson.zip = "N/A";
            }
            //Seller info
			if(seller != ""){
				newJson.seller=seller.toUpperCase();;
			}
			else{
                newJson.seller = "N/A";
            }
            //View Item 
            if(viewitem != ""){
				newJson.viewitem = viewitem;
			}
			else{
                newJson.viewitem = "N/A";
            }
            
			if(item.shippingInfo[0] == null){
				newJson.shippingInfo = "NoShipInfo";
			}
			else{
				newJson.shippingInfo= item.shippingInfo[0];
			}
			newJson.ID = item.itemId[0];
            fruits.push(newJson);
		}
	}
	else{
		newJson = {};
	}		
	return fruits;
}
function googleCustomeSearchJSON(body){
    let jsonfile = JSON.parse(body);
    newJson2 = {};
    var fruits = [];
    newJson2.imgs = [];

    if(jsonfile != null){
        for (var i = 0; i < jsonfile.items.length; i++) {
            newJson2.imgs[i] = jsonfile.items[i].link;
        }
        fruits.push(newJson2);
    }
    else{
        newJson2 = {};
    }
    return fruits;
}
function processShippingJSON(body){
	var jsonfile = JSON.parse(body);
	//console.log("SEEEEEELLLLLLLLLLLLLLLLLLLLLLLLLLLLlLEEEEEEEEEEEEEEEEEEEEERRRRRRRRRR");
	//console.log(jsonfile);
	newJson3 = {};
	var fruits = [];
	if(jsonfile != null){
        var item = jsonfile.Item;
		if(item.hasOwnProperty('Seller')){
			var x = item.Seller;
			if(x.hasOwnProperty('UserID')){
				newJson3.UserID = item.Seller.UserID;
			}
			if(x.hasOwnProperty('FeedbackScore')){
				newJson3.FeedbackScore1 = item.Seller.FeedbackScore;
				if(item.Seller.FeedbackScore > 10000){
					newJson3.FeedbackScore = "stars";
				}
				else{
					newJson3.FeedbackScore = "star_border";
				}	
			}	
			if(x.hasOwnProperty('PositiveFeedbackPercent')){
				newJson3.Popularity = item.Seller.PositiveFeedbackPercent;
			}
			if(x.hasOwnProperty('FeedbackRatingStar')){
				newJson3.FeedbackRatingStar = item.Seller.FeedbackRatingStar;
			}
			if(x.hasOwnProperty('TopRatedSeller')){
				if (item.Seller.TopRatedSeller == "true"){
					newJson3.TopRated = "done";
					newJson3.TopRated.color = "green";
				}			
				else if (item.Seller.TopRatedSeller == "false"){
					newJson3.TopRated = "clear";
					newJson3.TopRated.color = "red";
				}
				//newJson3.TopRated = item.Seller.TopRatedSeller;
			}			
		}
		if(item.hasOwnProperty('Storefront')){
			var y = item.Storefront;
			if(y.hasOwnProperty('StoreName')){
				newJson3.StoreName = item.Storefront.StoreName;
			}
			if(y.hasOwnProperty('StoreURL')){
				newJson3.BuyProductAt = item.Storefront.StoreURL;
			}
		}
	}
	else{
		newJson3 = {};
	}
	fruits.push(newJson3);
	return fruits;
		
}

function SimilarItemsJSON(body){
	var jsonfile = JSON.parse(body);
	
	var fruits = [];
	if(jsonfile != null){
		var items = jsonfile.getSimilarItemsResponse.itemRecommendations.item;
		for(var i = 0; i< items.length; i++){
			var newJson3 = {};
			var item = items[i];
			if(item.hasOwnProperty('title')){
				newJson3.prodName = item.title;
			}
			if(item.hasOwnProperty('imageURL')){
				newJson3.img = item.imageURL;
			}
			if(item.hasOwnProperty('viewItemURL')){
				newJson3.URL = item.viewItemURL;
			}
			if(item.hasOwnProperty('buyItNowPrice')){
				newJson3.price = item.buyItNowPrice.__value__;
			}
			if(item.hasOwnProperty('shippingCost')){
				newJson3.shippingCost = item.shippingCost.__value__;
			}
			if(item.hasOwnProperty('timeLeft')){
				var str  = item.timeLeft;
				var n = str.search("P");
				var x = str.search("D");
				var res = str.substring(n+1, x);
				newJson3.timeLeft = res;
			}
			fruits.push(newJson3);
		}
	}
	else{
		newJson3 = {};
	}
	//fruits.push(newJson3);
	return fruits;
}
		
//const server = http.createServer(respond);
//listen to client requests on the specific port, the port should be available
/*app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});*/
//require('angular-utils-pagination');
//module.exports=angular.module('common',['angularUtils.directives.dirPagination']);
app.listen(port, function () {
    console.log(`CORS- enabled web server listening on port ${port}`)
});