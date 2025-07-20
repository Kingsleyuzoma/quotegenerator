const quotes = [
    "Believe in yourself and all that you are",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you",
    "Great things never come from comfort zones",
    "Success doesn't just find you. You have to go out and get it.",
    "Don't stop when you're tired. Stop when you're done."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}