import { array } from "./adding_more_date.js";
export async function POST_fetch() {
  const author = document.querySelector("#dialog_author");
  const title = document.querySelector("#dialog_title");
  const description = document.querySelector("#dialog_description");
  const date = [];
  array.forEach((element) => {
    date.push(element);
  });
  console.log(date);
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
      dates: date,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
}
