const onHtmlCodeChange = () => {
  const htmlInput = document.getElementById("html-code");
  let htmlCode = htmlInput.value;

  const resultDiv = document.getElementById("result");
  const htmlHilighetDiv = document.getElementById("html-code-highlighted");

  let highlighethtmlCode = hljs.highlight(htmlCode, { language: "html" }).value;

  htmlHilighetDiv.innerHTML = highlighethtmlCode;
  resultDiv.innerHTML = htmlCode;
};
const activateEditing = () => {
  const htmlHilighetDiv = document.getElementById("html-code-highlighted");
  htmlHilighetDiv.style.display = "none";
};
const deactivateEditing = () => {
  const htmlHilighetDiv = document.getElementById("html-code-highlighted");
  htmlHilighetDiv.style.display = "block";
};

const onCssCodeChange = () => {
  const cssInput = document.getElementById("css-code");
  let cssCode = cssInput.value;

  const headStyles = document.getElementById("head-styles");
  resultDiv.innerHTML = htmlCode;
};
