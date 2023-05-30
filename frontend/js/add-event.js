import { adding_more_date } from "./adding_more_date.js";
import { POST_fetch } from "./function-POST.js";
import { show_dialog } from "./show-dialog.js";
export function add_event() {
  show_dialog();
  const add_more_date = document.querySelector("#add_more_date");
  add_more_date.addEventListener("click", adding_more_date);
  const add_btn = document.querySelector("#add_btn");
  add_btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
  add_btn.addEventListener("click", POST_fetch);
}
