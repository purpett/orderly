// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import { createRoot } from "react-dom/client";

import ReactAppRoot from "./components/ReactAppRoot";

const rootElement = document.getElementById("react-app")
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<ReactAppRoot />)
}

document.addEventListener("turbo:load", () => {
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

  const orderCompleteCheckbox = document.querySelector("#order-complete-checkbox");
  if (orderCompleteCheckbox) {
    orderCompleteCheckbox.addEventListener("change", (e) => {
      const form = e.target.closest("form");
      form.submit();
    })
  }

  const itemDoneCheckboxes = document.querySelectorAll(".item-done-checkbox");
  for (let i = 0; i < itemDoneCheckboxes.length; i++) {
    itemDoneCheckboxes[i].addEventListener("change", (e) => {
      const form = e.target.closest("form");
      form.submit();
    })
  }
})