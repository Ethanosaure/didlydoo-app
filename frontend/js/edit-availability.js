export async function editAvailability() {
  let attendees_availability = document.getElementsByClassName(
    "attendees_availability"
  );
  for (let i = 0; i < attendees_availability.length; i++) {
    attendees_availability[i].addEventListener("click", function () {
      if (this.innerText === "True" || this.innerText === "V") {
        this.innerText = "X";
      } else {
        this.innerText = "V";
      }
    });
  }
}
