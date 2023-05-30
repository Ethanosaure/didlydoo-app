const array = [];

export async function add_guest(eventId, attendees_input) {
  try {
    const response = await fetch(`http://localhost:5000/api/events/${eventId}`);
    const json = await response.json();
    
    json.dates.forEach((element) => {
      const newAttend = {
        date: element.date,
        available: null,
      };
      array.push(newAttend);
    });
    
    console.log(array[0].date);

    const postResponse = await fetch(`http://localhost:5000/api/events/${eventId}/attend/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: attendees_input.value,
        dates: array.map((item) => ({
          date: new Date(item.date).toISOString(),
          available: false,
        })),
      }),
    });
    
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
