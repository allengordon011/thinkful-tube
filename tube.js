//document ready
$(document).ready(function(){
//get search input ==>
//listener for submit button
//store input in variable
$('form').on('submit', function(e) {
	 e.preventDefault();

   var userValue = $('input').val();
   searchYouTube(userValue, displayData);
});

var ENDPOINT = "https://www.googleapis.com/youtube/v3/search";
//send JSon query==>
//create query object

function searchYouTube(userValue, callback){
	var query = {
		part: 'snippet',
		key: 'AIzaSyAL6SU2FGzeWTOltP8Zg4KIauwmt9CgoV4',
		q: userValue
	}
//get results of JSon query (getJSon)==>
	$.getJSON(ENDPOINT, query, callback);
}

//post results of JSon query==>
function displayData(data) {
	var videos = data.items
	videos.forEach(function(video) {
		var imgUrl = video.snippet.thumbnails.default.url;
		var imgHtml = "<img src=" + imgUrl + ">";
		$(".js-results").append(imgHtml);
	})
}

});
