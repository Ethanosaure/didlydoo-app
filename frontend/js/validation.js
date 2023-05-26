let i = 0;
export async function validation() {
  const date = document.querySelector(`#date${i}`);
  const author = document.querySelector(`#author${i}`);
  const title = document.querySelector(`#title${i}`);
  const description = document.querySelector(`#description${i}`);
  const section = document.querySelector(`#section${i}`);

  if (!date.value) {
    console.log("no date");
    return;
  }
  if (!author.value) {
    console.log("no author");
    return;
  }
  if (!title.value) {
    console.log("no title");
    return;
  }
  if (!description.value) {
    console.log("no description");
    return;
  }

  document.querySelector(`#author_event${i}`).innerHTML = author.value;

  //   const event_array = [];
  //   event_array.push(author.value, title.value, description.value, date.value);
  //   console.log(event_array);
  //   const author_value = document.createElement('');
  //   const date_value = date.value;
  //   const title_value = title.value;
  //   const description_value =
  i++;
}
