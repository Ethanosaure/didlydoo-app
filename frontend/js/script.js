import { first_event } from "./single-event.js";

const button = document.querySelector("#add_event_btn");

button.addEventListener("click", async () => await first_event());
