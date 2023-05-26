export function add_event() {
  const section = document.createElement("section");
  const author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("placeholder", "author");
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "title");

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("placeholder", "decription");
  const date = document.createElement("input");
  date.setAttribute("type", "date");

  section.appendChild(author);
  section.appendChild(title);
  section.appendChild(description);

  section.appendChild(date);

  document.body.appendChild(section);
}
