export async function POST_fetch() {
  const author = document.querySelector("#dialog_author");
  const title = document.querySelector("#dialog_title");
  const description = document.querySelector("#dialog_description");
  const date = document.querySelector("#dialog_date");
  const event = {};
  await fetch("http://localhost:5000/api/events/", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: title.value,
      author: author.value,
      description: description.value,
      dates: [date.value, [attendees.value]],
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
}
