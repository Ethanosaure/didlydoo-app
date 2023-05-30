const array = [];
export function adding_more_date() {
  const date_input = document.querySelector("#dialog_date");
  const output = document.querySelector("output");

  function add_date() {
    array.push(date_input.value);
  }
  add_date();
  output.textContent = array;
}
