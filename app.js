const result = document.querySelector(".result");

const copy = document.querySelector(".copy");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.innerText);
});

// ----------------------------------------------------------------

const data = document.querySelectorAll(".n");
const colors = document.querySelectorAll(".color");
const bw = document.querySelector(".bw");
const bc = document.querySelector(".bc");
const bgc = document.querySelector(".bgc");
const w = document.querySelector(".w");
const h = document.querySelector(".h");
const r = document.querySelector(".r");
const test = document.querySelector(".test");

const b = document.querySelector(".border-tag");
const bgct = document.querySelector(".background-tag");
const width = document.querySelector(".width-tag");
const height = document.querySelector(".height-tag");
const rotate = document.querySelector(".rotate-tag");

const generateData = () => {
  test.style.backgroundColor = bgc.value;
  test.style.borderWidth = `${bw.value}px`;
  test.style.borderColor = bc.value;
  test.style.width = `${w.value}px`;
  test.style.height = `${h.value}px`;
  test.style.rotate = `${r.value}deg`;

  b.innerText = `border:${bw.value}px solid ${bc.value};`;
  bgct.innerText = `background-color:${bgc.value};`;
  width.innerText = `width:${w.value}px;`;
  height.innerText = `height:${h.value}px;`;
  rotate.innerText = `rotate:${r.value}deg;`;
};

const generate = (x) => {
  x.forEach((el, i) => {
    x[i].oninput = (e) => {
      el.value = e.target.value;
      generateData();
    };
  });
};

generate(data);
generate(colors);
