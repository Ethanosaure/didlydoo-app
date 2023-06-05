const attendees_availability = document.querySelector(
  ".attendees_availability"
);
let Array = [];
let objets = {};
export async function availability(eventId) {
  const section = document.getElementById(`${eventId}`);
  const table = section.querySelector(".table");
  const tr = table.querySelectorAll("tr");
  const trlast = tr[tr.length - 1];
  const attendee = trlast.querySelector(".attendees").textContent;
  const attend_availability = trlast.querySelectorAll(
    ".attendees_availability"
  );
  const availables = attend_availability.textContent;
  const availableBoolean = Boolean(availables);
  const dateAttendee = table.querySelectorAll(".date");
  for (let i = 0; i < attend_availability.length; i++) {
    let availability = `${Boolean(attend_availability[i].textContent)}`;
    let date = `${dateAttendee[i].textContent}`;
    Array.push({ date, availability });
  }
  Array.forEach((element) => {
    objets.element = element;
  });
  console.log(objets);

  let updatedAvailability = {
    name: attendee,
    dates: [objets],
  };
  console.log(updatedAvailability);
  await fetch(`http://localhost:5000/api/events/${eventId}/attend/`, {
    method: "PATCH",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(updatedAvailability),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}
