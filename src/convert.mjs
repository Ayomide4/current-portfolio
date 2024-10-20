import { readFileSync, writeFileSync } from "fs";
import { marked } from "marked";
import { argv } from "node:process";

const fileName = argv[2];

async function convertMarkdownToHtml(fileName) {
  // Read the Markdown file
  const markdown = readFileSync(`./assets/posts/${fileName}.md`, "utf8");

  // Convert to HTML (if marked is async)
  const html = marked(markdown);

  // Save the HTML output
  writeFileSync(`../public/${fileName}.html`, html);

  console.log("Markdown converted to HTML!");
}

// Call the function
convertMarkdownToHtml(fileName).catch((err) => console.error(err));
