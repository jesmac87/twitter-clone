$(document).ready(function(){
	$('.tweet-compose').on('click' ,  function(){
		//show the text counter and the tweet button when clicking text area
		$(this).closest('#tweet-content').find('#tweet-controls').show();
		//double the amount of text space availble to tweet
		$(this).closest('#tweet-content').find('.tweet-compose').css({'height' : '5em'});
	});


	//modify the char count so user knows how many characters are left
	$('.tweet-compose').on('keyup', function(){
		
		var charCount = $(this).closest('#tweet-content').find('#char-count');
		var maxCharacters = charCount.data('charcount');
		var keyCount =  maxCharacters - (+$(this).val().length);
		charCount.text(keyCount);

		//will change color of char count to red when user gets below 10 chars left
		if(keyCount <= 10){
		 	charCount.css('color' , 'red');
		 }else{
		 	charCount.css('color' , '#999');
		 };

		 //will disable button if threshold is met
		 if(keyCount < 0){
		 	$('#tweet-submit').prop('disabled', true);
		 }else{
		 	$('#tweet-submit').prop('disabled', false);
		 };
	});

	//create a new tweet when user clicks tweet.
	$('#tweet-submit').on('click', function(){
		var message = $('.tweet-compose').val();
		//reset the textarea to be blank
		$('.tweet-compose').val("");
		//reset the character count to original value 140
		$('#char-count').text(140);
		//reset to default color
		$(this).closest('#tweet-content').find('#char-count').css('color' , '#999');
		//create new tweet
		$('#stream').prepend('<div class = "tweet"><div class="content"><img class="avatar" src="img/Jessem Face.png"><strong class="fullname">Jesse Mace</strong><span class="username"> @JMDevMnt</span><p class="tweet-text"></p></div></div>' );
		//add the reply, tweet, favorite, more actions to tweet.
		$('#stream	div:first').find('.content').append('<div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div>')
		//add the message to the newly created tweet
		$('#stream div:first').find('.tweet-text').prepend(message);
		
	});

	//Show/hide the stats div for the tweet
	$('.content').on('click', function(){
		$(this).find('.stats').animate({height: "toggle"}, 1000);
	});

});