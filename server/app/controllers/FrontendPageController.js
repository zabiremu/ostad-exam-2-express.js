import fs from "fs";
import path from "path";

export const home = async (req, res) => {
  return res.send("<h1>This is the Home Page</h1>");
};

export const about_page = async (req, res) => {
  return res.send("This is the About Page");
};

export const contact_page = async (req, res) => {
  return res.send("This is the Contact Page");
};

export const file_write = async (req, res) => {
  const directoryPath = path.join("app/storage", "files"); // Custom directory path
  const filePath = path.join(directoryPath, "demo.txt");

  console.log("Directory Path:", directoryPath);
  console.log("File Path:", filePath);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFile(filePath, "hello world.", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("An error occurred while writing the file.");
    }
    res.send("File 'demo.txt' has been saved successfully.");
  });
};
