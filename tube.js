//document ready
$(document).ready(function(){
//get search input ==>
//listener for submit button
//store input in variable
$('form').on('submit', function(e) {
	 e.preventDefault();

   var userValue = $('input').val();
	 console.log(userValue);

});

//send JSon query==>
//create query object

function searchYouTube(userValue){
	var query = {
		part: 'snippet'
		key: (your API key as a string)
		q: (your search term as a string)
	}
}



//get results of JSon query (getJSon)==>


//post results of JSon query==>


});
