import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load the Remixicon CSS
import "remixicon/fonts/remixicon.css";

// Import GSAP for animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

createRoot(document.getElementById("root")!).render(<App />);
