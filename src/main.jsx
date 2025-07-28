import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import FlipClock from "./pages/FlipClock.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="flex justify-center items-center h-screen w-full box-border bg-black">
			<FlipClock />
		</div>
	</StrictMode>
);
