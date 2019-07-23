<!DOCTYPE html>
<html>
    <head>
        <meta charse = "utf -8">
        <title>Product Search </title> 
    </head>
    <style>
        body{
            width: 100%;
            height: 100%;
            overflow-x: hidden;
        }
        
        #searchBox{
            border:2px #E6E6E6 solid;
            height: 250px;
            width: 550px;
            margin:0 auto; /*rwta responsive*/
            background-color:#FAFAFA;
          
        }
        #searchBox h2{
            font-style: italic;
            font-size: 30px;
            margin-top: 0px;
            margin-bottom: 5px;
            text-align: center;
        }
        #category{
            width:190px;
        }
        #locationList{
            list-style-type: none;
            padding:0px;
            margin:0px;
            position: absolute;
            display: inline;
        }
        #buttons{
            text-align:center;
        }
        #firstTable, tr, td,th{
            border:1px solid #EBEBEB;
            
        }
        #SearchResults{
           padding-top:20px;
           /*margin-top:10px;*/
        }
        a {
          color: black;
          text-decoration: none;
        }
        a:hover{
            color:grey;
         }
        input[type=number]:disabled {
            background: white;
        }
        #arrow, #arrow2 {
          /*padding: 5px;*/
          text-align: center;
          border: solid 1px #BFBFBF;
          margin: auto;
          height: 2vw;
          width: 2vw;
          border-style: solid;
          border-color: #BFBFBF;
          border-width: 0px 4px 4px 0px;
          transform: rotate(45deg);
        }

        #but, #but2{
             text-align: center;
             height: 70px;
/*             margin: 0 auto;*/
             background-color: Transparent;
             border: none;
             cursor:pointer;
             outline:none;
             color: #BFBFBF;
             padding-bottom:10px;
         }
        #SimilarItems{
            overflow-y: hidden;
/*            overflow: auto;*/
            margin: 0 auto;
            padding-top:10px;
/*            height:300px;*/
            width: 820px;
            border: 1px solid #DBDBDB;
            display: none;
        }
       
        #TEST{
            padding-top:10px;
        }
        #sellerMsg{
            padding-top:10px;
/*
            //overflow-y: hidden;
            //overflow-x:hidden;
*/
/*            //height:100%;*/
        }

    </style>
    
<script>

function myFunction() {
    document.getElementById("zip_code").disabled = false;
}
    
function myF4(){
    if(document.getElementById("nearbySearch").checked == true){
        var checkBox = document.getElementById("location");
        //console.log(checkBox);
        //console.log(checkBox.checked);
        if(checkBox.checked == true){
            document.getElementById("zip_code").disabled = false;
        }
    }
    
}
function myF3(){
    var checkBox = document.getElementById("nearbySearch");
    //if it's selected
    if(checkBox.checked == true){
        document.getElementById("keyword").disabled = false; 
        document.getElementById("miles").style.color = 'black';
        document.getElementById("here").disabled = false; 
        document.getElementById("heretxt").style.color = 'black';
        document.getElementById("location").disabled = false;
    }
    else{
        document.getElementById("keyword").disabled = true; 
        document.getElementById("keyword").value = "";
        document.getElementById("miles").style.color = '#C0C0C0';
        document.getElementById("here").disabled = true; 
        document.getElementById("heretxt").style.color = '#C0C0C0';
        document.getElementById("location").disabled = true;
    }
    //if it's unselected to antitheto
    
}
    
    
    
    
function myF2(){
    document.getElementById("zip_code").disabled = true;
}
        
function myF(){
    var checkBox = document.getElementById("nearbySearch");
    //if it's selected
    if(checkBox.checked == true){
        document.getElementById("keyword").disabled = false; 
        document.getElementById("keyword").value = "10";
        document.getElementById("miles").style.color = 'black';
        document.getElementById("here").disabled = false; 
        document.getElementById("heretxt").style.color = 'black';
        document.getElementById("location").disabled = false;
    }
    else{
        document.getElementById("keyword").disabled = true; 
        document.getElementById("keyword").value = "";
        document.getElementById("miles").style.color = '#C0C0C0';
        document.getElementById("here").disabled = true; 
        document.getElementById("heretxt").style.color = '#C0C0C0';
        document.getElementById("location").disabled = true;
    }
    //if it's unselected to antitheto
    
}
    
function clearButton(){
    document.getElementById("form").reset();
    document.getElementById("address").value = ""; 
    document.getElementById("miles").value = " ";
    document.getElementById("here").disvalueabled = ""; 
    document.getElementById("heretxt").value = "";
    document.getElementById("location").value = "";
    
    document.getElementById("condUsed").checked =false;
    document.getElementById("condNew").checked=false;
    document.getElementById("condUnspecified").checked = false;
    
    document.getElementById("localPickup").checked = false;
    document.getElementById("freeShipping").checked = false;
    
    document.getElementById("nearbySearch").checked = false;
    document.getElementById("zip_code").value = "";
    document.getElementById("zip_code").disabled = true;
    document.getElementById("miles").style.color =  '#C0C0C0';
    document.getElementById("keyword").value =  "";
    document.getElementById("here").disabled = true; 
    document.getElementById("here").checked = true; 
    document.getElementById("heretxt").style.color = '#C0C0C0';
    document.getElementById("location").disabled = true;
    
    document.getElementById("SearchResults").innerHTML = "";
    document.getElementById("TEST").innerHTML = "";
    document.getElementById("SimilarItems").innerHTML = "";
    document.getElementById("sellerMsg").innerHTML = "";
    document.getElementById("SimilarItems").style.display = "none";
    document.getElementById("sellerMsg").style.display = "none";  
}
        
