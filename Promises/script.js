const btn = document.querySelector("button");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.style.display = "grid";
  setTimeout(() => {
    fetchData()
      .then((data) => {
        const posts = data.posts;
        const titles = posts.map((post) => post.title).join("<br>");
        container.innerHTML = `<p>Promises executed after 5 seconds.</p><p>${titles}</p>`;
      })
      .catch((error) => {
        container.textContent = error;
      });
  }, 5000);
});

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => resolve(data))
      .catch(() => reject("Operation timed out..."));
  });
}
