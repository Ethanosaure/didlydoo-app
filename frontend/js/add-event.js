export async function API_test() {
  await fetch("http://localhost:5000/api/events/")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((erro) => {
      throw new Error(erro);
    });
}

// export function add_event() {
//   const event_input_value = document.querySelector("#text_input").value;
//   const description_input_value =
//     document.querySelector("#description_input").value;
//   const date_input = document.querySelector("#date_input").value;
//   const date_input_value = new Date(date_input);

//   if (!event_input_value || !description_input_value || !date_input_value) {
//     alert("no event to add");
//     return;
//   }
// }
