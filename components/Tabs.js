import axios from "axios";

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((response) => {
    let newTabs = tabMaker(response.data.topics);
    // console.log(response.data.topics);
    tabContainer.appendChild(newTabs);
  })
  .catch((err) => {
    console.log("TABS ERROR! TABS ERROR! TABS ERROR!");
  });

const tabContainer = document.querySelector(".topics");

function tabMaker(array) {
  const tabs = document.createElement("div");

  tabs.classList.add("tab");

  array.forEach((element) => {
    let newEl = document.createTextNode(element);

    const item = document.createElement("div");

    tabs.appendChild(item);
    item.appendChild(newEl);

    tabContainer.appendChild(tabs);
  });

  return tabs;
}

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
