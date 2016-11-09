//variables & state
var ENDPOINT = "https://www.googleapis.com/youtube/v3/search";


//rendering
function searchYouTube(userValue, callback){
	var query = {
		part: 'snippet',
		key: 'AIzaSyAL6SU2FGzeWTOltP8Zg4KIauwmt9CgoV4',
		q: userValue
	}
	$.getJSON(ENDPOINT, query, callback);
}

function displayData(data) {
	var videos = data.items
	videos.forEach(function(video) {
		var imgUrl = video.snippet.thumbnails.default.url;
		var imgHtml = "<img src=" + imgUrl + " id=" + video.id.videoId + ">";
		$(".js-results").append(imgHtml);
	})
}


//event listeners
$(document).ready(function(){

	$('form').on('submit', function(e) {
		e.preventDefault();
		var userValue = $('input').val();
		searchYouTube(userValue, displayData);
	});

	$('input:text').click(function(){ 
		$(this).val(''); 
	});

	$("div").on("click", "img", function(e) {
		var id = $(this).attr("id");
		var embed = '<iframe width="560" height="315" ' +
		'src="https://www.youtube.com/embed/' + id + 
		'" frameborder="0"' +
		' allowfullscreen></iframe>'
		$(".video").html(embed);
	})

});
