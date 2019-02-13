$(document).ready(function(){
var randomQuote, randomNum, randomAuthor;
function getQuote(){

	var quotes = ["Hello World", "Hey, I'm here!", "Whats up"];
	var authors = ["Author 1", "Author 2", "Author 3"];

    randomNum = Math.floor(Math.random()*quotes.length);
	randomQuote = quotes[randomNum];
	randomAuthor = authors[randomNum];

	$(".quote").text(randomQuote);
	$(".author").text(randomAuthor);
	
}
$("#newQuote").on("click", function(){
getQuote();
});

$("#tweet").on("click", function(){
	window.open("https://twitter.com/intent/tweet?text="+"'"+randomQuote+"'" +" - "+ randomAuthor);
});

	
});


