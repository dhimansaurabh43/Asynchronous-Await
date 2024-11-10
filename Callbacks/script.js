const btn = document.querySelector("button");
const container = document.querySelector(".container");
let myURL = "https://jsonplaceholder.typicode.com/users";

btn.addEventListener("click", () => {
  container.style.display = "grid";
  setTimeout(() => {
    fetchDataAndDisplay();
  }, 5000);
});

function fetchDataAndDisplay() {
  fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const posts = data.posts;
      const titles = posts.map((post) => post.title).join("<br>");
      container.innerHTML = `<p>Callback executed after 5 seconds.</p><p>${titles}</p>`;
    })
    .catch((error) => {
      container.innerHTML = "Error fetching data";
      console.error("Error fetching data:", error);
    });
}
