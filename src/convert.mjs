import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";

import { marked } from "marked";
import { dirname, join, extname } from "path";
import { fileURLToPath } from "url";

//TODO: fix bugj
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const postsDir = join(__dirname, "../src/assets/posts/"); // Directory containing your Markdown files
const outputDir = join(__dirname, "../public/"); // Directory where you want to save the HTML files
const jsonOutputPath = join(outputDir, "posts.json"); // Path for the JSON output

// Function to convert Markdown files to HTML
const convertMarkdownToHtml = () => {
  // Read all Markdown files in the posts directory
  const markdownFiles = readdirSync(postsDir).filter(
    (file) => extname(file) === ".md",
  );
  const htmlFiles = []; // Array to store the names of converted HTML files

  markdownFiles.forEach((file) => {
    const fileName = file.replace(".md", ""); // Get the base file name without extension
    const outputFilePath = join(outputDir, `${fileName}.html`); // Path for the HTML output

    // Check if the HTML file already exists
    if (!existsSync(outputFilePath)) {
      // Read the Markdown file
      const markdown = readFileSync(join(postsDir, file), "utf8");

      // Convert to HTML
      const html = marked(markdown);

      // Save the HTML output
      writeFileSync(outputFilePath, html);

      // Add the file name to the list of converted HTML files
      htmlFiles.push(fileName);
      console.log(`Converted ${file} to HTML.`);
    } else {
      console.log(`Skipping ${file}, HTML already exists.`);
    }
  });

  // Save the list of HTML file names to a JSON file
  writeFileSync(jsonOutputPath, JSON.stringify(htmlFiles, null, 2));
  console.log(`Generated JSON file at ${jsonOutputPath}`);
};

// Call the function
convertMarkdownToHtml();
