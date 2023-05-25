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
