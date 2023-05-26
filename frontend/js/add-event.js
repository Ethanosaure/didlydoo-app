export function add_event() {
  const section = document.createElement("section");
  const enter_form = document.createElement("h2");
  enter_form.innerText = "Fill the blank";
  const author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("placeholder", "author");
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "title");
  const validate = document.createElement("button");
  validate.setAttribute("type", "button");
  validate.innerText = "Add";

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("placeholder", "decription");
  const date = document.createElement("input");
  date.setAttribute("type", "date");

  section.appendChild(enter_form);
  section.appendChild(author);
  section.appendChild(title);
  section.appendChild(description);
  section.appendChild(date);
  section.appendChild(validate);
  document.body.appendChild(section);
}
