export class Bejegyzes {
  title: string;
  content: string;
  color: string;

  constructor(title: string, content: string, color: string) {
    if (title.trim() === "") {
      throw new Error("A title nem lehet üres!");
    }

    if (content.trim() === "") {
      throw new Error("A content nem lehet üres!");
    }

    if (color.length !== 7 || !color.startsWith("#")) {
      throw new Error("A color hét karakter hosszúságú kell legyen és #-tel kell kezdődjék!");
    }

    this.title = title;
    this.content = content;
    this.color = color;
  }
}
