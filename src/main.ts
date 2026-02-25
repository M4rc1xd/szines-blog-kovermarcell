import { Bejegyzes } from "./bejegyzes";

const bejegyzesek: Bejegyzes[] = [
  new Bejegyzes(
    "Az első bejegyzés",
    "Ez az első bejegyzésem a blogban.",
    "#FF0000",
  ),
  new Bejegyzes(
    "A második bejegyzés",
    "Ez a második bejegyzésem a blogban.",
    "#00FF00",
  ),
];

function megjelenit() {
  const bejegyzesekContainer = document.getElementById("bejegyzesek") as HTMLElement;
  bejegyzesekContainer.innerHTML = "";
  for (const bejegyzes of bejegyzesek) {
    const article = document.createElement("article");
    article.style.backgroundColor = bejegyzes.color;

    const title = document.createElement("h2");
    title.textContent = bejegyzes.title;
    article.appendChild(title);

    const content = document.createElement("p");
    content.textContent = bejegyzes.content;
    article.appendChild(content);

    bejegyzesekContainer.appendChild(article);
  }
}

document.getElementById("gomb")?.addEventListener("click", (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title-input") as HTMLInputElement;
  const contentInput = document.getElementById("content-input") as HTMLInputElement;
  const colorInput = document.getElementById("color-input") as HTMLInputElement;

  const bejegyzes = new Bejegyzes(
    titleInput.value,
    contentInput.value,
    colorInput.value,
  );
  bejegyzesek.push(bejegyzes);
  
  titleInput.value = "";
  contentInput.value = "";
  colorInput.value = "";

  megjelenit();
});

document.addEventListener("DOMContentLoaded", () => {
  megjelenit();
});