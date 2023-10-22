let tick = true;
function ticker() {
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
}
setInterval(ticker, 1000);