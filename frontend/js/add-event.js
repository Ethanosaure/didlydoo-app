// import { validation } from "./validation.js";
import { show_dialog } from "./show-dialog.js";
export function add_event() {
  show_dialog();

  const author = document.querySelector("#dialog_author");
  const title = document.querySelector("#dialog_title");
  const description = document.querySelector("#dialog_description");
  const date = document.querySelector("#dialog_date");
  const event = {
    name: title.value,
    author: author.value,
    description: description.value,
    dates: date.value,
  };

  const add_btn = document.querySelector("#add_btn");
  add_btn.addEventListener("click", async () => {
    await fetch("http://localhost:5000/api/events/")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
    // {
    //   method: "POST",
    //   body: JSON.stringify(event),
    //   headers: {
    //     accept: "application/json",
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }
  });
}

// fetch("http://localhost:5000/api/events/"),
//   {
//     method: "POST",

//     section: JSON.stringify({
//       author: author_input,
//       dates: date_input,
//       name: title_input,
//       description: description_input,
//     }),
//   }
