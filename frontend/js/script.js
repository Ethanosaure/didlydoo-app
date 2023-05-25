import { API_test } from "./add-event.js";
// import { add_event } from "./add-event.js";

const button = document.querySelector("#add_event_btn");

button.addEventListener("click", async () => await API_test());
