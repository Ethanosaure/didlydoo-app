const array = [];
export async function add_guest(eventId, attendees_input) {
  await fetch(`http://localhost:5000/api/events/${eventId}`)
    .then((res) => res.json())
    .then((json) => {
      json.dates.forEach((element) => {
        const newAttend = {
          date: element.date,
          available: null,
        };
        array.push(newAttend);
      });
      console.log(array[0].date);
    })
    .catch((err) => console.log(err));

  await fetch(`http://localhost:5000/api/events/${eventId}/attend/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: "Gaston",
      dates: [
        {
          date: new Date(array[0].date).toISOString(),
          available: boolean(false),
        },
      ],
    }),
  })
    .then(() => console.log("yes"))
    .catch((err) => {
      throw new Error(err);
    });
}
