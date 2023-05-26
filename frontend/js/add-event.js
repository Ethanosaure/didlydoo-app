// import { validation } from "./validation.js";
import { show_dialog } from "./show-dialog.js";
let i = 0;
export function add_event() {
  show_dialog();
  const author = document.querySelector("#dialog_author");
  const title = document.querySelector("#dialog_title");
  const description = document.querySelector("#dialog_description");
  const date = document.querySelector("#dialog_date");
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
//   };
