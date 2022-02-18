function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px');
}

document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);


setInterval(function(){ 
  console.log("test");
  const ghost1 = document.getElementById('ghost1');

  if (ghost1.classList.contains("active")) {
    animateDiv($('.ghost1'));
    document.getElementById('ghost1').style.display = "block";

  } else {
    document.getElementById('ghost1').style.display = "none";

  }
}, 1);


function makeNewPosition($container) {

  // Get viewport dimensions (remove the dimension of the div)
  var h = $container.height() - 10;
  var w = $container.width() - 10;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $target.animate({
    top: newq[0],
    left: newq[1]
  }, speed, function () {
    animateDiv($target);
  });

};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.13;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

}


