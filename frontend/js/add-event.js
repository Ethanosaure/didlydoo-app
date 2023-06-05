import { adding_more_date } from "./adding_more_date.js";
import { POST_fetch } from "./function-POST.js";
import { show_dialog } from "./show-dialog.js";

const add_more_date = document.querySelector("#add_more_date");
add_more_date.addEventListener("click", adding_more_date);
const author = document.querySelector("#dialog_author");
const title = document.querySelector("#dialog_title");
const description = document.querySelector("#dialog_description");
const date = document.querySelector("#dialog_date");



export function add_event() {
  const add_btn = document.querySelector("#add_btn");
  add_btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
  add_btn.addEventListener("click", async () =>{
  if (!title.value || !author.value || !description.value || !date.value) {
    alert('Please, write else I kill you !');
    return;
  } 
  await POST_fetch();
});
}
show_dialog();