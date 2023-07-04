// Define an array of quotes
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Failure is the opportunity to begin again more intelligently. - Henry Ford"
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = quote;
}

// Event listener for the "New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", generateQuote);

// Generate a quote on page load
generateQuote();