function getCoordinates(){
    let url = "http://ip-api.com/json";
    var xmlhttp= new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
    hereLoc="";
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
        geoloc = JSON.parse(xmlhttp.responseText);
        document.getElementById("search").disabled = false;
        hereLoc = {
            "lat" : geoloc["lat"],
            "lon" : geoloc["lon"],
            "hereZip": geoloc["zip"]
        }
        //console.log(hereLoc.hereZip);
        document.getElementById("geoloc").value = hereLoc.hereZip;
    }
}
    
function sellMSG(){
  var x = document.getElementById("myIframe");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("but").innerHTML = '<p><b>click to hide seller message<b></p><div id = "arrow"></div>';
    document.getElementById("arrow").style.transform = 'rotate(-135deg)';
  } else {
    x.style.display = "none";
    document.getElementById("but").innerHTML = '<p><b>click to show seller message<b></p><div id = "arrow"></div>';
    document.getElementById("arrow").style.transform = 'rotate(45deg)';
  }
}
    
function similar(){
        var x = document.getElementById("SimilarItems");
        if (x.style.display == "none") {
            x.style.display = "block";
            document.getElementById("but2").innerHTML = '<p><b>click to hide similar items<b></p><div id = "arrow2"></div>';
            document.getElementById("arrow2").style.transform = 'rotate(-135deg)';
        } 
        else {
            x.style.display = "none";
            document.getElementById("but2").innerHTML = '<p><b>click to show similar items<b></p><div id = "arrow2"></div>';
            document.getElementById("arrow2").style.transform = 'rotate(45deg)';
        }
}

</script>
    
    <body onload="getCoordinates()">
        <div id="container">
        <div id="searchBox">
            <h2>Product Search</h2>
            <hr style='margin-left:5px; margin-right:5px;'>
            <form id="form" method= "GET" style='margin-left:15px; margin-right:15px;'> 
                
            <p style='float:left; margin-right: 5px; margin-top:0px; height:0px;'><b>Keyword</b></p>
            <input type="text" name="keyword" id="address" size="15px" maxlength="100" style='height:12px; display: inline;' value="<?php echo htmlspecialchars($_GET['keyword']); ?>" required>
                
            
            <br />
                
            <div style='float:left; margin-right: 6px; margin-top:7px;'><b>Category</b></div>
<!--            <br />-->
            <select style='margin-top:7px;' name="Category" id="category">
            <option value="AllCategories" selected>All Categories</option>
            <option value ="Art">Art</option>
            <option value ="Baby">Baby</option>
            <option value ="Books">Books</option>
            <option value ="Clothing, Shoes Accessories">Clothing, Shoes & Accessories</option>
            <option value ="Computers/Tablets Networking">Computers/Tablets & Networking</option>
            <option value ="Health Beauty">Health & Beauty</option>
            <option value ="Music">Music</option>
            <option value ="Video Games Consoles">Video Games & Consoles</option>    
            </select>  
            <script type="text/javascript">
                //console.log(document.getElementById('category').value);
                document.getElementById('category').value = "<?php if(isset($_GET['Category'])) echo $_GET['Category']; else echo "AllCategories"?>";
                //console.log(document.getElementById('category').value);
            </script>
                
            <br />
                
            <div style='float:left; margin-right: 15.5px; margin-top:7px;'><b>Condition</b></div>
            <div style='margin-top:7px;'>
                <label style='margin-right: 15px;'><input type="checkbox" id="condNew" name="condNew" value="new" <?php if(isset($_GET['condNew'])) echo "checked='checked'"; ?>/>New</label>
                <label style='margin-right: 15px;'><input type="checkbox" id="condUsed" name="condUsed" value="used" <?php if(isset($_GET['condUsed'])) echo "checked='checked'"; ?>/>Used</label>
                <label><input type="checkbox" id = "condUnspecified" name="condUnspecified" value="unspecified" <?php if(isset($_GET['condUnspecified'])) echo "checked='checked'"; ?>/>Unspecified</label>
                
            
<!--
            <script type="text/javascript">
                document.getElementById('condNew').value = "<//?php echo $_GET['condNew'];?>";
                document.getElementById('condUsed').value = "<//?php echo $_GET['condUnspecified'];?>";
                document.getElementById('condUnspecified').value = "<//?php echo $_GET['condUnspecified'];?>";
            </script>
