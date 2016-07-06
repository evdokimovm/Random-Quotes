$(document).ready(function() {
	getRandomQuote()

	$('.new-quote-btn').on('click', function(event) {
		event.preventDefault()
		getRandomQuote()
	})

	function getRandomQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?',
			dataType: 'JSON',
			success: function(data) {
				if (data.quoteAuthor == "") {
					data.quoteAuthor = "Unknown"
				}

				$('.text').text(data.quoteText)
				$('.author').text(data.quoteAuthor)
				$('.tweet-quote-btn').attr("href", 'https://twitter.com/intent/tweet?text=' + data.quoteText + 'Author: ' + data.quoteAuthor)
			}
		})
	}
})
