export function show_dialog() {
  const dialogElm = document.querySelector("#dialogElm");
  const add_btn = document.querySelector("#add_event_btn");

  add_btn.addEventListener("click", () => {
    dialogElm.showModal();
  });
}
