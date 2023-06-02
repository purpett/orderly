// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"))
// root.render(<div>Hello</div>)

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
})