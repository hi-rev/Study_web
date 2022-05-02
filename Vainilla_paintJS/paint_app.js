const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white"; /* 기본 하양 배경 */
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() { /* 그리기 멈추기 */
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(e) { /* 마우스 움직일 때 좌표 */
    const x = e.offsetX;
    const y = e.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handelColorClick(e) {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handelRangeChange(e) {
    const size = e.target.value;
    ctx.lineWidth = size;
}

function handelModeClick(e) { /* 누를 때마다 버튼 이름 바뀌게 하기 */
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handelCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(e) { /* save 기능을 만들기 위해 기존 canvas 의 저장은 작동하지 않도록 함 */
    e.preventDefault();
}

function handleSaveClick(e) {
    const image = canvas.toDataURL(); // 디폴트 값은 png
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
}

if (canvas) { /* 캔버스가 있을 때 작동? */
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handelCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handelColorClick));

if (range) {
    range.addEventListener("input", handelRangeChange);
}

if (mode) {
    mode.addEventListener("click", handelModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}