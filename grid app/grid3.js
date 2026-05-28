const canvas = document.getElementById("canvas");
lineWidthNum.addEventListener("input", () => {
settings.lineWidth = +lineWidthNum.value;
lineWidth.value = lineWidthNum.value;
syncAndDraw();
});


color.addEventListener("input", () => {
settings.color = color.value;
syncAndDraw();
});


opacity.addEventListener("input", () => {
settings.opacity = +opacity.value;
opacityNum.value = opacity.value;
syncAndDraw();
});
opacityNum.addEventListener("input", () => {
settings.opacity = +opacityNum.value;
opacity.value = opacityNum.value;
syncAndDraw();
});


dash.addEventListener("change", () => {
settings.dash = dash.value;
syncAndDraw();
});


cellIndex.addEventListener("change", () => {
settings.cellIndex = cellIndex.checked;
syncAndDraw();
});


// Presets
for (let btn of document.querySelectorAll("button[data-preset]")) {
btn.addEventListener("click", () => {
let n = +btn.dataset.preset;
settings.rows = settings.cols = n;
rows.value = rowsNum.value = cols.value = colsNum.value = n;
syncAndDraw();
});
}


// Drag & Drop
[dropzone, canvas].forEach(el => {
el.addEventListener("dragover", e => {
e.preventDefault();
el.style.borderColor = "#333";
});
el.addEventListener("dragleave", e => {
e.preventDefault();
el.style.borderColor = "#bbb";
});
el.addEventListener("drop", e => {
e.preventDefault();
el.style.borderColor = "#bbb";
if (e.dataTransfer.files[0]) loadImage(e.dataTransfer.files[0]);
});
});