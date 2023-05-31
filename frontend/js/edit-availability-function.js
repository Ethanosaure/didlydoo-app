export async function availability(eventId) {
  const attendees_availability = document.querySelectorAll(
    ".attendees_availability"
  );
  const date = document.querySelectorAll(".date");
  const attend = document.querySelectorAll(".attendees");
  const attendValues = Array.from(attend).map((element) => element.textContent);

  attendees_availability.forEach((availability) => {
    const availabilityText = availability.textContent;
    const available = availabilityText === "True";

    const dateValues = Array.from(date).map((element) =>
      new Date(element.textContent).toISOString()
    );

    let updatedAvailability = {
      name: attendValues.join(", "),
      dates: [
        {
          date: dateValues.map((element) => new Date(element).toISOString()),
          available: available,
        },
      ],
    };
    console.log(updatedAvailability);
    return updatedAvailability;
  });

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