-->
                
            
            </div>

            
            <div style='float:left; margin-right: 35px; margin-top:7px; '><b>Shipping Options</b></div>
            <div style='margin-top:7px;'>
                <label style='margin-right: 25px;'><input type="checkbox" name="localPickup" id="localPickup" <?php if(isset($_GET['localPickup'])) echo "checked='checked'"; ?>/>Local Pickup</label>
                <label><input type="checkbox" name="freeShipping" id="freeShipping"<?php if(isset($_GET['freeShipping'])) echo "checked='checked'"; ?>/>Free Shipping</label>
            </div>
                

                
            <div style='margin-top:7px;'>
                <label style='margin-right: 25px;'><input type="checkbox" id="nearbySearch" name="nearbySearch" value="new" onclick="myF()" <?php if(isset($_GET['nearbySearch'])) echo "checked='checked'"; ?>/>Enable Nearby Search</label>
                
                <input type="number" name="miles" id="keyword" size="1px" maxlength="10" placeholder="10" disabled="true" style='height:12px; display: inline; width:50px;' value="<?php echo htmlspecialchars($_GET['miles']); ?>">
                <p id="miles" style='margin-right: 0px; margin-top:0px; height:0px; display: inline; color: #C0C0C0;' ><b>miles from</b></p>
                
                <ul id="locationList">
				<li>
					<input type="radio" id="here" name="location" value="here" checked="true" disabled="true" onclick="myF2();" <?php if(isset($_GET['location']) && $_GET['location'] =='here' ){echo "checked" ;}?>>
					<label id="heretxt" for="here" style="color: #C0C0C0;">Here</label>
				</li>
				<li>
					<input type="radio" id="location" name="location" onclick="myFunction()"
                    disabled="true" <?php if(isset($_GET['location']) && $_GET['location'] =='on' ){echo "checked";}?>>
					<input type="text" id="zip_code" name="zip_code" disabled="true" placeholder="zip code" maxlength="5" size="12px" style="width:110px;" required value ="<?php echo htmlspecialchars($_GET['zip_code']); ?>">
				</li>
			</ul>
            </div>
                
            <br>
            <br>
            <div id="buttons">
				<input type="submit" id="search" name="submit" value="Search" disabled="true">
<!--                //htan type reset-->
				<input id="clear" name="clear" type="button" value="Clear" onclick="clearButton();">
                
                <input id="geoloc" name="geoloc" type="hidden" value="" >
                

			</div>
            </form>    
        </div>
            
<div id="SearchResults"></div>
<div id="sellerMsg"></div>
<div id="TEST"> </div>  
<div id="SimilarItems"> </div> 
<div id="php">
<?php

error_reporting(E_ALL);  // turn on all errors, warnings and notices for easier debugging

$results = '';
$myapi = 'Georgios-ProductS-PRD-416e2f149-be036b5e';
$endpoint = 'http://svcs.ebay.com/services/search/FindingService/v1'; 
$apicall = "";
        
