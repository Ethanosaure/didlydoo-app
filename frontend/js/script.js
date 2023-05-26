import { first_event } from "./single-event.js";
import { add_event } from "./add-event.js";

await first_event();
const button = document.querySelector("#add_event_btn");

button.addEventListener("click", () => add_event());
