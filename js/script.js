/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "The wound is the place where the Light enters you.",
    source: "Jalaluddin Rumi",
    citation: "The Masnavi by Jalaluddin Rumi",
    year: 1262,
  },
  {
    quote:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    source: "Khalil Gibran",
    tags: ["philosophy", "poetry"],
  },
  {
    quote: "I am the master of my fate. I am the captain of my soul.",
    source: "William Ernest Henley",
    year: 1875,
  },
  {
    quote: "I am neither a flower of melody nor a veil of music.",
    source: "Faiz Ahmad Faiz",
  },
  {
    quote:
      "Failure is not fatal until we surrender. Trying again is the key of glorious victory.",
    source: "Muhammad Iqbal",
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuoteObject = quotes[randomNumber];
  return randomQuoteObject;
}

function changerandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const RGBcolor = `rgb: (${red}, ${green}, ${blue})`;
  document.querySelector("body").style.backgroundColor = RGBcolor;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    html += `<span class="tags"> ${randomQuote.tags}</span>`;
  }
  html += `</p>`;
  document.getElementById("quote-box").innerHTML = html;

  changerandomColor();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
