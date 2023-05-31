import { first_event } from "./single-event.js";
import { add_event } from "./add-event.js";
import { deleteEvent } from "./deleteEvent.js";
import { editAvailability } from "./edit-availability.js";

await first_event();
const button = document.querySelector("#add_event_btn");
button.addEventListener("click", () => add_event());

// button.addEventListener("click", );
const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function (e) {
    const eventId = e.target.dataset.eventId;
    deleteEvent(eventId);
  });
});

editAvailability();
