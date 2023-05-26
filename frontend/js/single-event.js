export async function first_event() {
  const response = await fetch("http://localhost:5000/api/events/");
  const json = await response.json();
  console.log(json);

  json.forEach((event) => {
    const eventAuthor = event.author;
    const eventName = event.name;
    const eventDescription = event.description;
    const eventId = event.id;

    const dates = event.dates;
    const dateHeaders = dates.map((date) => date.date);

    const section = document.createElement("section");
    section.classList.add("event_container");

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
    section.appendChild(deleteBtn);

    const table = document.createElement("table");
    table.classList.add("table");

    const th = document.createElement("th");
    th.innerHTML = "";
    table.appendChild(th);

    dateHeaders.forEach((dateHeader) => {
      const dateColumn = document.createElement("th");
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
      td.innerHTML = name;
      tr.appendChild(td);

      availability.forEach((available) => {
        const availabilityCell = document.createElement("td");
        availabilityCell.innerHTML = available;
        tr.appendChild(availabilityCell);
      });

      table.appendChild(tr);
    });

    section.appendChild(table);
    document.body.appendChild(section);
  });
}
