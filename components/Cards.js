import axios from "axios";

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    // let articlePub = getArticle(response.data.articles.javascript);
    debugger;
    let jsArray = Array.from(response.data.articles.javascript);

    jsArray.forEach((element) => {
      let published = getArticle(element);
      cardEntry.appendChild(published);
    });

    let bootArray = Array.from(response.data.articles.bootstrap);

    bootArray.forEach((element) => {
      let published = getArticle(element);
      cardEntry.appendChild(published);
    });

    let techArray = Array.from(response.data.articles.technology);

    techArray.forEach((element) => {
      let published = getArticle(element);
      cardEntry.appendChild(published);
    });

    let jqArray = Array.from(response.data.articles.jquery);

    jqArray.forEach((element) => {
      let published = getArticle(element);
      cardEntry.appendChild(published);
    });

    let nodeArray = Array.from(response.data.articles.node);

    nodeArray.forEach((element) => {
      let published = getArticle(element);
      cardEntry.appendChild(published);
    });

    console.log(Array.from(response.data.articles.bootstrap));

    console.log(Array.from(response.data.articles.technology));

    console.log(Array.from(response.data.articles.jquery));

    console.log(Array.from(response.data.articles.node));

    // cardEntry.appendChild(articlePub);
  })
  .catch((err) => {
    console.log("CARDS ERROR! CARDS ERROR! CARDS ERROR!");
  });

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardEntry = document.querySelector(".cards-container");

function getArticle(object) {
  const newCard = document.createElement("div");
  const newHeadline = document.createElement("div");
  const newAuthor = document.createElement("div");
  const newImageContainer = document.createElement("div");
  const newImage = document.createElement("img");
  const newByLine = document.createElement("span");

  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImageContainer);
  newAuthor.appendChild(newByLine);
  newImageContainer.appendChild(newImage);

  newCard.classList.add("card");
  newHeadline.classList.add("headline");
  newImageContainer.classList.add("img-container");

  newHeadline.textContent = object.headline;
  newImage.src = object.authorPhoto;
  newImage.style.width = "100%";
  newByLine.textContent = `By: ${object.authorName}`;

  newCard.addEventListener("click", console.log(newHeadline));

  return newCard;
}