//AN PATISEIS TO SEARCH BUTTON FKAINEI TO PRWTO TABLE!
if(isset($_GET['submit'])){ 
  $apicall = "";
  $word = $_GET['keyword'];
  $category  = $_GET['Category'];

    // Construct the FindItems call
    $apicall = "$endpoint?OPERATION-NAME=findItemsAdvanced";
    $apicall .= "&SERVICE-VERSION=1.0.0"
         . "&SECURITY-APPNAME=$myapi" //replace with your app id
         . "&keywords=$word"
         . "&paginationInput.entriesPerPage=20"
         . "&RESPONSE-DATA-FORMAT=JSON"
         . "&REST-PAYLOAD=true";
      
    //CATEGORY
    if($category == 'AllCategories'){
    }
    else if($category == 'Art'){
        $apicall .= "&categoryId=550"; //art
    }
    else if($category == "Baby"){
        $apicall .= "&categoryId=2984"; //art
    }
    else if($category == "Books"){
        $apicall .= "&categoryId=267"; //art
    }
    else if($category == "Clothing, Shoes Accessories"){
        //echo "KOKOKOKO";
        $apicall .= "&categoryId=11450"; //art
    }
    else if($category == "Computers/Tablets Networking"){
        $apicall .= "&categoryId=58058"; //art
    }
    else if($category == "Health Beauty"){
        $apicall .= "&categoryId=26395"; //art
    }
    else if($category == "Music"){
        $apicall .= "&categoryId=11233"; //art
    }
    else if($category == "Video Games Consoles"){
        $apicall .= "&categoryId=1249"; //art
    }
    
   
    $filter = 0;   
    $val = 0;
    //ENBALE NEARBY SEARCH: BALE PRWTA Buyerpostalcode
    if(isset($_GET['nearbySearch'])){
        if(isset($_GET['zip_code'])){
            $postcode = $_GET['zip_code'];
            $apicall .= "&buyerPostalCode=$postcode";
        }
        else if(isset($_GET['location'])){
            //$postcode =  "<script> getCoordinates();</script>";
            $postcode = $_GET['geoloc'];
            $apicall .= "&buyerPostalCode=$postcode";
        }
        $apicall .= "&itemFilter($filter).name=MaxDistance";
        $distance = $_GET['miles'];
        $apicall .= "&itemFilter($filter).value=$distance";
        $filter = $filter + 1;
    }
    
    $apicall .= "&itemFilter($filter).name=HideDuplicateItems";
    $apicall .= "&itemFilter($filter).value=true";
    $filter = $filter + 1;
    
    
    //SHIPPING OPTIONS
    if(isset($_GET['localPickup'])){
        $apicall .= "&itemFilter($filter).name=LocalPickupOnly";
        $apicall .= "&itemFilter($filter).value=true";
        $filter = $filter +1;
    }
    if(isset($_GET['freeShipping'])){
        $apicall .= "&itemFilter($filter).name=FreeShippingOnly";
        $apicall .= "&itemFilter($filter).value=true";
        $filter = $filter + 1;
    }
    
    $go = 0;
    //CONDITION
    if(isset($_GET['condUnspecified'])){
        $apicall .= "&itemFilter($filter).name=Condition";
        $apicall .= "&itemFilter($filter).value($val)=Unspecified";
        $val = $val +1;
        if(isset($_GET['condUsed'])){
            $go = 1;
            $apicall .= "&itemFilter($filter).value($val)=Used";
            $val = $val +1;
        }
        if(isset($_GET['condNew'])){
            $go = 1;
            $apicall .= "&itemFilter($filter).value($val)=New";
            $val = $val +1;
        }
        $filter = $filter + 1;
    }
    else if(isset($_GET['condUsed'])){
        $go = 1;
        $apicall .= "&itemFilter($filter).name=Condition";
        $apicall .= "&itemFilter($filter).value($val)=Used";
        $val = $val +1;
        if(isset($_GET['condUnspecified'])){
            $go = 0;
            $apicall .= "&itemFilter($filter).value($val)=Unspecified";
            $val = $val +1;
        }
        if(isset($_GET['condNew'])){
            $apicall .= "&itemFilter($filter).value($val)=New";
            $val = $val +1;
        }
        $filter = $filter + 1;
    }
    else if(isset($_GET['condNew'])){
        $go = 1;
        $apicall .= "&itemFilter($filter).name=Condition";
        $apicall .= "&itemFilter($filter).value($val)=New";
        $val = $val +1;
        if(isset($_GET['condUnspecified'])){
            $apicall .= "&itemFilter($filter).value($val)=Unspecified";
            $val = $val +1;
        }
        if(isset($_GET['condUsed'])){
            $apicall .= "&itemFilter($filter).value($val)=Used";
            $val = $val +1;
        }
        $filter = $filter + 1;
    }
  }
//}
       
                
//---------------CREATE 1o JSON------------
  
    //echo "GET " . $apicall . "<br>";
    $json = "";
    $json_a ="";
    if($apicall != ""){      
        $json = file_get_contents($apicall);
        $json = utf8_encode($json);             
        $json_a = json_decode($json, true);
    }
                    

//-----------------Create 2o JSON---------------------------------- 
    $gotit = "";  
    $json2 ="";
    $json_a2 ="";
    $apicall2 = "";
    $json3 ="";
    $json_a3 ="";
    $apicall3 = "";
    //273521207234
    if(isset($_GET["getThis"])){
        $gotit= $_GET["getThis"];
        
        $myapi = 'Georgios-ProductS-PRD-416e2f149-be036b5e';
        $endpoint = 'http://open.api.ebay.com/shopping'; 
        
        // Construct the Get Single Item call
        $apicall2 = "$endpoint?callname=GetSingleItem";
        $apicall2 .= "&responseencoding=JSON"
                . "&appid=$myapi"
                . "&siteid=0"
                . "&version=967"
                . "&ItemID=$gotit"//EN DAME TO PROBLHMA!!!
                . "&IncludeSelector=Description,Details,ItemSpecifics";

        $endpoint3 = 'http://svcs.ebay.com/MerchandisingService'; 
        
        // Construct the Get Similar Items call
        $apicall3 = "$endpoint3?OPERATION-NAME=getSimilarItems";
        $apicall3 .= "&SERVICE-NAME=MerchandisingService"
                . "&SERVICE-VERSION=1.1.0"
                . "&CONSUMER-ID=$myapi"
                . "&RESPONSE-DATA-FORMAT=JSON"
                . "&REST-PAYLOAD"
                . "&itemId=$gotit"//EN DAME TO PROBLHMA!!!
                . "&maxResults=8";
        

        //echo "ApiCall 2nd: " . $apicall2 . "<br>";
        $json2 = file_get_contents($apicall2);
        $json2 = utf8_encode($json2);             
        $json_a2 = json_decode($json2, true);   
        
        //echo "ApiCall 3rd: " . $apicall3 . "<br>";
        $json3 = file_get_contents($apicall3);
        $json3 = utf8_encode($json3);             
        $json_a3 = json_decode($json3, true);  
    }
    
    //-------3rd API call ------------------------------------------------

    ?>
</div>
            
