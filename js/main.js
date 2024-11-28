



var quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend", author: "albert camus" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];


function displayQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length); 
    var selectedQuote = quotes[randomIndex];


    document.getElementById("quote").textContent = '"' + selectedQuote.quote + '"';
    document.getElementById("author").textContent = '— ' + selectedQuote.author;

}
