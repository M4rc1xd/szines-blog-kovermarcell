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

document.addEventListener("DOMContentLoaded", () => {
  megjelenit();
});