<script type="text/javascript">
    function callNow2(){
        myF3();
        myF4();
        var jsonfile3 = <?php echo json_encode($json_a3); ?>;
        
        var html = [];
        html.push('<table align="center" border="0" style="border-spacing: 55px 0px; width: 1900px; height: 200px; table-layout:fixed;">');
         
        var keyw2 = document.getElementById("address").value;
        var cate2 = document.getElementById("category").value;
        var near_search2 = "";
        var milia2 ="";
        var geol2= "";
        var z_code2 ="";
        //Condition
        var c_new2 ="";
        var c_used2 = "";
        var c_unspe2 ="";      
        //Shipping Options
        var s_local2 ="";
        var s_free2 = "";

        if(document.getElementById("nearbySearch").checked == true){
            near_search2 ="new";
            milia2 = document.getElementById("keyword").value;
            //if(document.getElementById("here").value=="here"){
            getCoordinates();
            geol2 = document.getElementById("geoloc").value;
            //}
            if(document.getElementById("zip_code").value != ""){ 
                z_code2 = document.getElementById("zip_code").value;
            }
        }
        //Condition
        if(document.getElementById("condNew").checked==true){
            c_new2 = document.getElementById("condNew").value;
        }
        if(document.getElementById("condUsed").checked==true){
            c_used2 = document.getElementById("condUsed").value;
        }
        if(document.getElementById("condUnspecified").checked==true){
            c_unspe2 = document.getElementById("condUnspecified").value;
        }

        //Shipping Options
        if(document.getElementById("localPickup").checked==true){
            s_local2 = document.getElementById("localPickup").value;
        }
        if(document.getElementById("freeShipping").checked==true){
            s_free2 = document.getElementById("freeShipping").value;
        }
    
        var ela =jsonfile3.getSimilarItemsResponse.itemRecommendations.item;
        //var ela = "";
        if(ela.length > 0){
        for(j=0; j < 3; j++){
            html.push('<tr>');
            for(i=0; i<ela.length; i++){    
                if(j==0){
                    var pic = ela[i].imageURL;
                    html.push('<th style="padding-top:10px; border:0px;">' +'<img src="' + pic + '">'+ '</th>');
                }
                else if(j==1){
                    var title = ela[i].title;
                    //html.push('<td style="text-align:center; width:300px;"><a href="first.php?getThis=' + ela[i].itemId +'">' + title +'</td>');
                    html.push('<td style="text-align:center; width:300px; border:0px;"><a href="index.php?keyword='+keyw2+'&Category='+cate2+  '&getThis=' + ela[i].itemId);
                    
                   ///DAME PAIZEI POLLIN IF.
                    //Meta pou to basikon, gia na pintonounte.
                    if(c_new2 != ""){
                        html.push('&condNew=new'); //or + c_new
                    }
                    if(c_used2 != ""){
                    html.push('&condUsed=used');
                    }
                    if(c_unspe2 != ""){
                    html.push('&condUunspecified=unspecified');
                    }
                    if(s_local2 != ""){
                    html.push('&localPickup=on');
                    }
                    if(s_free2 != ""){
                        html.push('&freeShipping=on');
                    }
                    if(near_search2 =="new"){
                        //myF3();
                        html.push('&nearbySearch=new');
                        html.push('&miles=' + milia2);
                        if(z_code2 != ""){
                            html.push("&location=on");
                            html.push('&zip_code=' + z_code2);
                            //myF4();
                        }
                        else{
                            html.push("&location=here");
                            html.push("&geoloc=" + geol2);
                        }
                    }
                    html.push('">'  +title + '</a></td>');
                }
                else{
                    var price = ela[i].buyItNowPrice.__value__;
                    html.push('<th style="border:0px">' + "$"+ price +'</th>');
                }
            }
            html.push('</tr>');
        }
        html.push('</table>');
        document.getElementById("SimilarItems").innerHTML = html.join("");
        document.getElementById("SimilarItems").style.height = "300px";
        document.getElementById("SimilarItems").style.display = "none";
        }
        else{
            html= [];
            html.push('<table bgcolor="#F0F0F0" width="800px" border="0" style="margin-left:auto; margin-right:auto;"><tr><th> No similar items have been found. </th></tr></table>');
            html.push('</table>');
            document.getElementById("SimilarItems").innerHTML = html.join("");
            document.getElementById("SimilarItems").style.height = "60px";
            document.getElementById("SimilarItems").style.display = "none";
        }
    }   

