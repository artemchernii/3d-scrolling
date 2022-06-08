const ZSPACING = -1000;
const frames = [...document.getElementsByClassName('frame')];
let lastPos = ZSPACING / 5;
let zVals = [];
for (let i = 0; i < frames.length; i++) {
  zVals[i] = i * ZSPACING + ZSPACING;
}

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top;

  zVals = zVals.map((val, i) => {
    const transform = `translateZ(${val}px)`,
      opacity = val < Math.abs(ZSPACING) / 1.8 ? 1 : 0;
    frames[i].setAttribute(
      'style',
      `transform: ${transform}; opacity: ${opacity}`
    );
    return (val += delta * -5.5);
  });
};
window.scroll(0, 1);
