export async function availability(eventId) {
  let attendees_availability = document.querySelector(
    ".attendees_availability"
  );

  const date = document.querySelector(".date");
  const attend = document.querySelector(".attendees");
  const attendValue = attend.textContent;
  const availabilityText = attendees_availability.textContent;
  const available = availabilityText.toLowerCase() === "False";

  const updatedAvailability = {
    name: attendValue,
    dates: [
      {
        date: new Date(date.textContent).toISOString(),
        available: available,
      },
    ],
  };
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