function callNow(){
    myF3();
    myF4();
    var jsonfile2 = <?php echo json_encode($json_a2); ?>; 
    //document.write(jsonfile2);
    
    var html = [];
    if(jsonfile2.hasOwnProperty("Errors")){    
        if(jsonfile2.Errors[0].ErrorCode == "10.12"){
            //var html=[];
            html.push('<table bgcolor="#F0F0F0" width="800px" border="0" style="margin-left:auto; margin-right:auto;"><tr><th>ItemId provided is invalid. </th></tr></table>');
            html.push('</tbody></table>');
            document.getElementById("SearchResults").innerHTML = html.join("");
        }
    }
    else{
        //var html = [];
        html.push('<h1 align="center" style="margin-bottom:0px"><b>Item Details</b></h1>')
        html.push('<table id="firstTable" align="center" width="700px" cellspacing="0" cellpadding="3"><tbody>');
        //html.push('<tr><th>' + 'Index' + '</th>' + '<th>'+ 'Photo' + '</th>' + '<th>' + 'Name' + '<th>'+ 'Price' + '</th>' + '<th>'+ 'Zip Code' + '</th>' + '<th>'+ 'Condition' + '</th>' + '<th>'+ 'Shipping Option' + '</th></tr>');
        var item = jsonfile2.Item;
        if(item.hasOwnProperty('PictureURL')){
            var photo = item.PictureURL;
            html.push('<tr><th>' + 'Photo' + '</th>' + '<td>' +'<img src="' + photo + '" width=400px maxheight=600px>'+ '</td>');
        }
        if(item.hasOwnProperty('Title')){
            var title = item.Title;
            html.push('<tr><th>' + 'Title' + '</th>' + '<td>'+ title + '</td>');
        }
        if(item.hasOwnProperty('Subtitle')){
            var subtitle = item.Subtitle;
            html.push('<tr><th>' + 'Subtitle' + '</th>' + '<td>'+ subtitle + '</td>');
        }
        if(item.hasOwnProperty('CurrentPrice')){
            var price = item.CurrentPrice.Value;
            var curr = item.CurrentPrice.CurrencyID;
            html.push('<tr><th>' + 'Price' + '</th>' + '<td>'+ price + " " + curr +'</td>');
        }
        if(item.hasOwnProperty('Location')){
            var location = item.Location;
            html.push('<tr><th>' + 'Location' + '</th>' + '<td>'+ location + '</td>');
        }
        if(item.hasOwnProperty('Seller')){
            var seller = item.Seller.UserID;
            html.push('<tr><th>' + 'Seller' + '</th>' + '<td>'+ seller + '</td>');
        }
        if(item.hasOwnProperty('ReturnPolicy')){
            var returnPolicy = item.ReturnPolicy.ReturnsAccepted;
            var within = item.ReturnPolicy.ReturnsWithin;
            html.push('<tr><th width= 22%;>' + 'Return Policy' + '</th>' + '<td>'+ returnPolicy +" within " + within + '</td>');
        }

        var ela =item.ItemSpecifics.NameValueList;
        var key;
        for (key=0; key<ela.length;key++){
            if (ela[key].Name=="Brand"){
                var brand = ela[key].Value;
                html.push('<tr><th>' + 'Brand' + '</th>' + '<td>'+ brand + '</td>');
            }
            if(ela[key].Name=="Model"){
                var model = ela[key].Value;
                html.push('<tr><th>' + 'Model' + '</th>' + '<td>'+ model + '</td>');
            }
            if(ela[key].Name=="MPN"){
                var mpn = ela[key].Value;
                html.push('<tr><th>' + 'MPN' + '</th>' + '<td>'+ mpn + '</td>');
            }
            if(ela[key].Name=="Storage Capacity"){
                var strge = ela[key].Value;
                html.push('<tr><th width= 22%;>' + 'Storage Capacity' + '</th>' + '<td>'+ strge + '</td>');
            }
            if(ela[key].Name=="Network"){
                var net = ela[key].Value;
                html.push('<tr><th>' + 'Network' + '</th>' + '<td>'+ net + '</td>');
            }
            if(ela[key].Name=="Manufacturer Color"){
                var man = ela[key].Value;
                html.push('<tr><th width= 22%;>' + 'Manufacturer Color' + '</th>' + '<td>'+ man + '</td>');
            }
            if(ela[key].Name=="Style"){
                var style = ela[key].Value;
                html.push('<tr><th>' + 'Style' + '</th>' + '<td>'+ style + '</td>');
            }
            if(ela[key].Name=="Contract"){
                var con = ela[key].Value;
                html.push('<tr><th>' + 'Contract' + '</th>' + '<td>'+ con + '</td>');
            }
            if(ela[key].Name=="Features"){
                var fea = ela[key].Value;
                html.push('<tr><th>' + 'Features' + '</th>' + '<td>'+ fea + '</td>');
            }
            if(ela[key].Name=="Camera Resolution"){
                var cam = ela[key].Value;
                html.push('<tr><th width= 22%;>' + 'Camera Resolution' + '</th>' + '<td>'+ cam + '</td>');
            }
            if(ela[key].Name=="Lock Status"){
                var lsta = ela[key].Value;
                html.push('<tr><th>' + 'Lock Status' + '</th>' + '<td>'+ lsta + '</td>');
            }
            if(ela[key].Name=="Cellular Band"){
                var cb = ela[key].Value;
                html.push('<tr><th width= 22%;>' + 'Cellular Band' + '</th>' + '<td>'+ cb + '</td>');
            }
            if(ela[key].Name=="Operating System"){
                var lsta = ela[key].Value;
                html.push('<tr><th width= 22%;>' + 'Operating System' + '</th>' + '<td>'+ lsta + '</td>');
            }
            if(ela[key].Name=="Screen Size"){
                var ss = ela[key].Value;
                html.push('<tr><th>' + 'Screen Size' + '</th>' + '<td>'+ ss + '</td>');
            }
            if(ela[key].Name=="Processor"){
                var lsta = ela[key].Value;
                html.push('<tr><th>' + 'Processor' + '</th>' + '<td>'+ lsta + '</td>');
            }
            if(ela[key].Name=="RAM"){
                var ram = ela[key].Value;
                html.push('<tr><th>' + 'RAM' + '</th>' + '<td>'+ ram + '</td>');
            }
        }
    html.push('</tbody></table>');
    
    html.push('<div align = "center"> <button id="but" onclick="sellMSG()"><p><b>click to show seller message<b></p><div id = "arrow"></div></button></div>');
    
    document.getElementById("SearchResults").innerHTML = html.join("");
    }

    
    
//----------------------IFRAME-----------------------------------
    var description = item.Description;
    //var description = "";
    var ifrm = document.createElement("iframe");
    if(description == ""){
        htmlll= [];
        htmlll = ('<table bgcolor="#F0F0F0" width="800px" border="0" style="margin-left:auto; margin-right:auto;"><tr><th> No seller message has been found. </th></tr></table>');
        ifrm.setAttribute("srcdoc", "<html><body>" + htmlll + "</body></html>");
        ifrm.id = "myIframe";
        ifrm.style.width = "100%";
        ifrm.style.height = "60px";
        ifrm.style.border ="none";
        ifrm.style.display = "none";
        document.getElementById("sellerMsg").appendChild(ifrm);
    }
    else{
        //var ifrm = document.createElement("iframe");
        ifrm.setAttribute("srcdoc", "<html><body>" + description + "</body></html>");
        ifrm.setAttribute("id", "myIframe");
        var ss = ifrm.srcdoc;
        document.getElementById("sellerMsg").appendChild(ifrm);
        var fr = document.getElementById("myIframe").contentWindow.document.body;
        var iframeDocHeight = fr.scrollHeight;
        var iframeDocWidth = fr.scrollWidth;   
        console.log(iframeDocHeight);
        ifrm.style.height = iframeDocHeight + "vh";
        ifrm.style.width ="99%";//iframeDocWidth + "vh"; // h 99%;
        ifrm.style.float = "center";
        ifrm.style.border ="none";
        //ifrm.scrolling = "no";
        ifrm.style.display = "none";
        ifrm.style.frameborder="0";
        ifrm.style.overflow = "auto"; 
        //ifrm.style.position="relative";
        document.getElementById("sellerMsg").appendChild(ifrm);
    }
//------------------------------------------------------------------

    
//---------------------------------SIMILAR ITEMS ---------------------------------
    html2 = [];
    var booom = item.ItemID;

    html2.push('<div align = "center"> <button id="but2" onclick="similar()"><p><b>click to show similar items<b></p><div id = "arrow2"></div></button></div>');
    //html2.push('<a href="first.php?submit=Search&getThis=' + booom + '&last=' + booom + '"> click to see similar items</a>');
    //html2.push('<div align = "center"> <input type="submit" id="but" onclick="similar()"><p><b>click to show similar items<b></p><div id = "arrow"></div></button></div>');
    
    document.getElementById("TEST").innerHTML = html2.join("");

}
</script>
            

                
<?php
    if(isset($_GET["getThis"])){
        echo '<script type="text/javascript">',
        'callNow();',
        '</script>';
        
        echo '<script type="text/javascript">',
        'callNow2();',
        '</script>';
    }
            
    
