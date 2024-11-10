const btn = document.querySelector("button");
const container = document.querySelector(".container");

btn.addEventListener("click", fetchData);

async function fetchData() {
  container.style.display = "block";
  try {
    const data = await fetchDataWithTimeout(
      "https://dummyjson.com/posts",
      5000
    );
    const posts = data.posts;
    const titles = posts.map((post) => post.title).join("<br>");
    container.innerHTML = `<p>Async executed.</p><p>${titles}</p>`;
  } catch (error) {
    container.textContent = error.message;
  }
}

async function fetchDataWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, timeout);

    fetch(url)
      .then((response) => {
        clearTimeout(timer);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
