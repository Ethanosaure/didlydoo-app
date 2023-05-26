import { first_event } from "./single-event.js";
import {deleteEvent} from "./deleteEvent.js";

await first_event();
const button = document.querySelector("#add_event_btn");

// button.addEventListener("click", );

const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function (e) {
    const eventId = e.target.dataset.eventId;
    deleteEvent(eventId);
  });
});
