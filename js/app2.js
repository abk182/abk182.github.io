$(function(){
$('#search-form').submit(function(e){
	e.preventDefault() //отмена отправки формы
});

})

function search() {
	$('#results').html(''); //отчиска  результатов
	//$('#buttons').html('');
	q = $('#query').val();
	$.get ("https://www.googleapis.com/youtube/v3/search",{
			maxResults:20,
			order:'viewCount',
			part:'snippet, id',
			q:q,
			type:'video',
			key:'AIzaSyCiIjAFb8ivauUPaaFzhAdl3iIWXEn_Gok'}, function(data){
			console.log(data);

			/*
			for (i=1; i<data.items.length; i++){
				var output = getOutput(data.items[i]);
					$('#results').append(output); 
			}*/
			

			$.each(data.items, function(index, value){
					var output = getOutput(value);
					$('#results').append(output); 
				});	
	});

}

function akordeon(){
	    
             $('li:hover').next().stop().slideToggle();
}

function getOutput (item){
	var videoId=item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.medium.url;
	var channel = item.snippet.channelTitle;
	var date = item.snippet.publishedAt;
	var output = '<li onclick="akordeon()">' + 
	'<div class="thumb">'+
		'<img src="'+thumb+'">'+
	'</div>'+

	'<div class="description">'+ 
		'<h2>'+title+'</h2>'+
		'Author: '+channel+'</br>'+
		'Date: '+date+'</br>'+
	'</div>'+

	'</li>'+
	'<div class="video-akordeon" style="display:none; width:100%; height:500px;">'+
	'<iframe width=100% height=500px src="https://www.youtube.com/embed/'+videoId+'" frameborder="0" allowfullscreen></iframe> '+
	'</div>'
	return output;
}





