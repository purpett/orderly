// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import { createRoot } from "react-dom/client";

import ReactAppRoot from "./components/ReactAppRoot";

// get the root element from the DOM
const rootElement = document.getElementById("react-app")
if (rootElement) {
  // create a root for the React app
  const root = createRoot(rootElement)
  // render the ReactAppRoot component as the root of the React app
  root.render(<ReactAppRoot />)
}

// Execute code when Turbo Streams finish loading
document.addEventListener("turbo:load", () => {
  // Mobile navigation handling
  const hamburger = document.querySelector("#mobile-nav-hamburger");
  const mobileNavClose = document.querySelector("#mobile-nav-close");
  const mobileNav = document.querySelector("#mobile-nav");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.remove("hidden");
    });

    mobileNavClose.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    })
  }

  // Handling for the order complete checkbox (restaurants can tick off orders as they are completed)
  const orderCompleteCheckbox = document.querySelector("#order-complete-checkbox");
  if (orderCompleteCheckbox) {
    orderCompleteCheckbox.addEventListener("change", (e) => {
      const form = e.target.closest("form");
      form.submit();
    })
  }

  // Handling for the item done checkboxes (restaurants can tick off items as they are prepared)
  const itemDoneCheckboxes = document.querySelectorAll(".item-done-checkbox");
  for (let i = 0; i < itemDoneCheckboxes.length; i++) {
    itemDoneCheckboxes[i].addEventListener("change", (e) => {
      const form = e.target.closest("form");
      form.submit();
    })
  }
})