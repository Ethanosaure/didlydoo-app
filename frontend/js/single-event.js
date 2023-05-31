import { add_guest } from "./adding-guest-function.js";
import { availability } from "./edit-availability-function.js";
export async function first_event() {
  const response = await fetch("http://localhost:5000/api/events/");
  const json = await response.json();
  // console.log(json);
  json.forEach((event) => {
    const eventAuthor = event.author;
    const eventName = event.name;
    const eventDescription = event.description;

    const dates = event.dates;
    const dateHeaders = dates.map((date) => date.date);
    const eventId = event.id;

    const section = document.createElement("section");
    section.classList.add("event_container");
    const sectionElement = section;

    const validation = document.createElement("button");
    validation.setAttribute("type", "button");
    validation.setAttribute("class", "validation");
    validation.innerText = "Validation";
    validation.addEventListener(
      "click",
      async () => await availability(eventId)
    );
    /// EDIT ///

    const editButton = document.createElement("button");
    editButton.classList.add("edit_btn");
    editButton.setAttribute("type", "button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      enableEditingMode(sectionElement, eventId);
    });

    /// EDIT ///

    const attendees_input = document.createElement("input");
    attendees_input.setAttribute("type", "text");
    attendees_input.setAttribute("placeholder", "enter a guest");
    attendees_input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        add_guest(eventId, attendees_input);
      }
    });

    const author = document.createElement("h2");
    author.classList.add("event_author");
    author.innerHTML = eventAuthor;

    const title = document.createElement("h2");
    title.classList.add("event_title");
    title.innerHTML = eventName;

    const description = document.createElement("p");
    description.classList.add("event_description");
    description.innerHTML = eventDescription;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete event";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.dataset.eventId = eventId;

    section.appendChild(author);
    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(editButton);
    section.appendChild(deleteBtn);
    section.appendChild(validation);
    section.appendChild(attendees_input);

    const table = document.createElement("table");
    table.classList.add("table");

    const th = document.createElement("th");
    th.innerHTML = "";
    table.appendChild(th);

    dateHeaders.forEach((dateHeader) => {
      const dateColumn = document.createElement("th");
      dateColumn.classList.add("date");
      dateColumn.innerHTML = dateHeader;
      table.appendChild(dateColumn);
    });

    const attendees = {};
    dates.forEach((date) => {
      date.attendees.forEach((attendee) => {
        const { name, available } = attendee;
        if (!attendees[name]) {
          attendees[name] = Array(dates.length).fill("");
        }
        const dateIndex = dateHeaders.indexOf(date.date);
        if (available !== null) {
          attendees[name][dateIndex] = available ? "True" : "False";
        }
      });
    });

    Object.entries(attendees).forEach(([name, availability]) => {
      const tr = document.createElement("tr");

      const td = document.createElement("td");
      td.classList.add("attendees");
      td.innerHTML = name;
      tr.appendChild(td);

      availability.forEach((available) => {
        const availabilityCell = document.createElement("td");
        availabilityCell.classList.add("attendees_availability");
        availabilityCell.innerHTML = available;
        tr.appendChild(availabilityCell);
      });

      table.appendChild(tr);
    });

    section.appendChild(table);
    document.body.appendChild(section);
  });

  /// EDIT ///

  function enableEditingMode(section, eventId) {
    const author = section.querySelector(".event_author");
    const title = section.querySelector(".event_title");
    const description = section.querySelector(".event_description");

    author.contentEditable = "true";
    title.contentEditable = "true";
    description.contentEditable = "true";

    section.classList.add("editing");

    // Save changes when the user leaves the edited element
    author.addEventListener("blur", () => saveEventDetails(section, eventId));
    title.addEventListener("blur", () => saveEventDetails(section, eventId));
    description.addEventListener("blur", () =>
      saveEventDetails(section, eventId)
    );
  }

  function saveEventDetails(section, eventId) {
    const author = section.querySelector(".event_author");
    const title = section.querySelector(".event_title");
    const description = section.querySelector(".event_description");
    const editButton = section.querySelector(".edit_btn");

    const updatedEvent = {
      author: author.innerText,
      name: title.innerText,
      description: description.innerText,
    };

    // Update the database
    fetch(`http://localhost:5000/api/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((response) => response.json())
      .then((updatedEvent) => {
        console.log("Event details updated:", updatedEvent);
      })
      .catch((error) => console.error("Error updating event:", error));
  }
}

/// EDIT ////
