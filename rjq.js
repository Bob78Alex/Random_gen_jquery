$(document).ready(function(){
	getQuote();
var randomQuote, randomNum, randomAuthor;
var text, author;
function getQuote(){
/* 
	var quotes = ["Hello World", "Hey, I'm here!", "Whats up"];
	var authors = ["Author 1", "Author 2", "Author 3"];

    randomNum = Math.floor(Math.random()*quotes.length);
	randomQuote = quotes[randomNum];
	randomAuthor = authors[randomNum];

	$(".quote").text(randomQuote);
	$(".author").text(randomAuthor);*/
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	$.getJSON(url, function(data){
$(".quote").html('"' + data.quoteText + '"');
$(".author").html('- ' + data.quoteAuthor);
text = data.quoteText;
author = data.quoteAuthor;
	});

}
$("#newQuote").on("click", function(){
getQuote();
});

$("#tweet").on("click", function(){
	window.open("https://twitter.com/intent/tweet?text="+"'"+text+"'" +" - "+ author);
});

	
});


