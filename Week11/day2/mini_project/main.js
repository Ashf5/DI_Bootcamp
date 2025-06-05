
const quotes = [
	{ id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
	{ id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
	{ id: 2, author: "Marilyn Monroe", quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring." },
	{ id: 3, author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
	{ id: 4, author: "Mark Twain", quote: "The secret of getting ahead is getting started." },
	{ id: 5, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
	{ id: 6, author: "Dr. Seuss", quote: "Don't cry because it's over, smile because it happened." },
	{ id: 7, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
	{ id: 8, author: "Helen Keller", quote: "Keep your face to the sunshine and you cannot see a shadow." },
	{ id: 9, author: "Steve Jobs", quote: "Your time is limited, so don’t waste it living someone else’s life." },
	{ id: 10, author: "Nelson Mandela", quote: "It always seems impossible until it’s done." },
	{ id: 11, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
	{ id: 12, author: "Aristotle", quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
	{ id: 13, author: "Leonardo da Vinci", quote: "Simplicity is the ultimate sophistication." },
	{ id: 14, author: "Buddha", quote: "What you think, you become. What you feel, you attract. What you imagine, you create." }
];

// start with the first quote 
updateQuote(0);

// on generate button click get quote
let generateButton = document.getElementById('generate_button');
generateButton.addEventListener('click', generateClick);

// on add quote click call the function addQuote
let buttonAdd = document.getElementById('add_button');
buttonAdd.addEventListener('click', addQuote);

// add for search button 
let buttonSearch = document.getElementById('search_button');
buttonSearch.addEventListener('click', search);

// This function is called by the generate button and gets a random quote and adds to the dom.
function generateClick(e) {
	let current = document.getElementById('quote');

	// Get a new quote and make sure it's not the same as the old one.
	let newNum;
	do {
		newNum = Math.floor(Math.random() * quotes.length);
	} while (quotes[newNum].quote === current.innerText);
	// call update quote with the id
	updateQuote(newNum);
}

// This function is called when the submit button is called on the add_form 
function addQuote(e) {
	e.preventDefault();
	let form = document.forms[0];

	let quote = form.quote.value;
	let author = form.author.value;

	if (quote === '' || author === '') {
		alert("You must enter valid values");
		return;
	}

	quotes.push({ id: quotes.length, author, quote });
	form.quote.value = '';
	form.author.value = '';
	updateQuote(quotes.length - 1)

}

// This function is called when a quote is searched by author. Updates the form.
function search(e) {
	e.preventDefault();
	let form = document.forms[1];
	let query = form.author_query.value;
	let quote = quotes.filter(quote => quote.author.toLowerCase() === query.toLowerCase());
	if (quote.length > 0) {
		updateQuote(quote[0].id)
	} else {
		updateQuote(-1);
	}
	// clear the form
	form.author_query.value = ''
}

// This function actually updates the dom for the quotes, takes id num. If it's -1 means it wasn't found
function updateQuote(num) {
	let current = document.getElementById('quote')
	let author = document.getElementById('quote_author');
	// If doesn't exist
	if (num === -1) {
		current.innerText = 'Sorry, we couldn\'t find that quote';
		author.innerText = '';
	} else {
		current.innerText = quotes[num].quote;
		author.innerText = quotes[num].author;
	}
}