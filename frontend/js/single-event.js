const button = document.createElement('button');

export async function API_single_events() {
    await fetch("http://localhost:5000/api/events/attendees")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  button.addEventListener("click", async () => await API_single_events());