?>
            

<script type="text/javascript">
    //var eee =  <//?php echo "'$apicall'" ?>;
    //document.write(eee);
    var checkCondition = <?php echo json_encode($go); ?>;
    //document.write("<br> Check Condition:  ");
    //document.write(checkCondition);
    var jsonfile = <?php echo json_encode($json_a); ?>;
    var jsonfile2 = <?php echo json_encode($json_a2); ?>;
    
    //All info to be passed by href(extos to submit=Search!)
    
    var keyw = document.getElementById("address").value;
    var cate = document.getElementById("category").value;
    var near_search = "";
    var milia ="";
    var geol= "";
    var z_code ="";
    //Condition
    var c_new ="";
    var c_used = "";
    var c_unspe ="";      
    //Shipping Options
    var s_local ="";
    var s_free = "";
    
    if(document.getElementById("nearbySearch").checked == true){
        near_search = "new";
        milia = document.getElementById("keyword").value;
        getCoordinates();
        geol = document.getElementById("geoloc").value;
        if(document.getElementById("zip_code").value != ""){ //htan else if
            z_code = document.getElementById("zip_code").value;
        }
    }
    //Condition
    if(document.getElementById("condNew").checked==true){
        c_new = document.getElementById("condNew").value;
    }
    if(document.getElementById("condUsed").checked==true){
        c_used = document.getElementById("condUsed").value;
    }
    if(document.getElementById("condUnspecified").checked==true){
        c_unspe = document.getElementById("condUnspecified").value;
    }
    
    //Shipping Options
    if(document.getElementById("localPickup").checked==true){
        s_local = document.getElementById("localPickup").value;
    }
    if(document.getElementById("freeShipping").checked==true){
        s_free = document.getElementById("freeShipping").value;
    }
        
    
