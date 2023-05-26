export async function deleteEvent(eventId) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/events/${eventId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    if (response.ok) {
      console.log("Event deleted");
      const eventContainer = document.querySelector(
        `[event_container-id="${eventId}"]`
      );
      eventContainer.remove();
    } else {
      console.log("Delete failed");
    }
  } catch (error) {
    console.log("Error", error);
  }
}
