// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))
root.render(<div>Hello</div>)
