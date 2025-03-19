import * as htmlToImage from "html-to-image";
import * as fs from "node:fs";

const document = fs.readFileSync(
  "/Users/nguyentran/Desktop/flyer/src/flyer.html",
  "utf-8",
);

console.log(document);
const node = document.getElementById("my-node");

htmlToImage
  .toPng(node)
  .then((dataUrl) => {
    const img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch((err) => {
    console.error("oops, something went wrong!", err);
  });

htmlToImage
  .toPng(document.getElementById("my-node"))
  .then((dataUrl) => download(dataUrl, "my-node.png"));
