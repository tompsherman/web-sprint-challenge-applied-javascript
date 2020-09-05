// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector(".header-container");

function Header() {
  const headerDiv = document.createElement("header");
  const currentDate = document.createElement("span");
  const mastHead = document.createElement("h1");
  const temperature = document.createElement("span");

  headerDiv.appendChild(currentDate);
  headerDiv.appendChild(mastHead);
  headerDiv.appendChild(temperature);

  headerDiv.classList.add("header");
  currentDate.classList.add("date");
  temperature.classList.add("temp");

  currentDate.textContent = "MARCH 28, 2020";
  mastHead.textContent = "Lambda Times";
  temperature.textContent = "98°";

  return headerDiv;
}

headerContainer.appendChild(Header());
