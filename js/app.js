$(document).ready(function(){
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
			order:'date',
			part:'snippet, id',
			q:q,
			type:'video',
			key:'AIzaSyCiIjAFb8ivauUPaaFzhAdl3iIWXEn_Gok'}, function(data){
			console.log(data);

			/*
			for (i=1; i<data.items.length; i++){
				var output = getOutput(data.items[i]);
					$('#results').append(output); 
			}
			*/

			$.each(data.items, function(index, value){
					var output = getOutput(value);
					$('#results').append(output); 
				});		
	});}


function getOutput (item){
	var videoId=item.id.videoId;
	var title = item.snippet.title;
	var output = '<li>' + 
	'<iframe width="200" height=auto src="https://www.youtube.com/embed/'+videoId+'" frameborder="2" allowfullscreen></iframe>' + 
	'<h3>'+title+'</h3>'+'</li>';
	return output;
}	