//------findItemsByAdv(jsonfile, checkCondition);
    
//------function findItemsByAdv(root, checkCond) {
    
//------var items = root.findItemsAdvancedResponse[0].searchResult[0].item || [];
    myF3();
    myF4();
    if(jsonfile != null){     
        if((jsonfile.findItemsAdvancedResponse[0]).hasOwnProperty('errorMessage')){    
            if(jsonfile.findItemsAdvancedResponse[0].errorMessage[0].error[0].errorId == "18"){
                htmll=[];
                htmll.push('<table bgcolor="#F0F0F0" width="800px" border="0" style="margin-left:auto; margin-right:auto;"><tr><th>ZipCode is invalid. </th></tr></table>');
                document.getElementById("SearchResults").innerHTML = htmll.join("");
            }
        }
        else if(jsonfile.findItemsAdvancedResponse[0].paginationOutput[0].totalEntries == "0"){
            //adidas music 
            //console.log("WII");
            htmlll=[];
            htmlll.push('<table bgcolor="#F0F0F0" width="800px" border="0" style="margin-left:auto; margin-right:auto;"><tr><th> No Records have been found. </th></tr></table>');
            document.getElementById("SearchResults").innerHTML = htmlll.join("");
        }
        
        else{
          var items = jsonfile.findItemsAdvancedResponse[0].searchResult[0].item || [];
          var html = [];
          html.push('<table width="99%" cellspacing="0" cellpadding="3" style="border:1px solid #DDDDDD";><tbody>');
          html.push('<tr><th>' + 'Index' + '</th>' + '<th>'+ 'Photo' + '</th>' + '<th>' + 'Name' + '<th>'+ 'Price' + '</th>' + '<th>'+ 'Zip Code' + '</th>' + '<th>'+ 'Condition' + '</th>' + '<th>'+ 'Shipping Option' + '</th></tr>');
          var itemid = "";
          for (var i = 0; i < items.length; ++i) {
            var item     = items[i];
            var title    = item.title;
            var pic      = item.galleryURL;
            var viewitem = item.viewItemURL;
            itemid = item.itemId
            var price = item.sellingStatus[0].currentPrice[0].__value__;
            var zzip = item.postalCode;

            //if unspecified condition, en prepei na to kamnw access touto!
            var condition = "N/A";
    //------if(checkCond >0){
            if(checkCondition>0){
                condition = item.condition[0].conditionDisplayName[0];
            }
            //if gia shipping option
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
            if (null != title && null != viewitem) {
              var i_1 = i + 1;
              var boom = item;
              html.push('<tr><td>' + i_1 + '</td>');
              html.push('<td>' + '<img src="' + pic + '" border="0">' + '</td>');
              //html.push('<td><a href="first.php?keyword=' + keyw + '&Category=' +cate+  '&getThis=' + itemid +'&geoloc=' +geol+ '">' + title + '</a></td>');// EIXA TO PRIN
              html.push('<td><a href="index.php?keyword=' + keyw + '&Category=' +cate+  '&getThis=' + itemid); 
              ///DAME PAIZEI POLLIN IF.
                //Meta pou to basikon, gia na pintonounte.
                if(c_new != ""){
                    html.push('&condNew=new'); //or + c_new
                }
                if(c_used != ""){
                    html.push('&condUsed=used');
                }
                if(c_unspe != ""){
                    html.push('&condUunspecified=unspecified');
                }
                if(s_local != ""){
                    html.push('&localPickup=on');
                }
                if(s_free != ""){
                    html.push('&freeShipping=on');
                }
                //nearbySearch=new&miles=10&location=here
                //nearbySearch=new&miles=10&location=on&zip_code=90008
                if(near_search =="new"){
                    //myF3();
                    html.push('&nearbySearch=new');
                    html.push('&miles=' + milia);
                    if(z_code != ""){
                        html.push('&location=on');
                        html.push('&zip_code=' + z_code);
                        //myF4();
                    }
                    else{
                        html.push('&location=here');
                        html.push('&geoloc='+geoloc);
                    }
                }
              html.push('">'  +title + '</a></td>');
              html.push('<td>' + '$'+ price + '</td>');
              html.push('<td>' + zzip + '</td>');
              html.push('<td>' + condition + '</td>');
              html.push('<td>' + shippingOption + '</td></tr>');
            }
          }
          html.push('</tbody></table>');
          document.getElementById("SearchResults").innerHTML = html.join("");
        }
    }
    else{
        html=[];
        html.push('<table bgcolor="#F0F0F0" width="800px" border="0" style="margin-left:auto; margin-right:auto;"><tr><th> No Records have been found. </th></tr></table>');
        document.getElementById("SearchResults").innerHTML = html.join("");
    }
 
//------} 
    
</script>  
</div>
</body>
</html>