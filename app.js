let percentage = document.querySelector("#pre");

let range = document.querySelector("#rage");

let value = 0;

(function update() {
  range.setAttribute("value", value);
  percentage.innerHTML = value + " %";
  value++;
  if (value < 101) {
    setTimeout(update, 30);
  }
})()
