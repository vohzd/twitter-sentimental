$(document).ready(function() {
    $('#firstHalf').fadeIn(1222);
});

document.getElementById("submitButton").addEventListener("click",gatherUserInput);
var output = document.getElementById("secondHalf");
var lovelyData = {};

function gatherUserInput(){
	var queryString = document.getElementById("queryString").value;
	var numberOfPosts = document.getElementById("numberOfPosts").value;
	if (queryString != ""){
		submitToPHP(queryString,numberOfPosts);
		moveToOutput();
	}
	else{
		printError("You need enter a hashtag or search term");
	}
}

function printError(message){
	var div = document.createElement("div");
		div.setAttribute("id","error");
		div.appendChild(document.createTextNode(message));
		document.getElementById("prompt").appendChild(div);
}

function submitToPHP(queryString,numberOfPosts){

	$.ajax({
  		type: "POST",
  		url: "processorWIP.php",
  		data: "queryString="+queryString+"&numberOfPosts="+numberOfPosts,
  		success: function(text){
  			 //output.innerHTML = text
  			 lovelyData = text;
  			 drawOutput(lovelyData);
  		}
  	});
} 

function moveToOutput(){
	$('#firstHalf').slideUp();
	$('#secondHalf').fadeIn(500);
}

$( document ).ajaxStart(function() {
   $("#loading").show();
});

$( document ).ajaxStop(function() {
  $("#loading").hide();
  $('#backToTop').show;
});

function drawOutput(lovelyData){
	var o = jQuery.parseJSON(lovelyData);
	console.log(o);
	for (i in o){
		var user = o[i].user;
		var tweetNum = o[i].name;
		var text = o[i].text;
		var sentiment = o[i].sentiment;
		createResult(user,tweetNum,text,sentiment);

	}
}

function createResult(user,tweetNum,text,sentiment){

	if (sentiment == "positive"){
		$('.outputBoxPositive').append(tweetNum);
		$('.outputBoxPositive').append("&nbsp;" + " -- ");
		$('.outputBoxPositive').append("<b>" + user + "</b>");
		$('.outputBoxPositive').append("<br />");
		$('.outputBoxPositive').append(text);
		$('.outputBoxPositive').append("<br />")
		$('.outputBoxPositive').append("User is happy about this :)");
		$('.outputBoxPositive').append("<br />");
		$('.outputBoxPositive').css("display","block");
		$('.outputBoxPositive').append("<br />");
		}
	if(sentiment == "negative"){
		$('.outputBoxNegative').append(tweetNum);
		$('.outputBoxNegative').append("&nbsp;" + " -- ");
		$('.outputBoxNegative').append("<b>" + user + "</b>");
		$('.outputBoxNegative').append("<br />");
		$('.outputBoxNegative').append(text);
		$('.outputBoxNegative').append("<br />")
		$('.outputBoxNegative').append("User is unhappy about this :(");
		$('.outputBoxNegative').append("<br />");
		$('.outputBoxNegative').css("display","block");
		$('.outputBoxPositive').append("<br />");
		}
	if(sentiment == "neutral"){
		$('.outputBoxIndifferent').append(tweetNum);
		$('.outputBoxIndifferent').append("&nbsp;" + " -- ");
		$('.outputBoxIndifferent').append("<b>" + user + "</b>");
		$('.outputBoxIndifferent').append("<br />");
		$('.outputBoxIndifferent').append(text);
		$('.outputBoxIndifferent').append("<br />")
		$('.outputBoxIndifferent').append("User is indifferent :|");
		$('.outputBoxIndifferent').append("<br />");
		$('.outputBoxIndifferent').css("display","block");		
		$('.outputBoxPositive').append("<br />");
		}

}





